import { FC } from "react";
import styled, { css } from "styled-components";
import Loading2 from "../../../otherComps/Loading/Loading2";

type TButtonElement = {
  buttonFor: "page_number" | "next_or_prev";
  active?: boolean;
};

const ButtonElement = styled.button<TButtonElement>`
  font-family: "Poppins", sans-serif;
  display: flex;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 0.9rem;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;

  ${({ theme, buttonFor }) =>
    buttonFor === "page_number"
      ? css`
          background: ${theme.button.base.background};
          color: ${theme.button.base.color};
          font-weight: 600;
          min-height: 2rem;
          max-height: 2rem;
          min-width: 2rem;
          max-width: 2rem;
          padding: 0;
        `
      : css`
          background: ${theme.button.primary.background};
          color: ${theme.button.primary.color};
          min-height: 2.3rem;
          max-height: 2.3rem;
          min-width: 4rem;
          max-width: 4rem;
        `};

  :hover {
    ${({ theme, buttonFor }) =>
      buttonFor === "page_number"
        ? css`
            background: ${theme.button.hover.base.background};
            color: ${theme.button.hover.base.color};
          `
        : css`
            background: ${theme.button.hover.primary.background};
            color: ${theme.button.hover.primary.color};
          `};
  }
  ${({ theme, buttonFor, active }) =>
    buttonFor === "page_number" &&
    active &&
    css`
      background: ${theme.button.primary.background};
      color: ${theme.button.primary.color};
    `}

  :disabled {
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
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    ${({ theme, buttonFor }) =>
      buttonFor === "page_number"
        ? css`
            min-height: 1.8rem;
            max-height: 1.8rem;
            min-width: 1.8rem;
            max-width: 1.8rem;
            font-size: 0.8rem;
          `
        : css`
            min-height: 2rem;
            max-height: 2rem;
            min-width: 3.5rem;
            max-width: 3.5rem;
            font-size: 0.8rem;
          `};
  }

  transition: 0.4s all ease;
`;

type TButton = {
  name: string;
  disabled?: boolean;
  onClick?: any;
} & (
  | {
      buttonFor: "page_number";
      active: boolean;
    }
  | {
      buttonFor: "next_or_prev";
    }
);

const Button: FC<TButton> = (props) => {
  switch (props.buttonFor) {
    case "page_number": {
      const { name, disabled, onClick, buttonFor, active } = props;
      return (
        <ButtonElement
          type="button"
          onClick={onClick}
          disabled={disabled}
          buttonFor={buttonFor}
          active={active}
        >
          {name}
        </ButtonElement>
      );
    }
    case "next_or_prev": {
      const { name, disabled, onClick, buttonFor } = props;
      return (
        <ButtonElement
          type="button"
          onClick={onClick}
          disabled={disabled}
          buttonFor={buttonFor}
        >
          {name}
        </ButtonElement>
      );
    }
  }
};

export default Button;
