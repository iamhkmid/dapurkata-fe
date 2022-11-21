import { FC } from "react";
import styled, { css } from "styled-components";
import IconsControl from "../../IconsControl";
import Loading2 from "../Loading/Loading2";
import TextLoading from "../Loading/TextLoading";
type TButtonElement = {
  active?: boolean;
};
const ButtonElement = styled.button<TButtonElement>`
  font-family: "Poppins", sans-serif;
  display: flex;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 500;
  height: 2.2rem;
  font-size: 0.9rem;
  min-height: 2.2rem;
  max-height: max-content;
  padding: 0.2rem 1rem;
  border: 1px solid transparent;
  outline: none;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.button.base.background};
  color: ${({ theme }) => theme.button.base.color};

  :hover {
    background: ${({ theme }) => theme.button.hover.base.background};
    color: ${({ theme }) => theme.button.hover.base.color};
  }
  :disabled {
    background: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.color};
    cursor: default;
    :hover {
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
    }
  }
  :focus {
    background: ${({ theme }) => theme.button.focus.background};
    color: ${({ theme }) => theme.button.focus.color};
  }
  ::after {
    content: "";
    position: absolute;
    height: 0;
    aspect-ratio: 1/1;
    left: 0.5rem;
    border-radius: 100%;
    background: ${({ theme }) => theme.button.focus.base.border};
    transition: 0.4s all ease;
  }
  ${({ active }) =>
    active &&
    css`
      padding-left: 1.5rem;
      ::after {
        height: 10px;
      }
      color: ${({ theme }) => theme.button.hover.base.color};
      border: 1px solid ${({ theme }) => theme.button.focus.base.border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
    min-height: 2rem;
    padding: 0.2rem 0.5rem;
    ${({ active }) =>
      active &&
      css`
        padding-left: 1.5rem;
      `}
  }
  transition: 0.4s all ease;
`;

type TButton = {
  name: string;
  disabled?: boolean;
  type: "submit" | "button" | "buttonIcon";
  onClick?: any;
  active?: boolean;
};

const ButtonBase: FC<TButton> = (Props) => {
  const { name, disabled, type, onClick, active } = Props;
  return (
    <ButtonElement
      type="button"
      active={active}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </ButtonElement>
  );
};

export default ButtonBase;
