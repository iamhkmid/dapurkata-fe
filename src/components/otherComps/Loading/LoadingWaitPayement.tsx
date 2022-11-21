import { FC } from "react";
import styled from "styled-components";
import styles from "./Spinner.module.css";
const Main = styled.main`
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
  > div {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid ${({ theme }) => theme.button.primary.background};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1.2s cubic-bezier(0, 0.4, 0.8, 1) infinite;
  }
  > div :nth-child(2) {
    animation-delay: -0.5s;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 30px;
    height: 30px;
    > div {
      border: 3px solid ${({ theme }) => theme.button.primary.background};
    }
  }
  @keyframes lds-ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
`;

const LoadingWaitPayement: FC = () => {
  return (
    <Main>
      <div></div>
      <div></div>
    </Main>
  );
};

export default LoadingWaitPayement;
