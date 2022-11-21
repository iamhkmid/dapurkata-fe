import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  margin-top: 4rem;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background[1]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled(motion.div)`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.background[2]};
  gap: 1rem;
  flex-direction: column;
  width: 35rem;
  padding: 2rem 2rem;
  margin: 1rem;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    padding: 1rem 1rem;
    margin: 1rem 1vw;
  }
  transition: 0.4s all ease;
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
export const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
`;
export const CompTittle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[1]};
`;

export const SpanGroupGrid2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
`;
