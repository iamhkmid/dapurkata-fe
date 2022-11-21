import { gql } from "@apollo/client";

export const RECIPIENTS = gql`
  query ($userId: ID!) {
    recipients(userId: $userId) {
      id
      firstName
      lastName
      email
      phone
      City {
        id
        name
        postalCode
        Province {
          id
          name
        }
      }
      address
    }
  }
`;

export const ADDRESS_LIST_BY_ADMIN = gql`
  query ($userId: ID!) {
    recipients(userId: $userId) {
      id
      firstName
      lastName
      address
    }
  }
`;

export const RECIPIENT = gql`
  query ($recipientId: ID!) {
    recipient(recipientId: $recipientId) {
      id
      firstName
      lastName
      email
      phone
      City {
        id
        name
        postalCode
        Province {
          id
          name
        }
      }
      address
    }
  }
`;
