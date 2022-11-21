import { FC, useContext, useEffect, useState } from "react";
import * as El from "./NavbarElement";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import MenuList from "./MenuList";
import { AnimatePresence } from "framer-motion";
import MobileMenuBtn from "./MobileNavbar/MobileMenuBtn";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import MobileShowControl from "./MobileNavbar/MobileShowControl";
import { useRef } from "react";
import GlobalMessageUser from "../../otherComps/GlobalMessage/GlobalMessageUser";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthMenu from "./MenuButton";
import { useWindowScroll, useWindowSize } from "react-use";
import IconsControl from "../../IconsControl";
import { AnimateSharedLayout } from "framer-motion";
import Footer from "../Footer";

const Navbar: FC = ({ children }) => {
  const { pathname } = useRouter();
  const { theme } = useContext(ThemeContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const mainRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const { width } = useWindowSize();
  const { y } = useWindowScroll();

  useEffect(() => {
    if (process.browser) {
      if (pathname !== "/") {
        setShowColor(true);
      } else if (y > 64) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }

      if (pathname !== "/" || width < 960) {
        setShowLogo(true);
      } else if (y >= 64) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
      // if (
      //   scroll < mainRef.current.scrollTop &&
      //   mainRef.current.offsetHeight + mainRef.current.scrollTop >=
      //     mainRef.current.offsetHeight + 64
      // ) {
      //   setShowNav(false);
      // } else {
      //   setShowNav(true);
      // }
      // setScroll(mainRef.current.scrollTop);
    }
  }, [y, pathname, width]);

  return (
    <El.Main onClick={() => dispatch({ type: "CLOSE_MENU" })} ref={mainRef}>
      <El.Nav showNav={showNav}>
        <El.NavbarContainer showColor={showColor}>
          <El.LogoLink>
            <Link href="/#section1">
              <a>
                <El.Logo>{IconsControl("navbar_logo")}</El.Logo>
                <El.LogoText showLogo={showLogo}>
                  <h1>Penerbit</h1>
                  <h1>Dapurkata</h1>
                </El.LogoText>
              </a>
            </Link>
          </El.LogoLink>

          <El.MenuWrapper>
            <AnimateSharedLayout>
              <MenuList />
              <AuthMenu />
            </AnimateSharedLayout>
          </El.MenuWrapper>
          <MobileMenuBtn />
        </El.NavbarContainer>
        {!userNav.popup.name && <GlobalMessageUser />}
        <AnimatePresence>
          {userNav.menu && (
            <El.MobileWrapper>
              <MobileShowControl name={userNav.menu} />
            </El.MobileWrapper>
          )}
        </AnimatePresence>
      </El.Nav>
      {children}
      <Footer />
    </El.Main>
  );
};

export default Navbar;
