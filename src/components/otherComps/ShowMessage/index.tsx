import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import IconsControl from "../../IconsControl";
import * as El from "./ShowMessageElement";

type TProps = {
  message: string;
  color: "danger" | "success" | "warning";
};

const ShowMessage: FC<TProps> = ({ color, message }) => {
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    if (message) {
      setIsShowed(true);
      setMsg(message);
    } else {
      setIsShowed(false);
    }
  }, [message]);

  return (
    <El.Main isShowed={isShowed} color={color}>
      <El.Message>{msg}</El.Message>
      <El.BtnWrapper onClick={() => setIsShowed(false)} color={color}>
        {IconsControl("x")}
      </El.BtnWrapper>
    </El.Main>
  );
};

export default ShowMessage;
