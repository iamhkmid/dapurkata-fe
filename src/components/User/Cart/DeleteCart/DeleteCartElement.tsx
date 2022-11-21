import styled from "styled-components";

export const Main = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  aspect-ratio: 1/1;
  border-radius: 0.1rem;
  > svg {
    height: 1.2rem;
    stroke-width: 40px;
  }
  background: ${({ theme }) => theme.button.danger.background};
  color: ${({ theme }) => theme.button.danger.color};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.danger.color};
  }

  :disabled {
    cursor: default;
    color: ${({ theme }) => theme.button.disabled.color};
    background: ${({ theme }) => theme.button.disabled.background};
    border-color: ${({ theme }) => theme.button.disabled.background};
    :hover {
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      border-color: ${({ theme }) => theme.button.disabled.background};
    }
  }
  transition: 0.4s all ease;
`;
