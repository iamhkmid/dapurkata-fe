import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  padding: 5rem 0.5rem 1rem 0.5rem;
  height: 100vh;
  justify-content: center;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 5rem 0.2rem 1rem 0.2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 66rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 0.5rem;
  position: relative;
`;

export const PageInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const TextInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  > h1.navigation {
    font-size: 0.9rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
    transition: 0.4s all ease;
  }
  > h1.state {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
    transition: 0.4s all ease;
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
    stroke-width: 60px;
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
