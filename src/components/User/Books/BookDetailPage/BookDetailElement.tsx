import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  padding: 40px;
  padding-top: 60px;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 10px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 5px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.background["2"]};
  min-height: 500px;
  margin-top: 35px;
  padding: 2rem 2rem 3rem 2rem;
  overflow-x: auto;
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

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 16px;
  }
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    gap: 16px;
  }
`;

export const OrderButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const OptionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const Images = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 1rem;
  transition: 0.4s all ease;
`;

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  min-height: 260px;
  min-width: 260px;
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.content.bookCard.cover.background};

  > div {
    display: flex;
    min-height: 220px;
    min-width: 150px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: rgba(13, 18, 29, 0.158) 0px 1px 2px,
      rgba(13, 18, 29, 0.158) 0px 2px 4px, rgba(13, 18, 29, 0.158) 0px 4px 8px,
      rgba(13, 18, 29, 0.158) 0px 8px 16px,
      rgba(13, 18, 29, 0.158) 0px 16px 32px,
      rgba(13, 18, 29, 0.158) 0px 32px 64px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    > div {
      min-height: 220px;
      min-width: 150px;
    }
    height: 100%;
    aspect-ratio: unset;
    width: 100%;
  }
  transition: 0.4s all ease;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  transition: 0.4s all ease;
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-bottom: 1rem;
  gap: 5px;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1;
    overflow: hidden;
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 20px;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-height: 1;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
  .cover-type {
    display: flex;
    width: max-content;
    padding: 1px 8px;
    border-radius: 10px;
    background: ${({ theme }) => theme.button.primary.background};
    h1 {
      font-size: 12px;
      color: ${({ theme }) => theme.button.primary.color};
      font-weight: 600;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }
  }
  .empty-stock {
    display: flex;
    width: max-content;
    padding: 1px 8px;
    border-radius: 10px;
    background: ${({ theme }) => theme.button.warning.background};
    h1 {
      font-size: 14px;
      color: ${({ theme }) => theme.button.warning.color};
      font-weight: 600;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 12px;
      }
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  .price {
    display: flex;
    font-family: "Mulish", sans-serif;
    flex-direction: column;
    gap: 2px;
    .normal-price-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .discount {
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      padding: 2px 4px;
      font-weight: 600;
      background: ${({ theme }) => theme.button.success.background};
      color: ${({ theme }) => theme.button.success.color};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }
    .normal-price {
      font-size: 16px;
      text-decoration: line-through;
      line-height: 1;
      font-weight: 800;
      color: ${({ theme }) => theme.color[9]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 14px;
      }
    }
    .discount-price {
      font-size: 27px;
      line-height: 1;
      font-weight: 900;
      color: ${({ theme }) => theme.color[3]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 22px;
      }
    }
  }
`;

export const CartBtn = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .section-name {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 16px;
    }
  }
  .category {
    display: grid;
    width: 100%;
    max-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(6rem, auto));
    grid-gap: 8px 2%;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      grid-template-columns: repeat(1fr, minmax(5rem, 1fr));
    }
    > div {
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      align-items: center;
      overflow: hidden;
      min-width: max-content;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      background: ${({ theme }) => theme.button.list.background};
      color: ${({ theme }) => theme.button.list.color};
      :hover {
        background: ${({ theme }) => theme.button.hover.list.background};
        color: ${({ theme }) => theme.button.hover.list.color};
      }
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 11px;
        padding: 0.2rem 0.5rem;
      }
      transition: 0.4s all ease;
    }
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .section-name {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 16px;
    }
  }
  .info-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
    gap: 16px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      gap: 8px;
    }
    .ai-group {
      display: flex;
      gap: 8px;
      flex-direction: column;
    }
    .ai-wrapper {
      padding: 0.3rem 1rem;
      overflow: hidden;
      min-width: 7rem;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.button.list.color};
      .ai-name {
        font-size: 12px;
        font-weight: 500;
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          font-size: 10px;
        }
      }
      .ai-value {
        font-family: "Mulish", sans-serif;
        font-size: 15px;
        font-weight: 400;
        width: fit-content;
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          font-size: 13px;
        }
      }
      .publisher {
        display: flex;
        color: ${({ theme }) => theme.color[8]};
        cursor: pointer;
        position: relative;
        width: fit-content;
        > h1 {
          font-family: "Mulish", sans-serif;
          position: relative;
          z-index: 1;
          font-size: 15px;
          font-weight: 400;
          @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
            font-size: 13px;
          }
        }
        ::before {
          content: "";
          display: flex;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 3px;
          transform: translate(-50%, -50%);
          height: 110%;
          width: 110%;
          background: transparent;
          transition: 0.4s all ease;
        }
        :hover {
          ::before {
            background: ${({ theme }) => theme.button.list.background};
            color: ${({ theme }) => theme.button.list.color};
          }
        }
      }
      .capitalize {
        text-transform: capitalize;
      }
    }
  }
`;

export const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .section-name {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 16px;
    }
  }
  .desc-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .read-more-wrapper {
    display: flex;
    width: 100%;
    padding: 0 8px;
  }
  .read-more {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[8]};
    cursor: pointer;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .description {
    font-size: 15px;
    text-align: justify;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};
    padding: 0 8px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 13px;
    }
  }
`;

type TButtonElement = {
  isLoading?: boolean;
  active?: boolean;
};
export const Button = styled.button<TButtonElement>`
  font-family: "Poppins", sans-serif;
  display: flex;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  min-height: 2.3rem;
  max-height: max-content;
  min-width: max-content;
  padding: 0.2rem 14px;
  border: 1px solid transparent;
  outline: none;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;

  > svg {
    height: 18px;
    stroke-width: 40;
    fill: transparent;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      height: 16px;
    }
  transition: 0.4s all ease;
  }

  ${({ theme }) => css`
    background: ${theme.button.section.background};
    color: ${theme.button.section.color};
  `}

  :hover {
    ${({ theme, active }) =>
    css`
        box-shadow: ${active
        ? "0 0 1px 2px #ff14337b"
        : "0 0 1px 2px #2072cf5a"};
      `}
  }
  ${({ theme, active }) =>
    active &&
    css`
      background: ${theme.name === "light" ? "#ff1f3d36" : "#ff1f3d22"};
      color: #ff1f3d;
      > svg {
        fill: #ff1f3d;
        color: #ff1f3d;
      }
    `}

  ${({ isLoading, disabled }) =>
    (isLoading || disabled) &&
    css`
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      cursor: default;
      :hover {
        background: ${({ theme }) => theme.button.disabled.background};
        color: ${({ theme }) => theme.button.disabled.color};
      }
      > svg {
        fill: ${({ theme }) => theme.button.disabled.color};
        color: ${({ theme }) => theme.button.disabled.color};
      }
      :focus {
        border: 1px solid transparent;
        box-shadow: none;
      }
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 12px;
    min-height: 2rem;
    padding: 0.2rem 1rem;
  }
  transition: 0.4s all ease;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: 0.4s all ease;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: center;
  height: 2rem;
  gap: 10px;
  padding-right: 5px;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.button.base.color};
  > svg {
    height: 18px;
    stroke-width: 58;
  }

  :hover {
    background: ${({ theme }) => theme.button.hover.base.background};
    color: ${({ theme }) => theme.button.hover.base.color};
  }
  transition: 0.4s all ease;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
`;
