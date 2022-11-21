import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { signinBtn } from "../../../../data/navbar";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ThemeContext } from "../../../../contexts/ThemeCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import IconsControl from "../../../IconsControl";
import UserLoading from "../../../otherComps/Loading/EllipsisLoading";
import * as El from "./MenuButtonElement";
import Dropdown from "../DropdownControl/Account";
import Loading2 from "../../../otherComps/Loading/Loading2";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { TUserMenu } from "../../../../types/context";
import DropdownControl from "../DropdownControl";
import ThemeToggle from "../../../otherComps/Buttons/ThemeToggle";
import { NotificationCtx } from "../../../../contexts/NotificationCtx";

const MenuButton = () => {
  const { user, loading } = useContext(AuthContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { pathname, asPath } = useRouter();
  const { notification, newNotif, setNewNotif } = useContext(NotificationCtx);

  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    const total = shoppingCart.data.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalItems(total);
  }, [shoppingCart]);
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 40,
  };
  return (
    <El.Main>
      {loading && <Loading2 />}
      {user && user.role === "USER" && (
        <El.IconGroup onClick={(e) => e.stopPropagation()}>
          <El.IconButton
            key={"CART"}
            active={userNav.menu === "CART"}
            onClick={() => dispatch({ type: "SHOW_MENU", value: "CART" })}
          >
            {IconsControl("CART")}
            {totalItems > 0 && <El.AmountNum>{totalItems}</El.AmountNum>}
            <AnimatePresence>
              {userNav.menu === "CART" && <DropdownControl name={"CART"} />}
            </AnimatePresence>
          </El.IconButton>
          <El.IconButton
            key={"NOTIF"}
            active={userNav.menu === "NOTIF"}
            onClick={() => {
              dispatch({ type: "SHOW_MENU", value: "NOTIF" });
              setNewNotif(false);
            }}
          >
            {IconsControl("NOTIF")}
            {newNotif && <El.NotifIcon />}
            <AnimatePresence>
              {userNav.menu === "NOTIF" && <DropdownControl name={"NOTIF"} />}
            </AnimatePresence>
          </El.IconButton>
        </El.IconGroup>
      )}
      <ThemeToggle />
      {!user && !loading && (
        <El.NLink href={signinBtn.link[0]}>
          <El.Anchor
            active={signinBtn.link.includes(pathname)}
            onMouseEnter={() =>
              dispatch({ type: "CHANGE_NAV_MENU", menu: "/auth/login" })
            }
            onMouseLeave={() => {
              dispatch({ type: "CHANGE_NAV_MENU", menu: asPath });
            }}
          >
            {signinBtn.link.includes(userNav.selectedNavMenu) && (
              <El.ActiveLine
                className="active-line"
                layoutId="menu_bg"
                initial={false}
                transition={spring}
              />
            )}
            <El.MenuIconWrapper>{IconsControl("Signin")}</El.MenuIconWrapper>
            {signinBtn.name}
          </El.Anchor>
        </El.NLink>
      )}
      {user && !loading && (
        <El.AuthMenuContainer onClick={(e) => e.stopPropagation()}>
          <El.AccountBtn
            onClick={() => dispatch({ type: "SHOW_MENU", value: "MENU" })}
            active={userNav.menu === "MENU"}
          >
            <El.PhotoWrapper className="profile">
              <ImageResponsive
                src={user?.userPicture}
                alt="Profile Pic"
                height={40}
                width={40}
                defaultIcon="person"
                quality={75}
              />
            </El.PhotoWrapper>
            <El.MenuIconWrapper>
              {IconsControl("chevron-down-outline")}
            </El.MenuIconWrapper>
            <AnimatePresence>
              {userNav.menu === "MENU" && <Dropdown />}
            </AnimatePresence>
          </El.AccountBtn>
        </El.AuthMenuContainer>
      )}
    </El.Main>
  );
};

export default MenuButton;
