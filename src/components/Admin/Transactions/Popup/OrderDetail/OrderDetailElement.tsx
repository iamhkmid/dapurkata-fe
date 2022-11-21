import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  flex-direction: column;
  position: relative;
  max-width: 85%;
  min-width: 85%;
  width: 85%;
  min-height: 90%;
  max-height: 90%;
  height: 90%;
  font-size: 1rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 90%;
    min-width: 90%;
    width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-height: 80%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
  transition-property: background;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

export const Section = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  height: 95%;
  gap: 1rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  > h1.title {
    font-size: 16px;
    background: ${({ theme }) => theme.button.list.background};
    color: ${({ theme }) => theme.button.list.color};
    padding: 2px 8px;
    border-radius: 3px;
    font-weight: 600;
    padding-bottom: 5px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
  .info-group {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  .info-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    > h1.title {
      font-size: 16px;
      background: ${({ theme }) => theme.button.list.background};
      color: ${({ theme }) => theme.button.list.color};
      padding: 2px 8px;
      border-radius: 3px;
      font-weight: 600;
      padding-bottom: 5px;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 14px;
      }
    }
  }
`;
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-right: 8px;

  .info-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    gap: 2px;
  }
  .name {
    position: relative;
    line-height: 1;
    ::before {
      display: flex;
      position: absolute;
      content: "";
      left: -1rem;
      top: 50%;
      transform: translateY(-50%);
      min-width: 8px;
      min-height: 8px;
      border-radius: 100%;
      background: ${({ theme }) => theme.button.primary.background};
    }
    font-size: 14px;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 13px;
    }
  }
  .value {
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 13px;
    }
  }
  .gross-amount {
    line-height: 1;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 16px;
    }
  }
`;

type TTransactionStatus = {
  status: string;
};
export const TransactionStatus = styled.div<TTransactionStatus>`
  display: flex;
  font-size: 14px;
  line-height: 1;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 2px;
  ${({ status, theme }) =>
    css`
      background: ${theme.transactionStatus[status].background};
      color: ${theme.transactionStatus[status].color};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 13px;
  }
`;

export const ItemDetail = styled.div`
  width: fit-content;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
  }
  max-height: 11rem;
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
  > div {
    display: flex;
    width: 100%;
  }
  > div > table {
    width: fit-content;
    min-width: 30rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-width: 100%;
      width: 100%;
    }
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
      th {
        font-size: 14px;
        font-weight: 500;
        text-align: start;
        padding: 2px 5px;
        max-height: 2rem;
        ::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          border-bottom: 1px solid ${({ theme }) => theme.input.border};
        }
      }
    }
    > tbody {
      td {
        font-size: 14px;
        font-weight: 500;
        padding: 5px 5px;
        border-bottom: 1px solid ${({ theme }) => theme.input.border};
        .item-name {
          font-size: 14px;
        }
      }
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      > thead {
        th {
          font-size: 13px;
        }
      }
      > tbody {
        td {
          font-size: 13px;
          padding: 5px 5px;
          .item-name {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
