import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Cards = styled(motion.div)`
  margin: 0 auto;
  padding-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 10px;
  }
`;

export const NoBook = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
  color: ${({ theme }) => theme.color[2]};
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: max-content minmax(50px, max-content);
  font-family: "Mulish", sans-serif;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
  padding: 0rem 5px;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    border-color: ${({ theme }) => theme.content.bookCard.hover.border};
    box-shadow: rgba(31, 31, 58, 0.164) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  transition: 0.4s all ease;
`;

export const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  top: -1rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: max-content;
  ${({ theme }) =>
    theme.name === "light"
      ? css`
          box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        `
      : css`
          box-shadow: rgba(9, 9, 19, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        `}
  min-width: 100%;
  aspect-ratio: 2.1/3;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  .empty-cover {
    display: flex;
    font-family: "Poppins", sans-serif;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    position: absolute;
    background: #090d11b2;
    > h1 {
      font-size: 22px;
      font-weight: 600;
      color: ${({ theme }) => theme.color[4]};
      text-transform: uppercase;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 20px;
      }
    }
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: space-between;
  top: -0.5rem;
  gap: 3px;
  overflow: hidden;
  .info1 {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1;
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1;
    font-size: 11px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 9px;
    }
  }
  .price-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .normal-price {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 11px;
    font-weight: 600;
    text-decoration: line-through;
    color: ${({ theme }) => theme.color[9]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 9px;
    }
  }
  .discount-price {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 15px;
    font-weight: 800;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 13px;
    }
  }
  .discount {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color[8]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }

  .info2 {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
  }
  .additional-info {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 100%;
    height: 100%;

    .discount {
      font-size: 11px;
      font-weight: 600;
      border-radius: 2px;
      padding: 1px 5px;
      text-transform: capitalize;
      min-width: max-content;
      background: ${({ theme }) => theme.button.success.background};
      color: ${({ theme }) => theme.button.success.color};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }

    .text {
      font-size: 11px;
      font-weight: 600;
      border-radius: 2px;
      min-width: max-content;
      text-transform: capitalize;
      padding: 1px 5px;
      background: ${({ theme }) => theme.button.primary.background};
      color: ${({ theme }) => theme.button.primary.color};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }
    .wishlist {
      display: flex;
      > svg {
        height: 15px;
        fill: #ff1f3d;
        color: #ff1f3d;
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          height: 14px;
        }
      }
    }
  }
`;
