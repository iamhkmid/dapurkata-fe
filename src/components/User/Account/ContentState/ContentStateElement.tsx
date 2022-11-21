import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: flex-start;
  height: max-content;
  padding: 0.5rem;
  width: 100%;
  background: ${({ theme }) => theme.background[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 100%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
  }
  transition: 0.5s all ease;
  transition-property: margin-left;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const WishlistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  > h1.title {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
  }
  > div.wishlist-wrapper {
    display: flex;
    max-height: 400px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollbar.v1.thumb};
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 8px;
    > h1.title {
      font-size: 14px;
    }
  }
`;
