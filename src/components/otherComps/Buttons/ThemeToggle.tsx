import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import IconsControl from "../../IconsControl";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  overflow: hidden;
  aspect-ratio: 1/1;
  min-width: 2rem;
  width: 2rem;
  height: 2rem;
  :hover {
    color: ${({ theme }) => theme.button.color};
    background: ${({ theme }) => theme.input.focus.background};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  transition: 0.4s all ease;
`;

export const IconWrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  > svg {
    height: 20px;
    fill: ${({ theme }) => theme.color[1]};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 16px;
    }
  }
  padding: 0.2rem;
`;
export const IconWrapper2 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  > svg {
    height: 18px;
    fill: ${({ theme }) => theme.color[1]};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 16px;
    }
  }
  padding: 0.2rem;
`;

const containerVariant = {
  hidden: {
    opacity: 0,
    y: "3rem",
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      mass: 0.5,
      damping: 10,
      stiffness: 80,
    },
  },
};
const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <Container
      onClick={(e) => {
        changeTheme();
        e.stopPropagation();
      }}
    >
      <AnimatePresence>
        {theme === "light" && (
          <IconWrapper
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {IconsControl("sunny")}
          </IconWrapper>
        )}
        {theme === "dark" && (
          <IconWrapper2
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {IconsControl("moon")}
          </IconWrapper2>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ThemeToggle;
