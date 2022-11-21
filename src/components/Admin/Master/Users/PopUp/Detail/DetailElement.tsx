import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  min-width: 90%;
  width: 90%;
  min-height: 70%;
  height: 90%;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 100%;
    width: 100%;
  }
  transition: 0.4s all ease;
  transition-property: background;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 35px;
  padding: 1rem 2rem;
  overflow-x: auto;
  width: 100%;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
    .profile-wrapper {
      flex-direction: column;
    }
  }
`;
