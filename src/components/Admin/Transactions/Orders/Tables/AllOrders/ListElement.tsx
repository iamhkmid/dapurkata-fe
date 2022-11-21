import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.background[2]};
  .title {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};
  }
`;

export const NumberColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DefaultColumn = styled.div``;
export const ActionColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  > button {
    min-height: 1.5rem;
    font-size: 13px;
    font-weight: 400;
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
    > button {
      font-size: 12px;
    }
  }
`;

type TTransactionStatus = { status: string };
export const TransactionStatus = styled.div<TTransactionStatus>`
  display: flex;
  padding: 0.2rem 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  max-width: 7rem;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  ${({ status, theme }) =>
    status === "pending" &&
    css`
      background: ${theme.transactionStatus[status].background};
      color: ${theme.transactionStatus[status].color};
      border: 1px solid ${theme.transactionStatus[status].border};
    `}
  ${({ status, theme }) =>
    status === "settlement" &&
    css`
      background: ${theme.transactionStatus[status].background};
      color: ${theme.transactionStatus[status].color};
      border: 1px solid ${theme.transactionStatus[status].border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

type TShippingStatus = { status: string };
export const ShippingStatus = styled.div<TShippingStatus>`
  display: flex;
  padding: 0.2rem 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  width: 100%;
  max-width: 7rem;
  min-height: 2rem;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  ${({ status, theme }) =>
    status === "unProcessed" &&
    css`
      background: ${theme.shippingStatus[status].background};
      color: ${theme.shippingStatus[status].color};
      border: 1px solid ${theme.shippingStatus[status].border};
    `}
  ${({ status, theme }) =>
    status === "inProcess" &&
    css`
      background: ${theme.shippingStatus[status].background};
      color: ${theme.shippingStatus[status].color};
      border: 1px solid ${theme.shippingStatus[status].border};
    `}
  ${({ status, theme }) =>
    status === "inShipping" &&
    css`
      background: ${theme.shippingStatus[status].background};
      color: ${theme.shippingStatus[status].color};
      border: 1px solid ${theme.shippingStatus[status].border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;
