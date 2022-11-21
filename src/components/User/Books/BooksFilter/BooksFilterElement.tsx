import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 30rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
    width: 100%;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-top: 1rem;
`;

type TBookCount = {
  isShowed: boolean;
};

export const BookCount = styled.div<TBookCount>`
  max-height: 0;
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[2]};

  ${({ isShowed }) =>
    isShowed &&
    css`
      max-height: 1.5rem;
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;

export const FilterOption = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
  gap: 0.5rem;
`;
