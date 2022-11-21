import styled, { css } from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 0.5rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  > svg {
    height: 1.2rem;
    stroke-width: 58;
    stroke: ${({ theme }) => theme.input.border};
    transition: 0.4s all ease;
  }
  &.focus {
    > svg {
      stroke: ${({ theme }) => theme.input.focus.border};
    }
  }
  transition: 0.4s all ease;
`;

export const InputWrapper = styled.div`
  position: relative;
  min-width: 8rem;
  max-width: 17rem;
`;
export const InputContainer = styled.div`
  display: flex;
  height: max-content;
`;

export const BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: ${({ theme }) => theme.input.focus.borderFocus};
  transition: 0.4s all ease;
`;

export const InputElement = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.base.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.input.border};
  text-decoration: none;
  padding: 0 0.5rem 0 2.2rem;
  height: 2.2rem;
  width: 100%;
  outline: none;
  :focus {
    ~ ${BorderBottom} {
      width: 100%;
    }
    background: ${({ theme }) => theme.input.base.focus.background};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
