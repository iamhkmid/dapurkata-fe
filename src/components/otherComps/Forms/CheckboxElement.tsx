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

export const HiddenCheckbox = styled.input`
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
};
export const StyledCheckbox = styled.div<TStyledCheckbox>`
  display: flex;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${({ theme }) => theme.input.border};
  ${({ checked }) =>
    checked
      ? css`
          background: ${({ theme }) => theme.button.primary.background};
          border: 1px solid transparent;
        `
      : css`
          background: ${({ theme }) => theme.input.background};
        `};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ theme }) => theme.button.focus.primary.boxShadow};
  }

  ${IconWrapper} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
