import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  display: flex;
  width: 100%;
  min-height: 20rem;
  overflow: hidden;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  width: 100%;
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
  gap: 1rem;
  width: 100%;
  border-top: 2px dashed ${({ theme }) => theme.border[2]};
  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
  padding: 0.5rem 0.5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
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
  gap: 0.5rem;
  width: 100%;
  min-width: 30rem;
`;

export const Info = styled.div`
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  > h1.key {
    font-weight: 500;
    min-width: 9rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-width: 7rem;
    }
  }
  > h1.separator {
    font-weight: 400;
  }
  > h1.value {
    font-weight: 400;
  }
`;
