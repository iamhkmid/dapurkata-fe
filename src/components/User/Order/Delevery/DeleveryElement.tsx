import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
type TContentName = {
  disabled: boolean;
};
export const ContentHeader = styled.div<TContentName>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.input.background};
  width: fit-content;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  position: relative;
  height: 100%;
  color: ${({ theme }) => theme.input.color};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => theme.input.disabled.color};
    `}

  transition: 0.4s all ease;
`;
export const ContentTitle = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;
type TContentBody = {
  isShowed: boolean;
};
export const ContentBody = styled.div<TContentBody>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-height: 0;
  overflow-y: scroll;
  border-bottom: 1px solid transparent;
  ${({ isShowed }) =>
    isShowed &&
    css`
      border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
      max-height: 30rem;
    `}
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  transition: 0.4s all ease;
  transition-property: max-height, height, border-bottom;
`;

type TDropdownIconWrapper = {
  isShowed: boolean;
  disabled?: boolean;
};
export const DropdownIconWrapper = styled.div<TDropdownIconWrapper>`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.input.dropdown.icon};
  svg {
    display: flex;
    height: 18px;
    stroke-width: 58px;
  }
  ${({ isShowed }) =>
    isShowed &&
    css`
      transform: rotate(180deg);
      color: ${({ theme }) => theme.input.focus.dropdown.icon};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.input.disabled.color};
    `}
transition: 0.4s all ease;
`;
export const EmptyCart = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  width: 100%;
`;
