import { FC } from "react";
import styled, { css } from "styled-components";
import { getTransactionStatus } from "../../../../../services/getStatus";
import LoadingWaitPayement from "../../../../otherComps/Loading/LoadingWaitPayement";
type TProps = {
  status: string;
};
const TransactionStatus: FC<TProps> = ({ status }) => {
  return (
    <Main>
      <Status isShowed={status === "pending"} status={status}>
        <div className="loading-wrapper">
          <LoadingWaitPayement />
        </div>
        <h1>{getTransactionStatus(status)}</h1>
      </Status>
      <Status isShowed={status === "settlement"} status={status}>
        <h1>{getTransactionStatus(status)}</h1>
      </Status>
      <Status isShowed={status === "expire"} status={status}>
        <h1>{getTransactionStatus(status)}</h1>
      </Status>
      <Status isShowed={status === "deny"} status={status}>
        <h1>{getTransactionStatus(status)}</h1>
      </Status>
      <Status isShowed={status === "cancel"} status={status}>
        <h1>{getTransactionStatus(status)}</h1>
      </Status>
      <Status isShowed={status === "failure"} status={status}>
        <h1>{getTransactionStatus(status)}</h1>
      </Status>
    </Main>
  );
};

export default TransactionStatus;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type TStatus = {
  isShowed: boolean;
  status?: string;
};
const Status = styled.div<TStatus>`
  display: flex;
  width: max-content;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 2rem;
  gap: 0.5rem;
  position: relative;
  max-height: 0;
  overflow: hidden;
  ${({ isShowed }) =>
    isShowed &&
    css`
      padding: 0.5rem 2rem;
      max-height: 3rem;
    `}
  ${({ isShowed, status, theme }) =>
    isShowed &&
    css`
      background: ${theme.transactionStatus[status].background};
      color: ${theme.transactionStatus[status].color};
    `}
  ${({ isShowed, status, theme }) =>
    isShowed &&
    status === "pending" &&
    css`
      background: transparent;
      color: ${theme.transactionStatus[status].color};
    `}
    
  > div.loading-wrapper {
    display: flex;
    position: absolute;
    left: 0;
  }
  > h1 {
    padding-left: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > h1 {
      font-size: 0.8rem;
    }
  }
  transition: 0.4s all ease;
`;
