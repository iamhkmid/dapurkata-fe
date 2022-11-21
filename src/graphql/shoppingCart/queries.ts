import { gql } from "@apollo/client";

export const SHOPPINGCART = gql`
  query {
    shoppingCart {
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
