import { useState } from "react";
import * as El from "./SideMenuElement";

const Sidebar = ({ navState, setNavState, showSideMenu }) => {
  const sidebar = ["Data", "Gambar"];
  return (
    <El.SideMenu active={showSideMenu}>
      <El.Menu>
        {sidebar.map((val, i) => (
          <El.Item
            key={val}
            onClick={() => setNavState(i)}
            active={navState === i}
          >
            {val}
          </El.Item>
        ))}
      </El.Menu>
    </El.SideMenu>
  );
};

export default Sidebar;
