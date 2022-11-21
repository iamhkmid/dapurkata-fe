import { gql } from "@apollo/client";

export const WISHLIST = gql`
  query {
    wishlist {
      id
      userId
      createdAt
      updatedAt
      Book {
        id
        title
        coverURL
        Author {
          id
          name
        }
      }
    }
  }
`;
