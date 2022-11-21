import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query {
    books {
      id
      title
      price
      stock
      isbn
      Author {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_BOOK = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      description
      edition
      condition
      coverType
      discount
      series
      releaseYear
      numberOfPages
      length
      width
      weight
      stock
      price
      language
      isbn
      pictureDir
      Category {
        id
        name
        group
      }
      Author {
        id
        name
      }
      Publisher {
        id
        name
      }
      BookPicture {
        id
        type
        url
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_ORDER_BOOK = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      price
      weight
      discount
      Author {
        id
        name
      }
      BookPicture {
        id
        type
        url
      }
    }
  }
`;

export const GET_BOOK_DEL = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
    }
  }
`;

export const GET_FORM_BOOK = gql`
  query {
    authors {
      id
      name
    }
    publishers {
      id
      name
    }
    categories {
      id
      name
      group
    }
  }
`;

export const BOOKS_WITH_FILTER = gql`
  query ($filter: BookFilter!) {
    booksWithFilter(filter: $filter) {
      hasPrev
      hasNext
      skip
      take
      currentPage
      numberOfPages
      numberOfBooks
      data {
        id
        title
        price
        stock
        discount
        coverType
        coverURL
        authorName
      }
    }
  }
`;

export const GET_BOOK_DETAIL = gql`
  query ($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      description
      edition
      series
      releaseYear
      numberOfPages
      weight
      width
      length
      stock
      price
      condition
      discount
      coverType
      language
      isbn
      Category {
        id
        name
      }
      Author {
        id
        name
      }
      Publisher {
        id
        name
      }

      BookPicture {
        id
        type
        url
      }
    }
  }
`;
