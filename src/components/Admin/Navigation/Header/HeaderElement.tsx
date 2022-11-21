import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background[3]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[1]};
  position: fixed;
  width: 100vw;
  top: 0;
  margin: 0 0 0.5rem 0;
  padding: 0 0.5rem;
  z-index: 22;
  transition: 0.4s all ease;
`;
type TSidebarButton = {
  active: boolean;
};
export const IconWrapper = styled.div<TSidebarButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.color[4]};
  border: 1px solid transparent;
  > svg {
    display: flex;
    height: 16px;
    stroke-width: 68;
  }
  ${(props) =>
    props.active
      ? css`
          transform: rotate(0);
        `
      : css`
          transform: rotate(180deg);
        `}

  :hover {
    color: ${({ theme }) => theme.color[4]};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  transition: 0.4s all ease;
`;

export const ProfileName = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    display: none;
  }
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.border[3]};
  width: 2rem;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  transition: 0.4s all ease;
`;

export const ProfilePhoto = styled.img`
  height: 1.5rem;
  color: white;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
  width: max-content;
  > div > div {
    > svg {
      fill: ${({ theme }) => theme.color[4]};
    }
    background: ${({ theme }) => theme.background[3]};
    :hover {
      background: ${({ theme }) => theme.background[3]};
      > svg {
        fill: ${({ theme }) => theme.color[4]};
      }
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  > svg {
    display: flex;
    height: 16px;
    stroke-width: 58;
  }
`;
export const AccountBtn = styled.button`
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.button.primary.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.sidebar.background};
    color: ${({ theme }) => theme.button.hover.primary.color};
    .profile {
      border: 1px solid ${({ theme }) => theme.button.hover.primary.background};
    }
  }
  :focus {
    color: ${({ theme }) => theme.button.hover.primary.color};
    .profile {
      border: 1px solid ${({ theme }) => theme.button.primary.background};
    }
  }
  transition: 0.4s all ease;
`;
export const Logo = styled.div`
  height: 2rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  display: flex;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
    display: none;
  }
  transition: 0.4s all ease;
`;

export const Left = styled.div`
  display: flex;
`;
