import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const BookCardsLoading = () => {
  return (
    <Cards>
      {Array.from(Array(12).keys()).map((val) => (
        <Card key={val}>
          <CoverWrapper className="cover loading" />
          <BookInfo>
            <div className="info1">
              <div className="title loading" />
              <div className="author loading" />
            </div>
            <div className="info2">
              <div className="price-wrapper">
                <div className="discount-price loading" />
                <div className="normal-price loading" />
              </div>
              <div className="additional-info">
                <div className="discount loading" />
                <div className="text loading" />
              </div>
            </div>
          </BookInfo>
        </Card>
      ))}
    </Cards>
  );
};

export default BookCardsLoading;

const shimmer = keyframes`0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
 }

`;
export const Cards = styled(motion.div)`
  margin: 0 auto;
  padding-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 10px;
  }
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: max-content minmax(50px, max-content);
  position: relative;
  margin-top: 1rem;
  padding: 0rem 5px;
  background: ${({ theme }) => theme.background[2]};
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};

  .loading::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading[2]} 20%,
      ${({ theme }) => theme.loading[1]} 60%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  transition: 0.4s all ease;
  transition-property: background;
`;

const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  top: -1rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.loading[1]};
  aspect-ratio: 2.1/3;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

const BookInfo = styled.div`
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
    display: flex;
    min-height: 0.9rem;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 0.8rem;
    }
  }
  .author {
    display: flex;
    min-height: 0.6rem;
    min-width: 4rem;
    position: relative;
    width: fit-content;
    overflow: hidden;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 0.5rem;
    }
  }
  .info2 {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
  }
  .price-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .normal-price {
    display: flex;
    min-height: 11px;
    position: relative;
    min-width: 50px;
    overflow: hidden;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: 2px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 9px;
    }
  }
  .discount-price {
    overflow: hidden;
    min-height: 15px;
    position: relative;
    min-width: 70px;
    overflow: hidden;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: 2px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 13px;
    }
  }
  .additional-info {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 100%;
    height: 100%;

    .discount {
      min-height: 13px;
      position: relative;
      min-width: 60px;
      overflow: hidden;
      background: ${({ theme }) => theme.loading[1]};
      border-radius: 2px;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        min-height: 12px;
      }
    }

    .text {
      min-height: 13px;
      position: relative;
      min-width: 60px;
      overflow: hidden;
      background: ${({ theme }) => theme.loading[1]};
      border-radius: 2px;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        min-height: 12px;
      }
    }
  }
`;
