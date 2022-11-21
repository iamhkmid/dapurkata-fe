import { gql } from "@apollo/client";

export const CREATE_AUTHOR = gql`
  mutation createAuthor($data: cAuthorData!) {
    createAuthor(data: $data) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_AUTHOR = gql`
  mutation ($authorId: ID!, $data: uAuthorData!) {
    updateAuthor(authorId: $authorId, data: $data) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation ($authorId: ID!) {
    deleteAuthor(authorId: $authorId) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
