import { useRef } from "react";
import { FC, useContext, useEffect, useState } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import IconsControl from "../../IconsControl";
import * as El from "./GlobalMessageElement";
type TMessage = {
  message: string;
  color: "danger" | "success" | "warning";
};
const GlobalMessageUser: FC = () => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const [msg, setMsg] = useState<TMessage>(null);
  const timeout = useRef<NodeJS.Timeout>(undefined);
  const close = () => {
    dispatch({ type: "CLOSE_GLOBAL_MESSAGE" });
  };
  useEffect(() => {
    if (userNav.globalMessage.message) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(close, 3000);
      setMsg({
        message: userNav.globalMessage.message,
        color: userNav.globalMessage.color,
      });
    }
  }, [userNav.globalMessage]);

  return (
    <El.Main
      isShowed={userNav.globalMessage.isShowed}
      color={userNav.globalMessage?.color || msg?.color}
      fixed={!!userNav.popup.name}
      isAdmin={false}
      onMouseEnter={() => {
        clearTimeout(timeout.current);
      }}
      onMouseLeave={() => {
        timeout.current = setTimeout(close, 1500);
      }}
    >
      <El.Message>{msg?.message || ""}</El.Message>
      <El.BtnWrapper
        onClick={() => dispatch({ type: "CLOSE_GLOBAL_MESSAGE" })}
        color={userNav.globalMessage?.color || msg?.color}
      >
        {IconsControl("close-outline")}
      </El.BtnWrapper>
    </El.Main>
  );
};

export default GlobalMessageUser;
