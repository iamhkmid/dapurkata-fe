import { gql } from "@apollo/client";

export const CREATE_BOOK = gql`
  mutation ($data: cBookData!, $cover: Upload, $otherImgs: [Upload]) {
    createBook(data: $data, cover: $cover, otherImgs: $otherImgs) {
      id
      title
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation ($data: uBookData!) {
    updateBook(data: $data) {
      id
      title
      price
      stock
      Category {
        id
        name
        group
      }
      Author {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation ($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
