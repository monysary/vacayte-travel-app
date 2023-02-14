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

  type Trip {
    _id: ID
    tripName: String
    location: String
    startDate: Date
    endDate: Date
    activities: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(tripName: String!, location: String!, startDate: Date!, endDate: Date!, activities:[String]!): Trip
  }
`;

module.exports = typeDefs;
