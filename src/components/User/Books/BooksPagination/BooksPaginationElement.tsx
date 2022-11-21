import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  font-family: "Poppins", sans-serif;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px dashed ${({ theme }) => theme.border[2]};
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
    justify-content: center;
  }
  transition: 0.4s all ease;
`;
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
export const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const PageInfo = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 2rem;
  color: ${({ theme }) => theme.color[2]};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
    margin-right: 1rem;
  }
  transition: 0.4s all ease;
`;
