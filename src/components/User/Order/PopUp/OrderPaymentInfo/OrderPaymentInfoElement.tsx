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
  max-width: 80%;
  min-width: 80%;
  width: 80%;
  min-height: 90%;
  max-height: 90%;
  height: 90%;
  font-size: 1rem;
  margin: 0.2rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 90%;
    min-width: 90%;
    width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-height: max-content;
    height: 80%;
    width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;
export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;
  gap: 1rem;
  overflow-y: auto;
  > div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
  }
`;

export const Payment = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
  }
`;
export const GrossAmount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-right: 3px solid ${({ theme }) => theme.border[2]};
  > h1.name {
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  > h1.value {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem 0;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.border[2]};
  }
  transition: 0.4s all ease;
`;

export const PaymentService = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: 500;

  > div.payment-icon-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    background: #f0f1f5c5;
    border: 1px solid ${({ theme }) => theme.button.list.background};
    height: max-content;
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  > div.name {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.color[8]};
    > h1.type {
      font-size: 0.8rem;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.7rem;
      }
    }
    > h1.service {
      font-weight: 600;
      font-size: 0.9rem;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem 0;
  }
  transition: 0.4s all ease;
`;
