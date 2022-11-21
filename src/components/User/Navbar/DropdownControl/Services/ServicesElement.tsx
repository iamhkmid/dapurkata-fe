import { motion } from "framer-motion";
import NextLink from "next/link";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  cursor: default;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  top: 95%;
  right: -3%;
  padding: 1rem 1rem 1rem 1rem;
  min-width: 17rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: max-content;
  z-index: 5;
  box-shadow: ${({ theme }) => theme.boxShadow};
  ::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: -8px;
    z-index: 10;
    right: 20px;
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 0 2px 1px #1d2e4225"
        : "0 0 2px 1px #0f13188e"};
    transform: rotate(45deg);
    background: ${({ theme }) => theme.background[2]};
  }
  ::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 15px;
    top: 0px;
    z-index: 11;
    right: 15px;
    background: ${({ theme }) => theme.background[2]};
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;
export const Li = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
  height: 100%;
  width: 100%;
  text-align: start;
  border-radius: ${({ theme }) => theme.borderRadius};

  :hover {
    color: ${({ theme }) => theme.button.hover.list.color};
    background: ${({ theme }) => theme.button.hover.list.background};
  }

  transition: 0.4s all ease;
`;
export const Item = styled.h1`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
`;

export const NLink = styled(NextLink)``;
export const Anchor = styled.a`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
`;
