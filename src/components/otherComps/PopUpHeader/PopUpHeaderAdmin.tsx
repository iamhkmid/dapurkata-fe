import { useContext } from "react";
import { FC, useEffect } from "react";
import { useWindowSize } from "react-use";
import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import IconsControl from "../../IconsControl";
import ThemeToggle from "../Buttons/ThemeToggle";
import * as El from "./PopUpHeaderElement";

type TPopUpHeader = {
  title?: string;
  closePopup?: "ALL" | "CURRENT";
  withSideMenu?: {
    setShowSideMenu: (p: boolean) => void;
    showSideMenu: boolean;
  };
  themeToggle?: boolean;
};

const PopUpHeaderAdmin: FC<TPopUpHeader> = (props) => {
  const { title, withSideMenu: ws, themeToggle, closePopup } = props;
  const { dispatch } = useContext(AdminNavCtx);
  const { width } = useWindowSize();
  useEffect(() => {
    if (ws) {
      width > 960 && ws.setShowSideMenu(true);
      width <= 960 && ws.setShowSideMenu(false);
    }
  }, [width]);
  return (
    <El.Main>
      <El.Left>
        {(!!ws || themeToggle) && (
          <El.ButtonGroup>
            {!!ws && (
              <El.IconWrapper
                showSideMenu={ws.showSideMenu}
                onClick={() => ws.setShowSideMenu(!ws.showSideMenu)}
              >
                {IconsControl("chevron-back-outline")}
              </El.IconWrapper>
            )}
            {themeToggle && <ThemeToggle />}
          </El.ButtonGroup>
        )}
        <El.Title>{title}</El.Title>
      </El.Left>
      <El.CloseBtn
        onClick={() =>
          dispatch({
            type:
              closePopup === "ALL" ? "CLOSE_ALL_POPUP" : "CLOSE_CURRENT_POPUP",
          })
        }
      >
        {IconsControl("close-outline")}
      </El.CloseBtn>
    </El.Main>
  );
};

export default PopUpHeaderAdmin;
