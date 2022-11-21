import { gql } from "@apollo/client";

export const ORDER_INFO_SUBSCRIPTION = gql`
  subscription onOrder($orderId: ID!) {
    orderInfo(orderId: $orderId) {
      transactionTime
      transactionStatus
      fraudStatus
    }
  }
`;
