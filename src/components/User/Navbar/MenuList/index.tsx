import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { navbarMenu } from "../../../../data/navbar";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import ThemeToggle from "../../../otherComps/Buttons/ThemeToggle";
import IconsControl from "../../../IconsControl";
import AuthMenu from "../MenuButton";
import DropdownControl from "../DropdownControl";
import * as El from "./MenuLIstElement";
import { TUserMenu } from "../../../../types/context";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

const MenuList = () => {
  const { asPath, pathname } = useRouter();
  const router = useRouter();
  const { userNav, dispatch } = useContext(UserNavCtx);
  useEffect(() => {
    if (asPath) {
      dispatch({ type: "CHANGE_NAV_MENU", menu: asPath });
    }
  }, [asPath]);
  return (
    <El.Main>
      <El.Ul>
        {navbarMenu.map((value) => (
          <El.Li
            key={value.name}
            onMouseEnter={() =>
              dispatch({ type: "CHANGE_NAV_MENU", menu: value.link })
            }
            onMouseLeave={() => {
              dispatch({
                type: "CHANGE_NAV_MENU",
                menu: asPath === "/" ? "/#section1" : asPath,
              });
            }}
          >
            {value.link.includes(userNav?.selectedNavMenu) && (
              <El.ActiveLine
                className="active-line"
                layoutId="menu_bg"
                initial={false}
                transition={spring}
              />
            )}
            {value.type === "link" && (
              <El.NLink href={value.link}>
                <El.Anchor
                  active={value.link.includes(userNav?.selectedNavMenu)}
                >
                  {value.name}
                </El.Anchor>
              </El.NLink>
            )}
            {value.type === "dropdown" && (
              <El.DropdownBtn
                active={value.link.includes(userNav?.selectedNavMenu)}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({
                    type: "SHOW_MENU",
                    value: "SERVICES" as TUserMenu,
                  });
                }}
                onMouseEnter={() =>
                  dispatch({
                    type: "SHOW_MENU",
                    value: "SERVICES" as TUserMenu,
                  })
                }
                onMouseLeave={() => {
                  dispatch({ type: "CLOSE_MENU" });
                  dispatch({
                    type: "CHANGE_NAV_MENU",
                    menu: asPath === "/" ? "/#section1" : asPath,
                  });
                }}
              >
                <El.DropdownName>{value.name}</El.DropdownName>
                <El.IconWrapper>
                  {IconsControl("chevron-down-outline")}
                </El.IconWrapper>
                <AnimatePresence>
                  {userNav.menu === value.id && (
                    <DropdownControl name={value.id} />
                  )}
                </AnimatePresence>
              </El.DropdownBtn>
            )}
          </El.Li>
        ))}
      </El.Ul>
    </El.Main>
  );
};

export default MenuList;
