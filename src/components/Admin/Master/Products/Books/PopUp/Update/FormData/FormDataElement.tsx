import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: max-content;
  transition: 0.4s all ease;
`;
export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  flex-direction: row;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
  }
`;

export const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 0.5rem;
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
  padding: 1.5rem 0;
  gap: 0.5rem;
  width: max-content;
  > button {
    width: 100%;
  }
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
