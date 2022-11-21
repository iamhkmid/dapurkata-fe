import { ThemeContext } from "../../../../contexts/ThemeCtx";
import { useContext } from "react";
import * as El from "./SidebarElement";
import { adminSidebar } from "../../../../data/adminSidebar";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import Menu from "./Menu";
import Image from "next/image";
import sidebar_dark from "../../../../img/sidebar_dark.svg";
import sidebar_light from "../../../../img/sidebar_light.svg";

const Admin = () => {
  const { adminNav } = useContext(AdminNavCtx);
  const { theme } = useContext(ThemeContext);

  return (
    <El.Main themeState={theme} isOpen={adminNav.sidebar}>
      <El.Sidebar>
        {adminSidebar.map((group) => (
          <El.ItemGroup key={group.name}>
            <El.GroupName>{group.name}</El.GroupName>
            <Menu group={group.menu} />
          </El.ItemGroup>
        ))}
      </El.Sidebar>
    </El.Main>
  );
};

export default Admin;
