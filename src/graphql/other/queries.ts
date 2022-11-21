import { gql } from "@apollo/client";

export const GET_ENUM = gql`
  query ($name: String!) {
    __type(name: $name) {
      name
      enumValues {
        name
      }
    }
  }
`;
