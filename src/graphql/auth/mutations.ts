import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($username: String!, $password: String!, $rememberMe: Boolean!) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      jwt
      user {
        id
        username
        email
        role
        firstName
        lastName
        phone
        userPicture
      }
    }
  }
`;

export const GOOGLE_OAUTH2_VERIFY = gql`
  mutation ($code: String!) {
    googleOauth2Verify(code: $code) {
      jwt
      user {
        id
        username
        email
        role
        firstName
        lastName
        phone
        userPicture
      }
    }
  }
`;

export const REGISTER = gql`
  mutation ($data: RegisterData!, $userPic: Upload) {
    register(data: $data, userPic: $userPic) {
      email
      expirationTime
      fetchWaitTime
      message
    }
  }
`;

export const REGISTER_CONFIRMATION = gql`
  mutation ($email: String!, $confirmCode: String!) {
    registerConfirmation(email: $email, confirmCode: $confirmCode) {
      user {
        id
        firstName
        lastName
        email
        role
      }
      message
    }
  }
`;

export const RESEND_CONFIRM_CODE = gql`
  mutation ($email: String!, $type: String!) {
    resendConfirmCode(email: $email, type: $type) {
      type
      email
      expirationTime
      fetchWaitTime
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ($email: String!, $confirmCode: String!, $password: String!) {
    resetPassword(
      email: $email
      confirmCode: $confirmCode
      password: $password
    ) {
      message
    }
  }
`;
