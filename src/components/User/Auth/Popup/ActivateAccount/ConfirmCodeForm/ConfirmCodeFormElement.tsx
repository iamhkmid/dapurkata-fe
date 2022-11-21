import { motion } from "framer-motion";
import styled from "styled-components";

export const EmailForm = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  padding-top: 1.4rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding-top: 0;
  }
`;
