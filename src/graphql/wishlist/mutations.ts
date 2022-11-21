import { gql } from "@apollo/client";

export const ADD_WISHLIST = gql`
  mutation ($bookId: String!) {
    addWishlist(bookId: $bookId) {
      message
    }
  }
`;

export const DELETE_WISHLIST = gql`
  mutation ($bookId: String!) {
    deleteWishlist(bookId: $bookId) {
      message
    }
  }
`;
