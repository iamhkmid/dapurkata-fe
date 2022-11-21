import styled, { css } from "styled-components";

export const Main = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  position: relative;
  gap: 0.2rem;
`;

type TNavItem = {
  active: boolean;
};
export const Item = styled.li<TNavItem>`
  display: flex;
  align-items: center;
  position: relative;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  height: 2.5rem;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.color[1]};
  ::before {
    content: "";
    height: 2.5rem;
    width: 1rem;
    position: absolute;
    border-radius: ${({ theme }) => theme.borderRadius};
    right: -2rem;
    z-index: 10;
  }
  > div > svg {
    stroke: ${({ theme }) => theme.color[1]};
  }
  :hover {
    background: ${({ theme }) => theme.button.hover.sidebar.background};
    color: ${({ theme }) => theme.button.hover.sidebar.color};
    > div > svg {
      stroke: ${({ theme }) => theme.button.hover.sidebar.color};
    }
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
      > div > svg {
        stroke: ${({ theme }) => theme.button.focus.sidebar.color};
      }
    `};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 13px;
  }
  transition: 0.4s all ease;
`;

export const IconWrapper = styled.div`
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  height: 1.3rem;
  margin-right: 0.5rem;
  color: inherit;
  > svg {
    height: 1.3rem;
    background: none;
    stroke-width: 1.5px;
  }
`;
type TDropdownIcon = {
  active: boolean;
};
export const DropdownIcon = styled.div<TDropdownIcon>`
  position: absolute;
  right: 0.5rem;
  > svg {
    display: flex;
    height: 16px;
    stroke-width: 58;
  }
  ${(props) =>
    props.active &&
    css`
      transform: rotate(90deg);
    `}
  transition: 0.4s all ease;
`;
