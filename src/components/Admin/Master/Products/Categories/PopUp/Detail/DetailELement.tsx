import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;

  width: 30rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
  }
  transition: 0.4s all ease;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem 2rem;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem 1.5rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Text1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color[2]};
`;

export const Table = styled.table`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-collapse: collapse;
  width: 100%;

  tr {
    td {
      padding: 0.4rem 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.table.border};
      color: ${({ theme }) => theme.table.td.color};
      transition: 0.4s all ease;
    }
    :hover {
      td {
        background: ${({ theme }) => theme.table.hover.background};
        border-bottom: 1px solid ${({ theme }) => theme.table.hover.border};
      }
      transition: 0.4s all ease;
    }
    transition: 0.4s all ease;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
