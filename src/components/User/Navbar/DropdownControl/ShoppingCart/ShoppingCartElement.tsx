import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: default;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  top: 95%;
  right: -10px;
  min-width: 38rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  ::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: -8px;
    z-index: 10;
    right: 20px;
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 0 2px 1px #1d2e4225"
        : "0 0 2px 1px #0f13188e"};
    transform: rotate(45deg);
    background: ${({ theme }) => theme.background[2]};
  }
  ::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 15px;
    top: 0px;
    z-index: 11;
    right: 15px;
    background: ${({ theme }) => theme.background[2]};
  }
`;
