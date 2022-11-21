import { gql } from "@apollo/client";

export const COURIER_ISACTIVE = gql`
  query ($isEnabled: Boolean) {
    courier(isEnabled: $isEnabled) {
      code
      name
    }
  }
`;

export const PROVINCES = gql`
  query {
    provinces {
      province_id
      province
    }
  }
`;

export const CITIES_BY_PROV_ID = gql`
  query ($province_id: ID) {
    cities(province_id: $province_id) {
      city_id
      city_name
    }
  }
`;

export const COURIER_COST = gql`
  query ($destination: String!, $weight: Int!, $courier: String!) {
    courierCost(destination: $destination, weight: $weight, courier: $courier) {
      code
      name
      costs {
        service
        description
        cost {
          value
          etd
        }
      }
    }
  }
`;
