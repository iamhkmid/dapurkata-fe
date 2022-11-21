import { gql } from "@apollo/client";

export const CHECK_USER = gql`
  query {
    checkUser {
      id
      username
      email
      role
      firstName
      lastName
      phone
      userPicture
    }
  }
`;
