import { FC } from "react";
import styled from "styled-components";
import styles from "./Spinner.module.css";
const Main = styled.main`
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid ${({ theme }) => theme.button.primary.background};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.button.primary.background} transparent
      transparent transparent;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 9px;
    height: 9px;
    > div {
      width: 9px;
      height: 9px;
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

const LoadingLdsRing: FC = () => {
  return (
    <Main>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Main>
  );
};

export default LoadingLdsRing;
