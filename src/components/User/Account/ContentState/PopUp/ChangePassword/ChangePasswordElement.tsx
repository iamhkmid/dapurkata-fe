import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: column;
  position: relative;
  max-width: 20rem;
  min-height: 20%;
  max-height: 95%;
  min-width: 35%;
  font-size: 1rem;
  margin: 0.2rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: 50%;
    max-width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 1rem 2rem;
  margin-top: 35px;
  gap: 0.5rem;
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
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
  }
`;
export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
