import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const NumberColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DefaultColumn = styled.div``;
export const ActionColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  > button :nth-child(1) {
    min-height: 16px;
    padding: 3px 10px;
    font-size: 14px;
    font-weight: 400;
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
    > button :nth-child(1) {
      font-size: 12px;
    }
  }
`;
