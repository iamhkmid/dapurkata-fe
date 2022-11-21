import { gql } from "@apollo/client";

export const FOOTERINFO_BY_USER = gql`
  query {
    footerPhone {
      id
      type
      phone
    }
    footerAddress {
      id
      type
      address
    }
    footerMessage {
      id
      type
      message
    }
    footerSocialMedia {
      id
      type
      name
      url
      isEnabled
    }
  }
`;

export const FOOTERINFO_PHONE = gql`
  query {
    footerPhone {
      id
      type
      phone
    }
  }
`;

export const FOOTERINFO_ADDRESS = gql`
  query {
    footerAddress {
      id
      type
      address
    }
  }
`;
export const FOOTERINFO_MESSAGE = gql`
  query {
    footerMessage {
      id
      type
      message
    }
  }
`;
export const FOOTERINFO_SOCIAL_MEDIA = gql`
  query {
    footerSocialMedia {
      id
      type
      name
      url
      isEnabled
    }
  }
`;
