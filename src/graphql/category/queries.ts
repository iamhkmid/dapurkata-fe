import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    categories {
      id
      name
      group
      createdAt
      updatedAt
    }
  }
`;

export const CATEGORIES_BY_USER = gql`
  query {
    categories {
      id
      name
    }
  }
`;

export const CATEGORY = gql`
  query ($categoryId: ID!) {
    category(categoryId: $categoryId) {
      id
      name
      group
      createdAt
      updatedAt
    }
  }
`;
