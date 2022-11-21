import { useEffect, useState } from "react";
import { FC, useContext } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import Button from "../Buttons/Button";
import PopUpHeader from "../PopUpHeader/PopUpHeaderUser";
import * as El from "./PopUpMessageElement";

type TPopupMessage = {
  message: string;
};

const PopUpMessage: FC<TPopupMessage> = ({ message }) => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    if (message) setMsg(message);
  }, [message]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader title="Message" />
        <El.Body>
          <El.Message>{msg}</El.Message>
          <El.ButtonWrapper>
            <Button
              type="button"
              name="Oke"
              onClick={() => dispatch({ type: "CLOSE_POPUP" })}
            />
          </El.ButtonWrapper>
        </El.Body>
      </El.Section>
    </El.Main>
  );
};

export default PopUpMessage;
