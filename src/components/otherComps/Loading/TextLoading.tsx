import { FC } from "react";
import styled from "styled-components";
import styles from "./Spinner.module.css";
const Main = styled.main`
  display: flex;
  font-family: "Poppin", sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.input.color};
`;

const Loader = styled.div`
  --color: ${({ theme }) => theme.input.color};
  --size-square: 0.3rem;
  display: flex;
  position: relative;
  width: 1rem;
  display: grid;
  place-items: center;

  ::before,
  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
  }

  /**
	loader load7
**/
  ::before,
  ::after {
    width: var(--size-square);
    height: var(--size-square);
    background-color: var(--color);
  }

  ::before {
    top: calc(50% - var(--size-square));
    left: calc(50% - var(--size-square));
    animation: loader-6 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  ::after {
    top: 50%;
    left: 50%;
    animation: loader-7 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }
  @keyframes loader-6 {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(100%);
    }

    50% {
      transform: translateX(100%) translateY(100%);
    }

    75% {
      transform: translateY(100%);
    }
  }
  @keyframes loader-7 {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-100%) translateY(-100%);
    }

    75% {
      transform: translateY(-100%);
    }
  }
`;

const TextLoading: FC<{ text: string }> = () => {
  return (
    <Main>
      Loading
      <Loader />
    </Main>
  );
};

export default TextLoading;
