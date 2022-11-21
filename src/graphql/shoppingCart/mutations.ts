import { gql } from "@apollo/client";

export const CREATE_SHOPPING_CART = gql`
  mutation ($bookId: String!, $amount: Int!) {
    createShoppingCart(bookId: $bookId, amount: $amount) {
      id
      amount
      Book {
        id
        title
        price
        weight
        discount
        Author {
          id
          name
        }
        coverURL
      }
      createdAt
      updatedAt
    }
  }
`;

export const EDIT_SHOPPING_CART = gql`
  mutation ($cartId: String!, $amount: Int!) {
    updateShoppingCart(cartId: $cartId, amount: $amount) {
      id
      amount
      Book {
        id
        title
        price
        weight
        discount
        Author {
          id
          name
        }
        coverURL
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_SHOPPING_CART = gql`
  mutation ($cartId: ID!) {
    deleteShoppingCart(cartId: $cartId) {
      id
      message
    }
  }
`;
