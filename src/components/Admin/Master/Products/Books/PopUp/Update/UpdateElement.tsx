import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  min-width: 80%;
  width: 90%;
  min-height: 70%;
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: column;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
  }
`;
export const Body = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  margin-top: 2rem;
`;

type TContent = {
  showSideMenu: boolean;
};
export const Content = styled.div<TContent>`
  display: flex;
  margin-left: 0rem;
  overflow-y: scroll;
  padding-bottom: 1rem;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  ${({ showSideMenu }) =>
    showSideMenu &&
    css`
      margin-left: 10rem;
    `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    margin-left: 0;
  }

  transition: 0.4s all ease;
`;
