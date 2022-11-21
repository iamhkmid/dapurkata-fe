import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  font-family: "Poppins", sans-serif;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 25rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;
export const TableOrders = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100%;
    background: ${({ theme }) => theme.background[2]};
    color: ${({ theme }) => theme.color[2]};
    z-index: 3;
  }
  > thead {
    tr {
      cursor: default;
    }
    th {
      font-size: 0.9rem;
      text-align: start;
      padding: 0.5rem;
      width: max-content;
      border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
      ::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
  > tbody {
    tr {
      cursor: pointer;
      color: ${({ theme }) => theme.color[1]};
      :hover {
        background: ${({ theme }) => theme.button.hover.list.background};
        color: ${({ theme }) => theme.button.hover.list.color};
        transition: 0.4s all ease;
      }
    }
    td {
      font-size: 0.85rem;
      padding: 0.8rem 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.border[2]};
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > thead {
      th {
        font-size: 0.8rem;
        transition: 0.4s all ease;
      }
    }
    > tbody {
      td {
        padding: 0.8rem 0.5rem;
        font-size: 0.8rem;
        transition: 0.4s all ease;
      }
    }
  }
`;

export const GrossAmount = styled.h1`
  min-width: max-content;
`;

export const TransactionTime = styled.h1`
  font-size: 0.82rem;
  min-width: 10rem;
  max-width: 10rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
    min-width: 8rem;
    max-width: 8rem;
  }
`;

export const Payment = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  width: max-content;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.transactionStatus.pending.background};
  color: ${({ theme }) => theme.transactionStatus.pending.color};
  border: 1px solid ${({ theme }) => theme.transactionStatus.pending.border};
  > div :nth-child(1) {
    border-bottom: 1px solid
      ${({ theme }) => theme.transactionStatus.pending.border};
  }
  > div :nth-child(2) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

export const OrderId = styled.h1`
  font-size: 0.8rem;
  max-width: 7rem;
  word-wrap: break-word;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;
