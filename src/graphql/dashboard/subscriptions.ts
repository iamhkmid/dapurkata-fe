import { gql } from "@apollo/client";

export const ONLINE_USERS_SUBS = gql`
  subscription {
    onlineUsers {
      id
      firstName
      lastName
      role
    }
  }
`;
