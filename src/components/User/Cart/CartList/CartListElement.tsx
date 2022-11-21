import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  padding: 1rem;
  padding-bottom: 8px;
  gap: 0.5rem;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  cursor: default;
  color: ${({ theme }) => theme.color[1]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0rem;
  }
`;

export const list = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 15rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
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
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

export const Li = styled.li`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.3rem 0;
  transition: 0.4s all ease;
`;
export const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 100%;
  min-height: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  > div {
    display: flex;
    height: 5rem;
    width: 3rem;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  flex-direction: column;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: max-content;
`;
export const Info = styled.div`
  text-align: start;
  font-family: "Mulish", sans-serif;
  > h1:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
    transition: 0.4s all ease;
  }
  > h1:nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
    transition: 0.4s all ease;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1rem;
  > button {
    font-size: 0.9rem;
    height: 2.5rem;
  }
  transition: 0.4s all ease;
`;

export const AmountPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  text-align: start;
  justify-content: space-between;
  font-weight: 600;
  > h1:nth-child(1) {
    font-size: 13px;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 11px;
    }
  }
  > h1:nth-child(2) {
    font-size: 19px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 17px;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 11px;
  }
`;

export const TableInfo = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100%;
    background: ${({ theme }) => theme.background[2]};
    color: ${({ theme }) => theme.color[2]};
    z-index: 10;
  }
  > thead {
    th {
      font-size: 0.85rem;
      text-align: start;
      padding: 0.2rem 0.5rem;
      max-height: 2rem;
      ::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.border[2]};
      }
    }
  }
  > tbody {
    td {
      padding: 0.8rem 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.border[2]};
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > thead {
      th {
        font-size: 12px;
      }
    }
    > tbody {
      td {
        padding: 0.8rem 0.5rem;
      }
    }
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  min-width: 15rem;
`;
export const Price = styled.h1`
  font-size: 14px;
  width: max-content;
  font-weight: 500;
  color: ${({ theme }) => theme.color[3]};
  border-color: ${({ theme }) => theme.button.disabled.background};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 12px;
  }
  transition: 0.4s all ease;
`;

export const ActionBtn = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
