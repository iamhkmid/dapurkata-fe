import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  background: ${({ theme }) => theme.background[1]};
  transition: 0.4s all ease;
`;
export const AdminContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type TAdminWrapper = {
  isOpen: boolean;
};

export const AdminWrapper = styled.div<TAdminWrapper>`
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
  margin-top: 2rem;
  transition: 0.3s all ease;
  padding: 0.5rem 1rem;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      margin-left: 0;
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    ${({ isOpen }) =>
      isOpen &&
      css`
        margin-left: 0;
      `}
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin-left: 0;
    padding: 0 0.5rem;
  }
  transition: 0.4s all ease;
`;

export const Footer = styled.div`
  font-family: "Roboto", sans-serif;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 400;
  font-size: 0.8rem;
  height: 3rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;
