import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 40;
  background: inherit;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Title = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.9rem;
  padding: 0.2rem 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  border-radius: 100%;
  margin: 0.2rem 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 3px;
  > svg {
    height: 18px;
    stroke-width: 48px;
  }
  background: transparent;
  color: ${({ theme }) => theme.button.list.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.hover.danger.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 3px;
    > svg {
      height: 16px;
      stroke-width: 48px;
    }
  }
  transition: 0.4s all ease;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
  width: max-content;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;
type TSidebarButton = {
  showSideMenu: boolean;
};
export const IconWrapper = styled.div<TSidebarButton>`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: center;
  height: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.button.base.color};
  > svg {
    height: 18px;
    stroke-width: 58;
  }
  ${({ showSideMenu }) =>
    showSideMenu
      ? css`
          transform: rotate(0);
        `
      : css`
          transform: rotate(180deg);
        `}

  :hover {
    background: ${({ theme }) => theme.button.hover.base.background};
    color: ${({ theme }) => theme.button.hover.base.color};
  }
  transition: 0.4s all ease;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
`;
