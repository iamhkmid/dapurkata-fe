import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  max-width: 25rem;
  min-width: 25rem;
  max-height: 90%;
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: column;
  position: relative;
  font-size: 1rem;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin: 0.2rem;
    width: 100%;
    max-width: 100%;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  height: 100%;
  padding-top: 1.4rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding-top: 0;
  }
`;

type TEmailFormWrapper = {
  isShowed: boolean;
};
export const EmailFormWrapper = styled.div<TEmailFormWrapper>`
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  padding: 0 2px;
  ${({ isShowed }) =>
    isShowed &&
    css`
      max-height: 8rem;
      padding: 2px;
    `}
  transition: 0.4s all ease;
`;
type TConfirmCodeWrapper = {
  isShowed: boolean;
};
export const ConfirmCodeWrapper = styled.div<TConfirmCodeWrapper>`
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  padding: 0 2px;
  gap: 0.5rem;
  ${({ isShowed }) =>
    isShowed &&
    css`
      max-height: 30rem;
      padding: 2px;
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
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
export const EmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 0.8rem;

    color: ${({ theme }) => theme.color[2]};
    font-weight: 500;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
`;

type TCurrEmail = {
  isShowed: boolean;
};

export const CurrEmail = styled.div<TCurrEmail>`
  display: flex;
  align-items: center;
  max-height: 0;
  overflow: hidden;
  > h1 {
    font-size: 0.9rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  ${({ isShowed }) =>
    isShowed &&
    css`
      max-height: 2rem;
    `}
  transition: 0.4s all ease;
`;

export const ButtonLink = styled.button`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 400;
  padding: 0 0.2rem;
  font-size: 0.9rem;
  height: fit-content;
  background: transparent;
  color: ${({ theme }) => theme.link.color};
  border: none;
  outline: none;
  border-radius: 5px;

  :hover {
    color: ${({ theme }) => theme.link.hover.color};
  }
  :disabled {
    cursor: default;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }

  transition: 0.4s all ease;
`;
