import { gql } from "@apollo/client";

export const ORDER = gql`
  mutation ($data: OrderInput!) {
    order(data: $data) {
      id
      PaymentService {
        id
        name
        icon
        description
        PaymentType {
          id
          name
          icon
          description
        }
      }
      grossAmount
      currency
      transactionTime
      transactionStatus
      expirationTime
      fraudStatus

      PaymentInfo {
        name
        value
      }
    }
  }
`;

export const CHANGE_SHIPPING_STATUS = gql`
  mutation ($orderId: ID!, $data: changeShippingStatusData!) {
    changeShippingStatus(orderId: $orderId, data: $data) {
      message
    }
  }
`;
