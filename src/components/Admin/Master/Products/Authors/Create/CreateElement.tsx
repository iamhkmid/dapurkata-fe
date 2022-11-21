import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-width: 50%;
  max-width: max-content;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
  }
  transition: 0.4s all ease;
  transition-property: width, height;
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

type TErrorMessage = {
  status: string;
};

export const SubmitWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  width: max-content;
  align-items: center;
  > button {
    width: 100%;
  }
`;
