import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  max-width: 50%;
  max-height: 90%;
  min-width: 40rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-direction: column;
  position: relative;
  font-size: 1rem;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: 30rem;
    max-width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
    margin: 0.2rem;
    width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  margin: 0 0.5rem;
  gap: 1rem;
  padding-bottom: 0.5rem;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1rem;
  max-height: 40vh;
  border-top: 2px solid ${({ theme }) => theme.border[2]};
  border-style: dashed;
  padding: 1rem 0.5rem;
  width: 100%;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

export const Li = styled.li`
  display: flex;
  cursor: pointer;
  gap: 0.5rem;
  width: 100%;
`;

type TInfo = {
  active: boolean;
};

export const Info = styled.div<TInfo>`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  width: 100%;
  color: ${({ theme }) => theme.button.base.color};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.border[2]};

  :hover {
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  ${({ active }) =>
    active &&
    css`
      border: 1px solid ${({ theme }) => theme.input.focus.border};
      background: ${({ theme }) => theme.button.hover.list.background};
      color: ${({ theme }) => theme.button.hover.list.color};
    `};
  > h1 :nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 500;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  > h1 :nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 400;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  transition: 0.4s all ease;
`;

export const BtnLiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
