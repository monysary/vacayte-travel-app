const { AuthenticationError } = require("apollo-server-express");
const { User, Trip } = require("../models");
const { signToken } = require("../utils/auth.js");
const { GraphQLScalarType } = require('graphql');

const dateResolver = new GraphQLScalarType({
  name: "Date",
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toJSON();
  },
});

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getMyTrips: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const myTrips = await User.findById(context.user._id);

      return myTrips;
    },
    selectTrip: async (parent, { _id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const trip = await Trip.findById(_id);

      return trip;
    }
  },
  Mutation: {
    register: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.findOne({ email });

      if (user) {
        throw new AuthenticationError("User with this email already exists!");
      }

      const newUser = await User.create({ firstName, lastName, email, password });
      const token = signToken(newUser);
      return { token, newUser };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addTrip: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!')
      }

      const newTrip = await Trip.create({
        tripName: args.tripName,
        location: args.location,
        startDate: args.startDate,
        endDate: args.endDate,
        activities: args.activities,
      })

      const updateUserTrip = await User.findByIdAndUpdate(
        context.user._id,
        {
          $push: {
            trips: {
              _id: newTrip._id,
              tripName: newTrip.tripName,
              location: newTrip.location,
              startDate: newTrip.startDate,
              endDate: newTrip.endDate,
              activities: newTrip.activities,
            }
          }
        }
      )

      return newTrip;
    },
    saveActivity: async (
      parent,
      { tripID, activityName, businessName, businessCategory, businessRating, businessURL },
      context
    ) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!')
      };

      const trip = await Trip.findById(tripID)

      if (!trip) {
        throw new AuthenticationError('No trip found with this ID!')
      };

      // Check if trip contains the right activity
      const activityIndex = trip.activities.findIndex((activity) => activity.name === activityName);
      if (activityIndex < 0) {
        throw new AuthenticationError(`${activityName} activity not found in this trip!`)
      };

      // Check if activity is already saved
      const isAlreadySaved = trip.activities[activityIndex].saved.findIndex((business) => business.businessURL === businessURL);
      if (isAlreadySaved > -1 ) {
        throw new AuthenticationError('This business is already saved!')
      };

      trip.activities[activityIndex] = {
        name: activityName,
        saved: [
          ...trip.activities[activityIndex].saved,
          {
            businessName,
            businessCategory,
            businessRating,
            businessURL,
          }
        ]
      }

      const updatedTrip = await trip.save();

      // Adding activity under user's information
      const user = await User.findById(context.user._id);

      const userTripIndex = user.trips.findIndex((trip) => trip._id.toHexString() === tripID);
      if (userTripIndex < 0) {
        throw new AuthenticationError('Trip not found in user!')
      };

      const userTripActivityIndex = user.trips[userTripIndex].activities.findIndex((activity) => activity.name === activityName);
      if (userTripActivityIndex < 0) {
        throw new AuthenticationError(`${activityName} activity not found in the user's trip!`)
      };

      user.trips[userTripIndex].activities[userTripActivityIndex] = {
        name: activityName,
        saved: [
          ...user.trips[userTripIndex].activities[userTripActivityIndex].saved,
          {
            businessName,
            businessCategory,
            businessRating,
            businessURL,
          }
        ]
      }

      const updatedUser = await user.save();

      return updatedTrip;
    },
  },
  Date: dateResolver,
};

module.exports = resolvers;
