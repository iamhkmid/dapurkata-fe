import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($data: cUserData!, $userPic: Upload) {
    createUser(data: $data, userPic: $userPic) {
      id
      firstName
      lastName
      username
      role
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ($userId: ID!, $data: uUserData!) {
    updateUser(userId: $userId, data: $data) {
      id
      username
      email
      firstName
      lastName
    }
  }
`;

export const DELETE_USER = gql`
  mutation ($userId: ID!, $username: String!) {
    deleteUser(userId: $userId, username: $username) {
      id
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ($data: cPData!) {
    ChangePassword(data: $data) {
      message
    }
  }
`;

export const CHANGE_USER_PIC = gql`
  mutation ($userPic: Upload!) {
    changeUserPic(userPic: $userPic) {
      message
    }
  }
`;

export const DELETE_USER_PIC = gql`
  mutation {
    deleteUserPic {
      message
    }
  }
`;

export const UPDATE_USER_BY_USER = gql`
  mutation ($userId: ID!, $data: uUserData!) {
    updateUser(userId: $userId, data: $data) {
      id
    }
  }
`;

export const CHANGE_ROLE = gql`
  mutation ($userId: ID!, $password: String!, $role: EnumRole!) {
    changeRole(userId: $userId, password: $password, role: $role) {
      id
    }
  }
`;
