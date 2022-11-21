import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  position: relative;
`;

export const TextLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.input.label};
  font-size: 0.8rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  color: ${({ theme }) => theme.button.primary.color};
  > svg {
    stroke-width: 2;
    height: 0.7rem;
  }
`;

export const HiddenToggle = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
type TStyledCheckbox = {
  checked: boolean;
  isLoading: boolean;
  disabled: boolean;
};
export const StyledToggle = styled.div<TStyledCheckbox>`
  display: flex;
  align-items: center;
  width: 2.2rem;
  height: 1rem;
  border-radius: 10px;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.input.border};
  ::before {
    content: "";
    position: absolute;
    min-height: 1.2rem;
    min-width: 1.2rem;
    border-radius: 100%;
    left: 0;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background: ${({ theme }) => theme.button.primary.background};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 1rem;
      min-width: 1rem;
    }
    transition: 0.4s all ease;
  }
  background: ${({ theme }) => theme.input.background};
  ${({ checked }) =>
    checked
      ? css`
          ::before {
            transform: translateX(1rem);
            @media screen and (max-width: ${({ theme: { screen } }) =>
                screen.sm}) {
              transform: translateX(0.8rem);
            }
          }
        `
      : css`
          ::before {
            background: ${({ theme }) => theme.input.background};
          }
        `};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 1.8rem;
    height: 0.8rem;
  }
  transition: 0.4s all ease;
`;
