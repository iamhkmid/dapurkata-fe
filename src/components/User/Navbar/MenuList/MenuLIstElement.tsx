import styled, { css, keyframes } from "styled-components";
import NextLink from "next/link";
import { motion } from "framer-motion";

export const Main = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 0.5rem;
  height: 100%;
  transition: 0.4s all ease;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 0.3rem;
  align-items: center;
  position: relative;
`;

export const NLink = styled(NextLink)`
  height: 100%;
`;
type TAnchor = {
  active: boolean;
};
export const Anchor = styled.a<TAnchor>`
  display: flex;
  position: relative;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 0.7rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color[1]};
  :hover {
    color: ${({ theme }) => theme.button.hover.list.color};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.button.list.color};
    `}
  transition: 0.4s all ease;
`;
type TDropdownBtn = {
  active: boolean;
};
export const DropdownBtn = styled.div<TDropdownBtn>`
  cursor: pointer;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  padding: 0 0.5rem 0 0.2rem;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.color[1]};
  :hover {
    color: ${({ theme }) => theme.button.list.color};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.button.hover.list.color};
    `}
  transition: 0.4s all ease;
`;

export const DropdownName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  right: 0.2rem;
  > svg {
    height: 16px;
    stroke-width: 48;
  }
`;

export const ActiveLine = styled(motion.div)`
  display: flex;
  border-radius: 20px;
  position: absolute;
  left: 0;
  top: 1.2rem;
  height: 1.7rem;
  width: 100%;
  z-index: -1;
  background: ${({ theme }) => theme.button.list.background};
  transition: 0.4s all ease;
  transition-property: background;
`;
