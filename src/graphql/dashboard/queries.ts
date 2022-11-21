import { gql } from "@apollo/client";

export const DASHBOARD = gql`
  query {
    dashboard {
      totalOrders
      totalIncome
      totalUsers
      totalProducts
      lastOrders {
        id
        grossAmount
        CustomerDetail {
          firstName
          lastName
        }
        transactionStatus
        transactionTime
      }
      graph {
        labels
        data
      }
    }
  }
`;
export const ONLINE_USERS = gql`
  query {
    onlineUsers {
      id
      firstName
      lastName
      role
    }
  }
`;

export const ONLINE_USER_QUERY = gql`
  query {
    dashboard {
      onlineUsers {
        id
        firstName
        lastName
        role
      }
    }
  }
`;
