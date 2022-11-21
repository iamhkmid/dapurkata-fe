import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { navbarMenu } from "../../../../../../data/navbar";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import { useLogOut } from "../../../../../../hooks/useGQLAuth";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import IconsControl from "../../../../../IconsControl";
import DropdownControl from "./DropdownControl";
import * as El from "./MobileShowMenuElement";
import ImageResponsive from "../../../../../otherComps/ImageResponsive";

const MobileShowMenu = () => {
  const { pathname } = useRouter();
  const { userNav, dispatch } = useContext(UserNavCtx);
  const [showDropdown, setShowDropdown] = useState<string>(null);
  const { logOut } = useLogOut();
  const { user } = useContext(AuthContext);
  const defUserPic = `/uploads/profile/default/defProfilePic.svg`;
  const [userPic, setUserPic] = useState(defUserPic);
  const defaultImgSrc = () => {
    setUserPic(defUserPic);
  };
  useEffect(() => {
    if (user?.userPicture) {
      if (user.userPicture) setUserPic(user.userPicture);
    }
  }, [user]);
  return (
    <El.Main
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ type: "tween", delay: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <El.AuthMenu>
        {user && (
          <El.Account>
            <div>
              <El.PhotoWrapper>
                <ImageResponsive
                  src={user?.userPicture}
                  alt="Profile Pic"
                  height={70}
                  width={70}
                  defaultIcon="person"
                  quality={75}
                />
              </El.PhotoWrapper>
              <El.UserInfo>
                <El.FullName>{`${user.firstName} ${
                  user.lastName || ""
                }`}</El.FullName>
                <El.Email>{user.email}</El.Email>
              </El.UserInfo>
            </div>
            <div>
              <El.NLink href="/u/account?menu=my-account">
                <El.Anchor onClick={() => dispatch({ type: "CLOSE_MENU" })}>
                  Akun Saya
                </El.Anchor>
              </El.NLink>
              <El.Anchor
                onClick={async () => {
                  dispatch({ type: "CLOSE_MENU" });
                  dispatch({ type: "SHOW_POPUP", value: { name: "WISHLIST" } });
                }}
              >
                Wishlist
              </El.Anchor>
              <El.Anchor
                onClick={() => {
                  dispatch({ type: "CLOSE_MENU" });
                  logOut();
                }}
              >
                Keluar
              </El.Anchor>
            </div>
          </El.Account>
        )}
        {!user && (
          <El.NoAccount>
            <El.NLink href="/auth/login">
              <El.Anchor
                onClick={() => {
                  dispatch({ type: "CLOSE_MENU" });
                }}
              >
                Masuk
              </El.Anchor>
            </El.NLink>
          </El.NoAccount>
        )}
      </El.AuthMenu>
      <El.Ul>
        {navbarMenu.map((value) => (
          <El.Li key={value.name}>
            {value.type === "link" && (
              <El.NLink href={value.link}>
                <El.Anchor
                  active={value.link.includes(userNav.selectedNavMenu)}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  {value.name}
                </El.Anchor>
              </El.NLink>
            )}
            {value.type === "dropdown" && (
              <El.DropdownBtn
                active={value.link.includes(userNav.selectedNavMenu)}
                onClick={() => setShowDropdown(!showDropdown ? value.id : null)}
              >
                {value.name}
                <El.IconWrapper
                  active={showDropdown && showDropdown === value.id}
                >
                  {IconsControl("chevron-forward-outline")}
                </El.IconWrapper>
              </El.DropdownBtn>
            )}
            <DropdownControl
              name={value.id}
              active={showDropdown === value.id}
            />
          </El.Li>
        ))}
      </El.Ul>
    </El.Main>
  );
};

export default MobileShowMenu;
