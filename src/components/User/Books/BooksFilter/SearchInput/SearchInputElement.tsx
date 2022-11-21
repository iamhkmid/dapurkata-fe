import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 30rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: auto;
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  left: 0;
  padding-left: 0.8rem;
  z-index: 2;
  > svg {
    height: 1.2rem;
    stroke-width: 58;
    stroke: ${({ theme }) => theme.input.searchIcon};
    transition: 0.4s all ease;
  }
`;

type TCloseIcon = {
  isShowed: boolean;
};
export const CloseIcon = styled.div<TCloseIcon>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  margin-right: 0.7rem;
  z-index: 2;
  > svg {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 0;
    max-height: 0;
    min-height: 0;
    min-width: 0;
    stroke-width: 58;
    border-radius: 100%;
    background: ${({ theme }) => theme.button.list.background};
    color: ${({ theme }) => theme.button.list.color};
    :hover {
      background: ${({ theme }) => theme.button.danger.background};
      color: ${({ theme }) => theme.button.danger.color};
    }
    transition: 0.4s all ease;
  }
  ${({ isShowed }) =>
    isShowed &&
    css`
      height: 100%;
      > svg {
        padding: 0.2rem;
        max-width: 1.4rem;
        max-height: 1.4rem;
        min-height: 1.4rem;
        min-width: 1.4rem;
      }
    `}
`;

type TInput = {
  isLoading?: boolean;
};

export const Input = styled.input<TInput>`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-weight: 400;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.background[2]};
  text-decoration: none;
  padding: 0 2.5rem;
  height: 2.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.input.border};
  outline: none;
  position: relative;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.input.placeholder};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.input.placeholder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.input.placeholder};
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.input.placeholder};
  }

  //hidden arrow number
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.input.color};
    -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.input.background}
      inset;
    box-shadow: 0 0 0 50px ${({ theme }) => theme.input.background} inset;
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.input.error.border};
    color: ${({ theme }) => theme.input.error.color};
    :focus {
      box-shadow: ${({ theme }) => theme.input.error.boxShadow};
    }
  }
  :hover {
  }

  :focus {
    ${({ isLoading, disabled }) =>
      !isLoading &&
      !disabled &&
      css`
        ~ .search-icon > svg {
          stroke: ${({ theme }) => theme.button.primary.background};
        }
        ~ .close-icon {
          > svg {
            padding: 0.2rem;
            max-width: 1.4rem;
            max-height: 1.4rem;
            min-height: 1.4rem;
            min-width: 1.4rem;
          }
        }
        background: ${({ theme }) => theme.background[2]};
        box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
        border: 1px solid ${({ theme }) => theme.input.focus.border};
      `}
  }

  ${({ isLoading, disabled }) =>
    (isLoading || disabled) &&
    css`
      background: ${({ theme }) => theme.input.disabled.background};
      color: ${({ theme }) => theme.input.disabled.color};
      box-shadow: none;
      border: 1px solid ${({ theme }) => theme.input.border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
