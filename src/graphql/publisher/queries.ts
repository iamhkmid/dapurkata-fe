import { gql } from "@apollo/client";

export const PUBLISHERS = gql`
  query {
    publishers {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const PUBLISHER = gql`
  query ($publisherId: ID!) {
    publisher(publisherId: $publisherId) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
