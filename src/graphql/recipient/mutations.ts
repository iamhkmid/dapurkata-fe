import { gql } from "@apollo/client";

export const CREATE_RECIPIENT = gql`
  mutation ($data: cRcptData!) {
    createRecipient(data: $data) {
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

export const UPDATE_RECIPIENT = gql`
  mutation ($data: uRcptData!) {
    updateRecipient(data: $data) {
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

export const DELETE_RECIPIENT = gql`
  mutation ($recipientId: ID!) {
    deleteRecipient(recipientId: $recipientId) {
      message
    }
  }
`;
