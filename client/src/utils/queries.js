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
        activities {
          name
          saved {
            businessName
            businessCategory
            businessRating
            businessURL
          }
        }
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
        location
        startDate
        endDate
        activities {
          name
          saved {
            businessName
            businessCategory
            businessRating
            businessURL
          }
        }
      }
    }
  }
`

export const SELECT_TRIP = gql`
  query SelectTrip($_id: ID!) {
    selectTrip(_id: $_id) {
      _id
      tripName
      location
      startDate
      endDate
      activities {
        name
        saved {
          businessName
          businessCategory
          businessRating
          businessURL
        }
      }
    }
  }
`