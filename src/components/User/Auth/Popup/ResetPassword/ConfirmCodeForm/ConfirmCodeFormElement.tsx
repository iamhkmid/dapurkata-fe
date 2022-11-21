import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 5px;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding-top: 0;
  }
`;

export const ConfirmCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .resend-code-button {
    font-size: 0.8rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  .resend-code-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
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

export const FetchWait = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.link.color};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;
