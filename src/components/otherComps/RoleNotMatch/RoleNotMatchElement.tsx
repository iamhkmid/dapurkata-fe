import styled from "styled-components";

export const Main = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background[1]};
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  z-index: 100;
  transition: 0.4s all ease;
`;

export const NotifContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ErrorText = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0 0.2rem;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 2rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  text-align: center;
`;

export const TextGroup = styled.div`
  display: flex;
  font-size: 1.3rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
`;

export const Text1 = styled.h1`
  font-weight: 300;
  color: ${({ theme }) => theme.color[1]};
`;

export const Text2 = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.color[5]};
`;
