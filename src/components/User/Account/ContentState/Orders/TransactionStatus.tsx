import { FC } from "react";
import styled, { css } from "styled-components";
import { getTransactionStatus } from "../../../../../services/getStatus";

type TProps = {
  status: string;
};

const TransactionStatus: FC<TProps> = ({ status }) => {
  return <Main status={status}>{getTransactionStatus(status)}</Main>;
};
export default TransactionStatus;

type TTStatus = { status: string };
const Main = styled.div<TTStatus>`
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
