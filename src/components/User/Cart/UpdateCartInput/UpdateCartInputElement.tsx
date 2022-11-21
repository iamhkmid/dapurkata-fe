import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  border-radius: 0.1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.input.focus.background};
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  background-color: transparent;
  outline: none;
  border: none;
  min-width: 2.2rem;
  width: 2.2rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  color: ${({ theme }) => theme.color[1]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;

export const AmountBtn = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  padding: 0.4rem;
  width: 1.5rem;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color[2]};
  :hover {
    background: ${({ theme }) => theme.button.hover.section.background};
    color: ${({ theme }) => theme.button.hover.section.color};
  }
  :disabled {
    cursor: default;
    color: ${({ theme }) => theme.button.disabled.color};
    :hover {
      background: transparent;
    }
  }
  > svg {
    height: 0.8rem;
    stroke-width: 0.2rem;
  }
  transition: 0.4s all ease;
`;
