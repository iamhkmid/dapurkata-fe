import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 4rem;
  background: ${({ theme }) => theme.background[1]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  justify-content: center;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 3rem 0.2rem;
  }
  transition: 0.4s all ease;
`;

export const Container = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.background[2]};
  display: flex;
  gap: 1rem;
  width: 30rem;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-around;
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 30rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    gap: 0.5rem;
    padding: 1rem;
  }
  transition: 0.4s all ease;
`;

export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  > button {
    width: 100%;
  }
  > h1 {
    text-align: center;
    background: ${({ theme }) => theme.background[2]};
    color: ${({ theme }) => theme.color[2]};
    font-size: 0.9rem;
    font-weight: 500;
    width: 100%;
    ::before,
    ::after {
      background: ${({ theme }) => theme.button.list.background};
      content: "";
      display: inline-block;
      height: 2px;
      position: relative;
      vertical-align: middle;
      width: 40%;
    }
    ::before {
      right: 0.5em;
      margin-left: -50%;
    }
    ::after {
      left: 0.5em;
      margin-right: -50%;
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  gap: 0.5rem;
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
`;
export const CompTittle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[1]};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  border-top: 2px dashed ${({ theme }) => theme.border[2]};
  gap: 0.3rem;
  > button {
    width: min-content;
    font-size: 0.8rem;
    min-height: 1rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > button {
      font-size: 0.7rem;
    }
  }
`;

export const ButtonLink = styled.div`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 400;
  padding: 0 0.2rem;
  font-size: 0.9rem;
  height: fit-content;
  background: transparent;
  color: ${({ theme }) => theme.link.color};
  border: none;
  outline: none;
  border-radius: 5px;

  :hover {
    color: ${({ theme }) => theme.link.hover.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

type TButtonElement = {
  isLoading?: boolean;
};
export const GoogleSignin = styled.button<TButtonElement>`
  font-family: "Poppins", sans-serif;
  display: flex;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  min-height: 2.3rem;
  max-height: max-content;
  min-width: max-content;
  padding: 0.2rem 1rem;
  border: 1px solid transparent;
  outline: none;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;
  > svg {
    height: 1.2rem;
    padding-right: 0.5rem;
  }
  ${({ theme }) =>
    theme.name === "light"
      ? css`
          background: #fd4141;
          color: ${theme.button.primary.color};
          > svg {
            fill: ${theme.button.primary.color};
          }
        `
      : css`
          background: #e22f2f;
          color: ${theme.button.primary.color};
          > svg {
            fill: ${theme.button.primary.color};
          }
        `}

  :hover {
    ${({ theme }) =>
      theme.name === "light"
        ? css`
            background: #e02626;
            color: ${theme.button.primary.color};
            > svg {
              fill: ${theme.button.primary.color};
            }
          `
        : css`
            background: #e03232;
            color: ${theme.button.primary.color};
            > svg {
              fill: ${theme.button.primary.color};
            }
          `}
  }

  :focus {
    ${({ theme, color }) => css`
      border: 1px solid ${theme.button.focus.danger.border};
      box-shadow: ${theme.button.focus.danger.boxShadow};
    `}
  }

  ${({ isLoading, disabled }) =>
    (isLoading || disabled) &&
    css`
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      cursor: default;
      :hover {
        background: ${({ theme }) => theme.button.disabled.background};
        color: ${({ theme }) => theme.button.disabled.color};
      }
      :focus {
        border: 1px solid transparent;
        box-shadow: none;
      }
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 12px;
    min-height: 2rem;
    padding: 0.2rem 1rem;
  }
  transition: 0.4s all ease;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: 0.4s all ease;
`;
