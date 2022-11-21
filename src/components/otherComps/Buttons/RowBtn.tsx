import { FC } from "react";
import styled, { css } from "styled-components";
import IconsControl from "../../IconsControl";

type TIconWrapper = {
  color?: string;
};
const IconWrapper = styled.button<TIconWrapper>`
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 0.2rem;
  aspect-ratio: 1/1;
  height: fit-content;
  outline: none;
  border: none;
  padding: 0.2rem;
  > svg {
    height: 1.3rem;
    stroke-width: 2px;
  }
  ${({ theme, color }) => css`
    background: ${theme.button[color || "primary"].background};
    color: ${theme.button[color || "primary"].color};
    > svg {
      color: ${theme.button[color || "primary"].color};
    }
  `}

  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover[color || "primary"].background};
      color: ${theme.button.hover[color || "primary"].color};
    `}
  }

  :disabled {
    background: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.color};
    cursor: default;
    :hover {
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
    }
  }
  transition: 0.4s all ease;
`;
type TRowBtn = {
  onClick: () => void;
  type: "delete" | "edit" | "detail";
  disabled?: boolean;
};

const RowBtn: FC<TRowBtn> = ({ onClick, type, disabled }) => {
  return (
    <IconWrapper
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      color={type === "delete" ? "danger" : "primary"}
      disabled={disabled}
    >
      {IconsControl(type)}
    </IconWrapper>
  );
};

export default RowBtn;
