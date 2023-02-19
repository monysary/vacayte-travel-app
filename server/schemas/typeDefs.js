const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    trips: [Trip]
  }

  type Activity {
    name: String
    saved: [String]
  }

  type Trip {
    _id: ID
    tripName: String
    location: String
    startDate: Date
    endDate: Date
    activities: [Activity]
  }

  input ActivitiesInput {
    name: String
    saved: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getMyTrips: User
    selectTrip(_id: ID!): Trip
  }

  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(tripName: String!, location: String!, startDate: Date!, endDate: Date!, activities:[ActivitiesInput]!): Trip
  }
`;

module.exports = typeDefs;
