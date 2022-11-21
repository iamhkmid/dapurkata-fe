import styled, { css } from "styled-components";

type TSideMenu = {
  active: boolean;
};

export const Main = styled.div<TSideMenu>`
  display: flex;
  font-family: "Poppins", sans-serif;
  height: 100%;
  max-width: 0;
  min-width: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ active }) =>
    active &&
    css`
      max-width: 13.5rem;
      min-width: 13.5rem;
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
  }
  transition: 0.4s all ease;
  transition-property: max-width, min-width;
`;
export const Ul = styled.ul`
  display: flex;
  width: 100%;
  gap: 0.2rem;
  padding: 1rem 0.5rem;
  flex-direction: column;
  overflow: hidden;
`;

type TLi = { isActive?: boolean };

export const Li = styled.li<TLi>`
  display: flex;
  position: relative;
  height: 3rem;
  width: 12rem;
  padding-left: 1.5rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.color[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  :hover {
    background: ${({ theme }) => theme.button.section.background};
    color: ${({ theme }) => theme.button.section.color};
  }
  ::before {
    content: "";
    height: 80%;
    width: 0.5rem;
    background: transparent;
    border-radius: ${({ theme }) => theme.borderRadius};
    position: absolute;
    right: -1.2rem;
    transition: 0.4s all ease;
  }
  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.color[3]};
      ::before {
        background: ${({ theme }) => theme.button.primary.background};
      }
    `}
  &.logout {
    margin-top: 1rem;
  }
  transition: 0.4s all ease;
`;
