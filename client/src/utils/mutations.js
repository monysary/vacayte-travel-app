import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    register(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($tripName: String!, $location: String!, $startDate: Date!, $endDate: Date!, $activities: [ActivitiesInput]!) {
    addTrip(tripName: $tripName, location: $location, startDate: $startDate, endDate: $endDate, activities: $activities) {
      _id
      tripName
      location
      startDate
      endDate
      activities {
        name
      }
    }
}
`

export const SAVE_ACTIVITY = gql`
  mutation SaveActivity(
    $tripId: ID!, 
    $activityName: String!, 
    $businessName: String!, 
    $businessCategory: String!, 
    $businessRating: Float!, 
    $businessUrl: String!
    ) {
      saveActivity(
        tripID: $tripId, 
        activityName: $activityName, 
        businessName: $businessName, 
        businessCategory: $businessCategory, 
        businessRating: $businessRating,
        businessURL: $businessUrl
        ) {
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
`

export const DELETE_ACTIVITY = gql`
  mutation DeleteActivity($tripId: String!, $activityName: String!, $businessId: String!) {
    deleteActivity(tripID: $tripId, activityName: $activityName, businessID: $businessId) {
      _id
      tripName
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
`