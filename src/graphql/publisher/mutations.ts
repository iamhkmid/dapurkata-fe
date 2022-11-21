import { gql } from "@apollo/client";

export const CREATE_PUBLISHER = gql`
  mutation createPublisher($data: cPublisherData!) {
    createPublisher(data: $data) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_PUBLISHER = gql`
  mutation ($publisherId: ID!, $data: uPublisherData!) {
    updatePublisher(publisherId: $publisherId, data: $data) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_PUBLISHER = gql`
  mutation ($publisherId: ID!) {
    deletePublisher(publisherId: $publisherId) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
