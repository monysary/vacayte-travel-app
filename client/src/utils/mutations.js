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

// export const SAVE_ACTIVITY= gql`

// `