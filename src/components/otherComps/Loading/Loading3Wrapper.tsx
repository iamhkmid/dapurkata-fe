import { FC } from "react";
import styled from "styled-components";
import styles from "./Spinner.module.css";
const Main = styled.main`
  display: flex;
  height: 2rem;
  position: relative;
`;

const Loader = styled.div`
  --color: ${({ theme }) => theme.button.primary.background};
  --size-mid: 6vmin;
  --size-dot: 1.5vmin;
  --size-bar: 0.4vmin;
  --size-square: 3vmin;
  display: flex;
  position: relative;
  width: 5rem;
  display: grid;
  place-items: center;

  ::before,
  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
  }

  ::before,
  ::after {
    width: var(--size-dot);
    height: var(--size-dot);
    background-color: var(--color);
    border-radius: 50%;
    opacity: 0;
    animation: loader-2 0.8s cubic-bezier(0.2, 0.32, 0, 0.87) infinite;
  }

  ::after {
    animation-delay: 0.3s;
  }

  @keyframes loader-2 {
    0%,
    80%,
    100% {
      opacity: 0;
    }

    33% {
      opacity: 1;
    }

    0%,
    100% {
      transform: translateX(-4vmin);
    }

    90% {
      transform: translateX(4vmin);
    }
  }
`;

const Loading3Wrapper: FC = () => {
  return (
    <Main>
      <Loader />
    </Main>
  );
};

export default Loading3Wrapper;
