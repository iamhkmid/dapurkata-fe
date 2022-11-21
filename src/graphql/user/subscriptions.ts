import { gql } from "@apollo/client";

export const NOTIFICATION_SUBSCRIPTION = gql`
  subscription {
    notification {
      id
      title
      message
      userId
      valueName
      valueId
      createdAt
      updatedAt
    }
  }
`;
