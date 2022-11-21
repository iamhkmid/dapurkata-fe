import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  gap: 1rem;
  transition: 0.4s all ease;
  transition-property: width, height;
`;
export const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
export const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  height: 2rem;
  width: max-content;
  > button {
    width: 100%;
  }
  margin-top: 1rem;
  justify-content: flex-end;
  align-items: center;
`;

export const SpanGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const SpanGroupGrid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.5rem;
`;
export const SpanGroupGrid2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
`;
