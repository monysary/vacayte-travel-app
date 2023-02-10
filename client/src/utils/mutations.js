import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $username: String!, $email: String!, $password: String!) {
    register(name: $name, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        name
        username
        email
      }
    }
  }
`;
