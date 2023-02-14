import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      email
      firstName
      lastName
      password
      trips {
        _id
        activities
        endDate
        location
        startDate
        tripName
      }
    }
  }
`;
