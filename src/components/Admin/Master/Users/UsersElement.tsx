import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: 0.4s all ease;
  gap: 1rem;
`;
export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding: 0.2rem 0;
  transition: 0.4s all ease;
`;
