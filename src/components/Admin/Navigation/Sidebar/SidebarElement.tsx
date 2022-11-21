import styled, { css } from "styled-components";
import sidebar_light from "../../../../img/sidebar_light.svg";
import sidebar_dark from "../../../../img/sidebar_dark.svg";
type TMain = {
  isOpen: boolean;
  themeState: string;
};

export const Main = styled.div<TMain>`
  font-family: "Roboto", sans-serif;
  /* font-family: "Open Sans", sans-serif; */
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  padding-top: 3rem;
  width: 15rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 21;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v1.track};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: translateX(-15rem);
      transition: 0.4s all ease;
    `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    position: fixed;
    top: 0;
    left: 0;
  }

  transition: 0.4s all ease;
`;

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;

  transition: 0.4s all ease;
`;
export const SidebarHead = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  justify-content: center;
  position: relative;
  transition: 0.4s all ease;
`;

export const Logo = styled.img`
  height: 3rem;
  margin-bottom: 1.5rem;
  transition: 0.4s all ease;
`;

export const ItemGroup = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  transition: 0.4s all ease;
`;

export const GroupName = styled.h1`
  font-size: 14px;
  font-weight: 500;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 13px;
  }
  transition: 0.4s all ease;
`;
