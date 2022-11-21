import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background[1]};
  color: ${({ theme }) => theme.color[1]};

  transition: 0.4s all ease;
`;

export const Section = styled.div`
  display: flex;
  width: 80%;
  gap: 1rem;
  padding: 0 0.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
  }
  flex-direction: column;
`;
export const SectionTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`;
