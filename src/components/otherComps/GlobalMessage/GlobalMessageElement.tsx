import { motion } from "framer-motion";
import styled, { css } from "styled-components";

type TMain = {
  isShowed: boolean;
  color: string;
  fixed: boolean;
  isAdmin: boolean;
};

export const Main = styled.div<TMain>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius};
  top: 4.5rem;
  left: 0;
  right: 0;
  padding: 0 1.5rem 0 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  max-width: 90%;
  max-height: 0;
  overflow: hidden;
  z-index: 101;

  ${({ fixed }) =>
    fixed &&
    css`
      top: 1.5rem;
      position: fixed;
    `}
  ${({ isAdmin }) =>
    isAdmin &&
    css`
      top: 2.5rem;
      position: fixed;
    `}
  ${({ isShowed }) =>
    isShowed &&
    css`
      box-shadow: ${({ theme }) => theme.boxShadow};
      overflow: visible;
      padding: 0.3rem 1.5rem 0.3rem 0.5rem;
      max-height: 3rem;
    `}
  ${({ theme, color }) =>
    color
      ? css`
          background: ${theme.button[color].background};
          color: ${theme.button[color].color};
          > svg {
            color: ${theme.button[color].color};
          }
        `
      : css`
          background: transparent;
          color: transparent;
          > svg {
            color: transparent;
          }
        `}
  transition: 0.4s all ease;
`;

export const Message = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: center;

  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  padding: 0 1rem;
  font-weight: 500;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

type TBtnWrapper = {
  color: string;
};
export const BtnWrapper = styled.div<TBtnWrapper>`
  display: flex;
  position: absolute;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0.2rem;
  max-height: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1/1;
  right: 0;
  > svg {
    height: 18px;
    stroke-width: 48px;
  }
  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover["danger"].background};
      color: ${theme.button.hover["danger"].color};
    `}
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 16px;
      stroke-width: 48px;
    }
  }

  transition: 0.4s all ease;
`;
