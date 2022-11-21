import { useRef } from "react";
import { FC, useContext, useEffect, useState } from "react";
import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import IconsControl from "../../IconsControl";
import * as El from "./GlobalMessageElement";
type TMessage = {
  message: string;
  color: "danger" | "success" | "warning";
};
const GlobalMessageAdmin: FC = () => {
  const { adminNav, dispatch } = useContext(AdminNavCtx);
  const [msg, setMsg] = useState<TMessage>(null);
  const timeout = useRef<NodeJS.Timeout>(undefined);
  const close = () => {
    dispatch({ type: "CLOSE_GLOBAL_MESSAGE" });
  };
  useEffect(() => {
    if (adminNav.globalMessage.message) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(close, 3000);
      setMsg({
        message: adminNav.globalMessage.message,
        color: adminNav.globalMessage.color,
      });
    }
  }, [adminNav.globalMessage]);

  return (
    <El.Main
      isShowed={adminNav.globalMessage.isShowed}
      color={adminNav.globalMessage?.color || msg?.color}
      fixed={!!adminNav.popup.name}
      isAdmin={true}
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
        color={adminNav.globalMessage?.color || msg?.color}
      >
        {IconsControl("close-outline")}
      </El.BtnWrapper>
    </El.Main>
  );
};

export default GlobalMessageAdmin;
