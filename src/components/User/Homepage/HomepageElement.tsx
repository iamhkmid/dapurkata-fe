import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

type TSection = {
  currTheme: string;
};
export const Main = styled.div<TSection>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const Section = styled.div`
  display: flex;
  position: relative;
  background: ${({ theme }) => theme.background[2]};
  width: 100%;
  .scroll-point {
    position: absolute;
    top: -3rem;
    visibility: hidden;
  }
  #section1.scroll-point {
    top: 0;
  }
`;
