import { FC } from "react";
import styled from "styled-components";
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .loading-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 5px;
    > h1 {
      font-size: 14px;
      color: ${({ theme }) => theme.color[8]};
      font-weight: 500;
    }
  }
`;
const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    border: 5px solid ${({ theme }) => theme.color[8]};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.color[8]} transparent transparent
      transparent;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 50px;
    height: 50px;
    > div {
      width: 50px;
      height: 50px;
    }
  }
  > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  > div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingPopup: FC = () => {
  return (
    <Main>
      <div className="loading-wrapper">
        <Loading>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Loading>
        <h1>Loading</h1>
      </div>
    </Main>
  );
};

export default LoadingPopup;
