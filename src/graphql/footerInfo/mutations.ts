import { gql } from "@apollo/client";

export const UPDATE_FOOTER_PHONE = gql`
  mutation ($id: ID!, $phone: String!) {
    updateFooterPhone(id: $id, phone: $phone) {
      id
      type
      phone
    }
  }
`;

export const UPDATE_FOOTER_ADDRESS = gql`
  mutation ($id: ID!, $address: String!) {
    updateFooterAddress(id: $id, address: $address) {
      id
      type
      address
    }
  }
`;

export const UPDATE_FOOTER_MESSAGE = gql`
  mutation ($id: ID!, $message: String!) {
    updateFooterMessage(id: $id, message: $message) {
      id
      type
      message
    }
  }
`;

export const UPDATE_FOOTER_SOCIAL_MEDIA = gql`
  mutation ($id: ID!, $isEnabled: Boolean!, $url: String!) {
    updateFooterSocialMedia(id: $id, isEnabled: $isEnabled, url: $url) {
      id
      type
      name
      url
      isEnabled
    }
  }
`;

export const UPDATE_PUBLISHER = gql`
  mutation ($publisherId: ID!, $data: uPublisherData!) {
    updatePublisher(publisherId: $publisherId, data: $data) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_PUBLISHER = gql`
  mutation ($publisherId: ID!) {
    deletePublisher(publisherId: $publisherId) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
