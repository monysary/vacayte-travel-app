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
            businessID
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
            businessID
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
          businessID
          businessName
          businessCategory
          businessRating
          businessURL
        }
      }
    }
  }
`;

export const BOOKMARKED = gql`
  query Bookmarked($_id: ID!) {
    selectTrip(_id: $_id) {
      activities {
        name
        saved {
          businessID
        }
      }
    }
  }
`;