import { useContext, useEffect, useRef } from "react";
import { useWindowScroll, useWindowSize } from "react-use";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import * as El from "./HomepageElement";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Homepage = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { y } = useWindowScroll();

  const secRefs = [1, 2, 2, 2].map((val) => ({
    ref: useRef<HTMLDivElement>(),
    section: val,
  }));

  useEffect(() => {
    if (process.browser) {
      secRefs.forEach((val, index) => {
        if (
          y + 64 > val.ref.current.offsetTop &&
          y + 64 < val.ref.current.offsetTop + val.ref.current.offsetHeight
        ) {
          if (userNav.selectedNavMenu !== `/#section${val.section}`)
            dispatch({
              type: "CHANGE_NAV_MENU",
              menu: `/#section${val.section}`,
            });
        }
      });
    }
  }, [y]);

  return (
    <El.Main currTheme={theme}>
      <El.Section ref={secRefs[0].ref}>
        <div id="section1" className="scroll-point" />
        <Section1 />
      </El.Section>
      <El.Section ref={secRefs[1].ref}>
        <div id="section2-1" className="scroll-point" />
        <Section2 />
      </El.Section>
      <El.Section ref={secRefs[2].ref}>
        <div id="section2-2" className="scroll-point" />
        <Section3 />
      </El.Section>
      <El.Section ref={secRefs[3].ref}>
        <div id="section2-3" className="scroll-point" />
        <Section4 />
      </El.Section>
    </El.Main>
  );
};

export default Homepage;
