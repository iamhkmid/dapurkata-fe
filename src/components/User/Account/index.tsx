import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { accountMenu } from "../../../data/accountMenu";
import IconsControl from "../../IconsControl";
import * as El from "./AccountElement";
import ContentState from "./ContentState";
import SideMenu from "./SideMenu";

const Account = () => {
  const { query } = useRouter();
  const [menuId, setMenuId] = useState(accountMenu[1].id);
  const [showSideMenu, setShowSideMenu] = useState(true);

  useEffect(() => {
    if (accountMenu.find((val) => val.id === query["menu"])) {
      setMenuId(query["menu"] as string);
    }
  }, [query]);
  const { width } = useWindowSize();
  useEffect(() => {
    width > 960 && setShowSideMenu(true);
    width <= 960 && setShowSideMenu(false);
  }, [width]);

  const changeMenu = (id: string) => {
    setMenuId(id);
  };
  const sideMenuToggle = (p: boolean) => {
    if (width <= 960) setShowSideMenu(p);
  };
  return (
    <El.Main onClick={() => width <= 960 && setShowSideMenu(false)}>
      <El.Section>
        <El.PageInfo>
          <El.IconWrapper
            onClick={(e) => {
              e.stopPropagation();
              setShowSideMenu(!showSideMenu);
            }}
            showSideMenu={showSideMenu}
          >
            {IconsControl("chevron-back-outline")}
          </El.IconWrapper>
          <El.TextInfo>
            <h1 className="navigation">U / Account /&nbsp;</h1>
            <h1 className="state">
              {`${accountMenu.find((val) => val.id === menuId)?.name}`}
            </h1>
          </El.TextInfo>
        </El.PageInfo>
        <El.Content>
          <SideMenu
            changeMenu={changeMenu}
            menuId={menuId}
            showSideMenu={showSideMenu}
            sideMenuToggle={sideMenuToggle}
          />
          <ContentState menuId={menuId} />
        </El.Content>
      </El.Section>
    </El.Main>
  );
};
export default Account;
