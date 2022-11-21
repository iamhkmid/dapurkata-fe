import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0.5rem;
`;

export const Head = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  width: 100%;
  padding: 1rem 0.5rem;
  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;
export const InputGroup2 = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
    gap: 0.5rem;
  }
`;

export const InputGroup3 = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ButtonLink = styled.h1`
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.link.color};
  :hover {
    color: ${({ theme }) => theme.link.hover.color};
  }
  transition: 0.4s all ease;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 90px;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.button.primary.background};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 80px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  > button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      padding: 0.4rem 0.7rem;
      font-size: 0.7rem;
    }
  }
`;
