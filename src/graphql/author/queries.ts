import { gql } from "@apollo/client";

export const AUTHORS = gql`
  query {
    authors {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const AUTHOR = gql`
  query ($authorId: ID!) {
    author(authorId: $authorId) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
