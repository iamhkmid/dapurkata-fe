import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  padding: 1rem 0;
  flex-direction: column;
  gap: 1rem;
`;

export const RecipientInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30rem;
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

export const TextGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  > h1.key {
    font-weight: 500;
    min-width: 9rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-width: 7rem;
    }
  }
  > h1.separator {
    font-weight: 400;
  }
  > h1.value {
    font-weight: 400;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Info = styled.h1`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color[1]};
`;
