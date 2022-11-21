import { FC } from "react";
import styled, { css } from "styled-components";
import IconsControl from "../../IconsControl";
import Loading2 from "../Loading/Loading2";
import TextLoading from "../Loading/TextLoading";

type TButtonElement = {
  color?: string;
  isLoading?: boolean;
};
const ButtonElement = styled.button<TButtonElement>`
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
  gap: 5px;
  position: relative;
  overflow: hidden;

  ${({ theme, color }) => css`
    background: ${theme.button[color || "primary"].background};
    color: ${theme.button[color || "primary"].color};
    > svg {
      color: ${theme.button[color || "primary"].color};
    }
  `}

  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover[color || "primary"].background};
      color: ${theme.button.hover[color || "primary"].color};
    `}
  }
  > svg {
    display: flex;
    stroke-width: 42;
    color: ${({ theme, color }) => theme.button[color || "primary"].color};
    height: 18px;
  }
  :focus {
    ${({ theme, color }) => css`
      border: 1px solid ${theme.button.focus[color || "primary"].border};
      box-shadow: ${theme.button.focus[color || "primary"].boxShadow};
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
      > svg {
        fill: ${({ theme }) => theme.button.disabled.color};
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

const LoadingWrapper = styled.div`
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

const ButtonIcon = styled.button<TButtonElement>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0.3rem 0.5rem;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  > svg {
    height: 1.3rem;
    stroke-width: 48;
  }
  ${({ theme, color }) => css`
    background: ${theme.button[color || "primary"].background};
    color: ${theme.button[color || "primary"].color};
  `}

  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover[color || "primary"].background};
      color: ${theme.button.hover[color || "primary"].color};
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
  transition: 0.4s all ease;
`;

type TButton =
  | {
      name: string;
      disabled?: boolean;
      color?:
        | "primary"
        | "danger"
        | "success"
        | "base"
        | "section"
        | "list"
        | "warning";
      onClick?: any;
      isLoading?: boolean;
    } & (
      | {
          type: "submit" | "button";
          icon?: string;
        }
      | {
          type: "icon";
          icon: string;
        }
    );

const Button: FC<TButton> = (props) => {
  switch (props.type) {
    case "submit": {
      const { name, disabled, type, onClick, color, isLoading, icon } = props;
      return (
        <ButtonElement
          type="submit"
          disabled={disabled}
          color={color}
          isLoading={!!isLoading}
        >
          {icon && IconsControl(icon)}
          {name}
          {!!isLoading && (
            <LoadingWrapper>
              <Loading2 />
            </LoadingWrapper>
          )}
        </ButtonElement>
      );
    }
    case "button": {
      const { name, disabled, type, onClick, color, isLoading, icon } = props;
      return (
        <ButtonElement
          type="button"
          onClick={onClick}
          isLoading={!!isLoading}
          disabled={disabled}
          color={color}
        >
          {icon && IconsControl(icon)}
          {name}
          {!!isLoading && (
            <LoadingWrapper>
              <Loading2 />
            </LoadingWrapper>
          )}
        </ButtonElement>
      );
    }
    case "icon": {
      const { name, disabled, type, onClick, color, icon, isLoading } = props;
      return (
        <ButtonIcon
          onClick={onClick}
          color={color}
          disabled={disabled}
          isLoading={isLoading}
        >
          {IconsControl(icon)}
        </ButtonIcon>
      );
    }
    default:
      return null;
  }
};

export default Button;
