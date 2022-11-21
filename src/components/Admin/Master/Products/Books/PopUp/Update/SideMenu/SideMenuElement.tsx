import styled, { css } from "styled-components";

type TSideMenu = {
  active: boolean;
};

export const SideMenu = styled.div<TSideMenu>`
  display: flex;
  height: 100%;
  padding: 0.5rem;
  min-width: 10rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 12;
  border-right: 1px solid ${({ theme }) => theme.border[2]};
  background: ${({ theme }) => theme.background[2]};
  overflow: hidden;
  transform: translateX(-11rem);
  ${({ active }) =>
    active &&
    css`
      transform: translateX(0);
    `}

  transition: 0.4s all ease;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

type TItem = {
  active?: boolean;
};

export const Item = styled.li<TItem>`
  display: flex;
  align-items: center;
  position: relative;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 400;
  align-items: center;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  height: 2.5rem;
  width: 9rem;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.color[1]};
  ::before {
    content: "";
    height: 2.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 1rem;
    position: absolute;
    right: -2rem;
    z-index: 10;
  }
  :hover {
    background: ${({ theme }) => theme.button.hover.sidebar.background};
    color: ${({ theme }) => theme.button.hover.sidebar.color};
  }
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.button.focus.sidebar.background};
      color: ${({ theme }) => theme.button.focus.sidebar.color};
      font-weight: 500;
      ::before {
        right: -1.3rem;
        background: ${({ theme }) => theme.button.primary.background};
        transition: 0.4s all ease;
      }
    `};
  transition: 0.4s all ease;
`;

type TSidebarBtn = {
  active?: boolean;
};
