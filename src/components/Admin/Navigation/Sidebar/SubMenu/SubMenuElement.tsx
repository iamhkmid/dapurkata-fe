import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type TMain = {
  active: boolean;
};
export const Main = styled.div<TMain>`
  display: flex;
  flex-direction: column;
  max-height: 0;
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 1.5rem;
  overflow: hidden;
  ${({ active }) =>
    active &&
    css`
      margin-top: 0.2rem;
      max-height: 15rem;
    `}
  transition: 0.4s all ease;
`;
type TItem = {
  active: boolean;
};
export const Item = styled.div<TItem>`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;
  margin: 0.1rem 0;
  min-height: 1.8rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  color: ${({ theme }) => theme.color[1]};
  ::before {
    content: "";
    position: absolute;
    height: 50%;
    border-left: 2px solid transparent;
    left: -0.5rem;
    background: transparent;
  }
  ${({ active }) =>
    active &&
    css`
      ::before {
        border-color: ${({ theme }) => theme.button.focus.sidebar.color};
        transition: 0.4s all ease;
      }

      color: ${({ theme }) => theme.button.focus.sidebar.color};
      background: ${({ theme }) => theme.button.focus.sidebar.background};
      font-weight: 500;
    `}
  :hover {
    background: ${({ theme }) => theme.button.hover.sidebar.background};
    color: ${({ theme }) => theme.button.focus.sidebar.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 13px;
  }
  transition: 0.4s all ease;
`;

export const Text = styled.h1``;
