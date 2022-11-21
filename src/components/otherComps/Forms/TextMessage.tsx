import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";

type TMessage = {
  isShowed: boolean;
  color: string;
};

export const Message = styled.label<TMessage>`
  font-size: 0.8rem;
  max-height: 0;
  overflow: hidden;

  ${({ isShowed }) =>
    isShowed &&
    css`
      overflow: visible;
      max-height: 3rem;
      transition: 0.4s all ease;
    `}
  ${({ theme, color }) =>
    color === "danger" &&
    css`
      color: ${theme.color[5]};
      > svg {
        color: ${theme.color[5]};
      }
      transition: 0.4s all ease;
    `}
    ${({ theme, color }) =>
    color === "info" &&
    css`
      color: ${theme.color[8]};
      > svg {
        color: ${theme.color[8]};
      }
      transition: 0.4s all ease;
    `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

type TProps = { message: string; color: "danger" | "info" };
const TextError: FC<TProps> = ({ message, color }) => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (message) setMsg(message);
  }, [message]);
  return (
    <Message isShowed={!!message} color={color}>
      {msg}
    </Message>
  );
};
export default TextError;
