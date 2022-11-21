import styled, { css } from "styled-components";
import NextLink from "next/link";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: none;
  position: sticky;
  gap: 1rem;
  top: 100%;
  max-height: 80vh;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 0.2rem;
  overflow: hidden;
  padding: 1rem 0.5rem 2rem 0.5rem;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: flex;
    flex-direction: column;
  }

  transition: 0.2s all ease;
`;

export const AuthMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Account = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem calc(25vw - 5rem) 1rem calc(25vw - 5rem);
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.navbar.dropdown.border};
  > div :nth-child(1) {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  > div :nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;
export const NoAccount = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.navbar.dropdown.border};
`;

export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.background[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.button.primary.background};
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FullName = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
  transition: 0.4s all ease;
`;
export const Email = styled.h1`
  font-size: 0.8rem;
  font-weight: 400;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  width: 100%;
`;
type TLi = {
  active?: boolean;
};
export const Li = styled.li<TLi>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 100%;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: 0.4s all ease;
`;

export const NLink = styled(NextLink)`
  height: 100%;
`;
type TAnchor = {
  active?: boolean;
};
export const Anchor = styled.a<TAnchor>`
  font-family: "Poppins", sans-serif;
  display: flex;
  font-weight: 400;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.navbar.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.list.background};
    color: ${({ theme }) => theme.button.hover.list.color};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.button.primary.background};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;
type TDropdownBtn = {
  active: boolean;
};
export const DropdownBtn = styled.button<TDropdownBtn>`
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  width: 100%;
  border: none;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.color[1]};
  position: relative;
  z-index: 2;
  :hover {
    background: ${({ theme }) => theme.button.hover.list.background};
    color: ${({ theme }) => theme.button.hover.list.color};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.button.primary.background};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
export const DropdownName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0 1rem;
`;
type TIconWrapper = {
  active: boolean;
};
export const IconWrapper = styled.div<TIconWrapper>`
  display: flex;
  align-items: center;
  width: 1rem;
  height: 100%;
  ${({ active }) =>
    active &&
    css`
      transform: rotate(90deg);
    `}
  > svg {
    height: 16px;
    stroke-width: 48;
  }
  transition: 0.4s all ease;
`;
