import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import IconsControl from "../../IconsControl";
import Button from "../../otherComps/Buttons/Button";
import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import data from "../../../data/content";

const Section1 = () => {
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  const {
    section1: { text1, text2, text3 },
  } = data;
  return (
    <Main
      id="section1"
      bgUrl={
        theme === "dark"
          ? `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/img/home_dark.svg`
          : `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/img/home_light.svg`
      }
    >
      <GroupText>
        <Text1
          initial={{ opacity: 0, y: "10px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ ease: "easeIn", duration: 0.4 }}
        >
          {text1}
        </Text1>
        <Text2
          initial={{ opacity: 0, y: "10px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ ease: "easeIn", duration: 0.4, delay: 0.2 }}
        >
          {text2}
        </Text2>
      </GroupText>
      <ImageContainer
        initial={{ opacity: 0, y: "10px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ ease: "easeIn", duration: 0.4, delay: 0.4 }}
      >
        <Image
          src="/img/banner.svg"
          alt="Cover"
          layout="responsive"
          objectFit="fill"
          width="300"
          height="180"
        />
      </ImageContainer>
      <ButtonWrapper
        initial={{ opacity: 0, y: "10px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ ease: "easeIn", duration: 0.4, delay: 0.6 }}
      >
        <div className="button-home">
          <Button
            type="button"
            name="Pesan Sekarang"
            color="primary"
            onClick={() => push("https://wa.link/lc00fi")}
          />
          <Button
            type="button"
            name="Paket Penerbitan"
            color="list"
            onClick={() => push("/#section2-2")}
          />
        </div>
        <ChevronDown onClick={() => push("/#section2-1")}>
          {IconsControl("chevron-down-outline")}
        </ChevronDown>
      </ButtonWrapper>
    </Main>
  );
};

export default Section1;

type TSc1 = { bgUrl: string };
const Main = styled.div<TSc1>`
  display: flex;
  background: linear-gradient(
    0deg,
    ${({ theme }) => (theme.name === "light" ? "#b7d0ff" : "#1e578d42")} 0%,
    ${({ theme }) => (theme.name === "light" ? "#e3edff" : "#305d8842")} 30%,
    ${({ theme }) => theme.background[2]} 100%
  );
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  gap: 3rem;
  width: 100%;
  overflow: hidden;
  padding-top: 6rem;
  padding-bottom: 1rem;
  /* 
  background-image: url(${({ bgUrl }) => bgUrl}); */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  /* ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(1px);
  } */
  transition: 0.4s all ease;
`;
const GroupText = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
`;

const Text1 = styled(motion.h1)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color[1]};
  text-align: center;
  font-weight: 700;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1.3rem;
  }
`;
const Text2 = styled(motion.h1)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color[2]};
  text-align: center;
  font-weight: 500;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
`;
const Text3 = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color[1]};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled(motion.div)`
  display: block;
  align-items: center;
  position: relative;
  height: 280px;
  aspect-ratio: 10/6;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    height: 240px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 160px;
  }
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  .button-home {
    display: flex;
    gap: 2rem;
    > button {
      border-radius: 100px;
    }
    > button:nth-child(2) {
      border: 1px solid
        ${({ theme }) => (theme.name === "light" ? "#8da1b6" : "#60778b")};
    }
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 1rem;
  }
`;

const animateDown = keyframes`
0%,20%,50%,80%,100%{
  transform:translateY(0)
}
40%{
  transform:translateY(5px)
}
60%{
  transform:translateY(3px)
}
`;

const ChevronDown = styled(motion.div)`
  display: flex;
  cursor: pointer;
  > svg {
    color: ${({ theme }) => theme.color[2]};
    height: 2rem;
    stroke-width: 55;
  }
  animation: ${animateDown} infinite 1.5s;
`;
