import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputWrapper = styled.div`
  position: relative;
  margin: 0.3rem 0;
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
export const BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 3px;
  height: 2px;
  width: 0;
  background: ${({ theme }) => theme.input.focus.borderFocus};
  transition: 0.3s all ease;
`;

type TInputElement = {
  isLoading: boolean;
};

export const InputElement = styled.textarea<TInputElement>`
  resize: none;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-weight: 400;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.background};
  border: 1px solid ${({ theme }) => theme.input.border};
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  height: 10rem;
  width: 100%;
  outline: none;

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
    width: 0.5rem;
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
  &.error {
    border: 1px solid ${({ theme }) => theme.input.error.border};
    :focus {
      box-shadow: ${({ theme }) => theme.input.error.boxShadow};
      border: 1px solid ${({ theme }) => theme.input.error.border};
      ~ ${BorderBottom} {
        background: ${({ theme }) => theme.input.error.background};
      }
    }
  }
  :hover {
  }

  :focus {
    ${({ isLoading, disabled }) =>
      (!isLoading || !disabled) &&
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
