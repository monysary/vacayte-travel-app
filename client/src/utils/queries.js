import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      email
      password
      trips {
        _id
        tripName
        location
        startDate
        endDate
        activities
      }
    }
  }
`;

export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    getMyTrips {
      trips {
        _id
        tripName
        startDate
        endDate
        location
        activities
      }
    }
  }
`