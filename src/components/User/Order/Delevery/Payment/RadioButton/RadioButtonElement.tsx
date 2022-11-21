import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.3rem;
  max-height: 12rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v2.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v2.hover.thumb};
  }
`;

type TInputRadio = {
  isSelected: boolean;
};

export const InputRadio = styled.div<TInputRadio>`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;
  min-width: 15rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border[2]};
  :hover {
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme.button.hover.list.background};
      border: 1px solid ${({ theme }) => theme.input.focus.border};
    `}
  transition: 0.4s all ease;
  transition-property: background, border, color;
`;

export const Detail = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background: #ffffffc5;
  border-radius: ${({ theme }) => theme.input.borderRadius};
`;
type TTextInfo = {
  isSelected: boolean;
};
export const TextInfo = styled.div<TTextInfo>`
  display: flex;
  flex-direction: column;
  > h1 :nth-child(1) {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  > h1 :nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.6rem;
    }
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      > h1 :nth-child(1),
      > h1 :nth-child(2) {
        color: ${({ theme }) => theme.button.hover.list.color};
      }
    `}
`;
