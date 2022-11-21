import styled, { css } from "styled-components";

export const PageSizeContainer = styled.div`
  display: flex;
  height: 2.2rem;
`;
export const BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  z-index: 6;
  background: ${({ theme }) => theme.input.focus.borderFocus};
  transition: 0.4s all ease;
`;
export const SelectStyled = styled.div`
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  align-items: center;
  outline: none;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.3rem 3rem 0.3rem 1rem;
  height: 100%;
  width: 100%;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

export const DropdownContainer = styled.div`
  position: relative;
  transition: 0.3s all ease;
`;
export const Dropdown = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  cursor: pointer;
  max-height: 9rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 0.1rem;
  min-height: 2rem;
  max-height: 9rem;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  z-index: 9;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v1.track};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  transition: 0.3s all ease;
`;

export const NoOption = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 300;
  width: 100%;
  height: 2rem;
  background: ${({ theme }) => theme.input.focus.background};
  color: ${({ theme }) => theme.input.color};
  transition: 0.3s all ease;
`;

export const Options = styled.div`
  background: ${({ theme }) => theme.input.focus.background};
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.5rem;
  color: ${({ theme }) => theme.input.color};
  :hover {
    background: ${({ theme }) => theme.button.primary.background};
    color: ${({ theme }) => theme.button.primary.color};
  }
  transition: 0.4s all ease;
`;
export const InputWrapper = styled.div`
  outline: none;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.base.background};
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 4.5rem;
  :focus {
    background: ${({ theme }) => theme.input.base.focus.background};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }

  transition: 0.4s all ease;
  transition-property: width, height, background, border, box-shadow;
`;

type TDropdownIconWrapper = {
  active: boolean;
};
export const DropdownIconWrapper = styled.div<TDropdownIconWrapper>`
  position: absolute;
  right: 0.5rem;
  color: ${({ theme }) => theme.input.dropdown.icon};
  svg {
    display: flex;
    height: 16px;
    stroke-width: 58px;
  }
  ${(props) =>
    props.active &&
    css`
      transform: rotate(180deg);
      color: ${({ theme }) => theme.input.focus.borderFocus};
    `}
  transition: 0.4s all ease;
`;
