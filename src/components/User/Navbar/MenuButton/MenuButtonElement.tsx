import styled, { css, keyframes } from "styled-components";
import NextLink from "next/link";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  margin-left: 1rem;
  height: 100%;
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  align-items: center;
  color: ${({ theme }) => theme.color[1]};
  cursor: default;
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

export const NLink = styled(NextLink)`
  height: 100%;
`;

type TAnchor = {
  active: boolean;
};
export const Anchor = styled.a<TAnchor>`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 0.8rem;
  border: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
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

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  > svg {
    height: 16px;
    stroke-width: 48;
  }
`;
export const PhotoWrapper = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border[2]};
  position: relative;
  height: 40px;
  aspect-ratio: 1/1;
  transition: 0.4s all ease;
`;

type TAccountBtn = {
  active: boolean;
};
export const AccountBtn = styled.div<TAccountBtn>`
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color[1]};
  :hover {
    color: ${({ theme }) => theme.navbar.menu.hover.fill};
    .profile {
      border: 1px solid ${({ theme }) => theme.navbar.menu.hover.fill};
    }
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.navbar.menu.hover.fill};
      .profile {
        border: 1px solid ${({ theme }) => theme.navbar.menu.hover.fill};
      }
    `}
  transition: 0.4s all ease;
`;

export const AuthMenuContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;
export const ActiveLine = styled(motion.div)`
  display: flex;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 1.1rem;
  height: 1.7rem;
  width: 100%;
  z-index: -1;
  background: ${({ theme }) => theme.button.list.background};
  transition: 0.4s all ease;
  transition-property: background;
`;

export const IconGroup = styled.div`
  display: flex;
  height: 100%;
  height: 100%;
`;

type TIconButton = {
  active: boolean;
};
export const IconButton = styled.div<TIconButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  height: 100%;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  background: none;
  fill: ${({ theme }) => theme.navbar.menu.fill};
  color: ${({ theme }) => theme.navbar.menu.fill};
  :hover {
    fill: ${({ theme }) => theme.navbar.menu.hover.fill};
    color: ${({ theme }) => theme.navbar.menu.hover.fill};
  }
  ${({ active }) =>
    active &&
    css`
      fill: ${({ theme }) => theme.navbar.menu.hover.fill};
      color: ${({ theme }) => theme.navbar.menu.hover.fill};
    `}
  > svg {
    height: 1.4rem;
  }

  transition: 0.4s all ease;
`;

export const AmountNum = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  right: -5%;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  padding: 0 0.2rem;
  height: 1rem;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.button.list.background};
  color: ${({ theme }) => theme.button.list.color};
`;

export const NotifIcon = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 26%;
  right: 12%;
  border-radius: 100%;
  height: 10px;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.color[3]};
  color: ${({ theme }) => theme.button.list.color};

  animation: notification-indicator 2s ease infinite;
  @keyframes notification-indicator {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
