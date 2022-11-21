import styled, { css } from "styled-components";
import { boolean } from "yup/lib/locale";

export const HiddenSelect = styled.div`
  display: none;
`;

export const Text = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

type TCloseWrapper = {
  isShowed: boolean;
};

export const CloseWrapper = styled.div<TCloseWrapper>`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 11;
  ${({ isShowed }) =>
    isShowed &&
    css`
      display: flex;
    `}
`;
type TSelectStyled = {
  isError?: boolean;
  isFocus?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
};

export const SelectStyled = styled.div<TSelectStyled>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  display: flex;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.background};
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  flex-wrap: wrap;
  gap: 0.3rem;
  align-items: center;
  outline: none;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.3rem 3rem 0.3rem 0.5rem;
  height: 2.3rem;
  width: 100%;
  position: relative;
  ${({ isFocus }) =>
    isFocus &&
    css`
      border: 1px solid ${({ theme }) => theme.input.focus.border};
      box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
      background: ${({ theme }) => theme.input.focus.background};
    `}
  ${({ isError, isFocus }) =>
    isError &&
    css`
      ${isFocus &&
      css`
        box-shadow: ${({ theme }) => theme.input.error.boxShadow};
      `}
      border: 1px solid ${({ theme }) => theme.input.error.border};
    `}
  
  ${({ disabled, isLoading }) =>
    (disabled || isLoading) &&
    css`
      cursor: default;
      ${isLoading &&
      css`
        cursor: pointer;
      `}
      border: 1px solid ${({ theme }) => theme.input.border};
      box-shadow: none;
      color: ${({ theme }) => theme.input.disabled.color};
      background: ${({ theme }) => theme.input.disabled.background};
      ${({ isError, isFocus }) =>
        isError &&
        css`
          ${isFocus &&
          css`
            box-shadow: ${({ theme }) => theme.input.error.boxShadow};
          `}
          border: 1px solid ${({ theme }) => theme.input.error.border};
        `}
    `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

export const DropdownContainer = styled.div`
  position: relative;
  transition: 0.4s all ease;
`;

type TDropdown = {
  isFocus: boolean;
};
export const Dropdown = styled.div<TDropdown>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 100%;
  left: 0;
  margin-top: 0.1rem;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  z-index: 9;
  ${({ isFocus }) =>
    isFocus &&
    css`
      box-shadow: ${({ theme }) => theme.boxShadow};
      max-height: 15rem;
    `}
  transition: 0.4s all ease;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  background: ${({ theme }) => theme.input.focus.background};
  border: 1px solid ${({ theme }) => theme.input.border};

  transition: 0.4s all ease;
`;

type TNoOption = {
  isShowed: boolean;
};

export const NoOption = styled.h1<TNoOption>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 0.9rem;
  overflow: hidden;
  font-weight: 300;
  max-height: 0;
  width: 100%;
  color: ${({ theme }) => theme.input.color};

  ${({ isShowed }) =>
    isShowed &&
    css`
      max-height: 2rem;
    `};

  transition: 0.4s all ease;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  transition: 0.4s all ease;
`;
export const LoadingWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  z-index: 10;
  transition: 0.4s all ease;
`;
type TOptionWrapper = {
  isShowed: boolean;
};
export const OptionWrapper = styled.div<TOptionWrapper>`
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  ${({ isShowed }) =>
    isShowed &&
    css`
      padding: 0.5rem 0;
      max-height: 9rem;
    `};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v2.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v2.hover.thumb};
  }
  transition: 0.4s all ease;
`;
type TOptions = {
  isShowed: boolean;
};
export const Options = styled.div<TOptions>`
  font-family: "Roboto", sans-serif;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-size: 0.9rem;
  font-weight: 400;
  max-height: 0;
  overflow: hidden;
  padding: 0 1rem;
  color: ${({ theme }) => theme.input.color};
  ${({ isShowed }) =>
    isShowed &&
    css`
      padding: 0.5rem 1rem;
      overflow: visible;
      max-height: 3rem;
    `}
  :hover {
    background: ${({ theme }) => theme.button.primary.background};
    color: ${({ theme }) => theme.button.primary.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.3s all ease;
`;

export const InputWrapper = styled.div`
  outline: none;
  text-decoration: none;
  position: relative;
  margin-top: 0.3rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  transition: 0.4s all ease;
`;
export const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  transition: 0.4s all ease;
  width: 100%;
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.input.label};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.3s all ease;
`;
type TDropdownIconWrapper = {
  isFocus: boolean;
  disabled?: boolean;
};
export const DropdownIconWrapper = styled.div<TDropdownIconWrapper>`
  position: absolute;
  right: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.input.dropdown.icon};
  > svg {
    display: flex;
    height: 16px;
    stroke-width: 50;
  }
  ${({ isFocus }) =>
    isFocus &&
    css`
      transform: rotate(180deg);
      color: ${({ theme }) => theme.input.focus.dropdown.icon};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.input.disabled.color};
    `}
  transition: 0.4s all ease;
`;

type TInputFilter = {
  isShowed: boolean;
};

export const InputFilter = styled.input<TInputFilter>`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-weight: 400;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.background};
  text-decoration: none;
  padding: 0 0.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.input.border};
  outline: none;
  min-height: 2.3rem;
  display: none;
  margin-bottom: 1rem;
  ${({ isShowed }) =>
    isShowed &&
    css`
      display: block;
    `};
  :focus {
    background: ${({ theme }) => theme.input.focus.background};
    box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
