import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { AuthContext } from "../../../../contexts/AuthCtx";
import ThemeToggle from "../../../otherComps/Buttons/ThemeToggle";
import IconsControl from "../../../IconsControl";
import AuthDropdown from "./AuthDropdown";
import * as El from "./HeaderElement";
import ImageResponsive from "../../../otherComps/ImageResponsive";

const Header = () => {
  const [isShowed, setIsShowed] = useState(false);
  const { adminNav, dispatch } = useContext(AdminNavCtx);
  const { user } = useContext(AuthContext);
  const HandleAccountBtn = () => {
    setIsShowed(!isShowed);
  };

  return (
    <El.Main>
      <El.Left>
        <El.Logo>
          <Image
            src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/icons/DP_Admin.svg`}
            alt="LOGO"
            layout="fixed"
            width={100}
            height={25}
            quality={65}
          />
        </El.Logo>
        <El.ButtonGroup>
          <El.IconWrapper
            active={adminNav.sidebar}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLER" })}
          >
            {IconsControl("chevron-back-outline")}
          </El.IconWrapper>
          <ThemeToggle />
        </El.ButtonGroup>
      </El.Left>
      <El.AccountBtn
        onClick={() => setIsShowed(!isShowed)}
        onBlur={() => setIsShowed(null)}
      >
        <AnimatePresence>
          {isShowed && <AuthDropdown setIsShowed={setIsShowed} />}
        </AnimatePresence>
        <El.ProfileName>{user?.firstName}</El.ProfileName>
        <El.PhotoWrapper className="profile">
          <ImageResponsive
            src={user?.userPicture}
            alt="Profil Pic"
            width={32}
            height={32}
            quality={75}
          />
        </El.PhotoWrapper>
        <El.MenuIconWrapper>
          {IconsControl("chevron-down-outline")}
        </El.MenuIconWrapper>
      </El.AccountBtn>
    </El.Main>
  );
};

export default Header;
