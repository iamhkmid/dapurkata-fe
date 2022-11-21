import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
  mutation addCategory($data: cCatData!) {
    createCategory(data: $data) {
      id
      name
      group
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation ($categoryId: ID!, $data: uCatData!) {
    updateCategory(categoryId: $categoryId, data: $data) {
      id
      name
      group
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation ($categoryId: ID!) {
    deleteCategory(categoryId: $categoryId) {
      id
      name
      group
      createdAt
      updatedAt
    }
  }
`;
