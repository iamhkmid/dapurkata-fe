import styled, { css } from "styled-components";

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.input.label};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;

export const InputGroup = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
  position: relative;
`;

export const BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 1px;
  width: 0;
  background: ${({ theme }) => theme.input.focus.borderFocus};
  transition: 0.4s all ease;
`;
type TLogo = {
  error: boolean;
};
export const Logo = styled.div<TLogo>`
  display: flex;
  position: absolute;
  > svg {
    height: 1.3rem;
    stroke-width: 2px;
  }
  padding: 0.5rem;
  color: ${({ theme }) => theme.input.color};
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  height: 2.3rem;
  font-weight: 400;
  align-items: center;
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.input.error.background};
    `};
  transition: 0.4s all ease;
`;

type TInputElement = {
  isLoading: boolean;
  withIcon: boolean;
};

export const InputElement = styled.input<TInputElement>`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-weight: 400;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.background};
  text-decoration: none;
  padding: 0 0.5rem;

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

  ${({ withIcon }) =>
    withIcon &&
    css`
      padding: 0 0.5rem 0 2.5rem;
    `}
  height: 2.3rem;
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
      ~ ${Logo} {
        color: ${({ theme }) => theme.input.error.border};
      }
      border: 1px solid ${({ theme }) => theme.input.error.border};
      ~ ${BorderBottom} {
        background: ${({ theme }) => theme.input.error.background};
      }
    }
  }
  :hover {
  }

  :focus {
    ~ ${Logo} {
      color: ${({ theme }) => theme.input.focus.borderFocus};
    }
    ${({ isLoading, disabled }) =>
      !isLoading &&
      !disabled &&
      css`
        background: ${({ theme }) => theme.input.focus.background};
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
