import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  transition: 0.4s all ease;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color[1]};
  justify-content: center;
`;
export const Text1 = styled.h1`
  font-size: 0.9rem;
  font-weight: 400;
`;
export const Text2 = styled.h1`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ButtonElement = styled.button`
  font-family: "Poppins", sans-serif;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 300;
  font-size: 0.9rem;
  height: 2.3rem;
  padding: 0 1rem;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  border: none;
  outline: none;

  :hover {
    background: ${({ theme }) => theme.button.hover.primary.background};
    color: ${({ theme }) => theme.button.hover.primary.color};
  }
  :active {
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      :hover {
        background: ${({ theme }) => theme.button.disabled.background};
        color: ${({ theme }) => theme.button.disabled.color};
      }
    `};
  transition: 0.4s all ease;
`;
