import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 1rem;
  }
  transition: 0.4s all ease;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  padding: 0.2rem 0;
  color: ${({ theme }) => theme.color[2]};
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
`;
