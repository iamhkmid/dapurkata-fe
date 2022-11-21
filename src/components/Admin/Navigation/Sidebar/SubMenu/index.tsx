import IconsControl from "../../../../IconsControl";
import { useRouter } from "next/router";
import * as El from "./SubMenuElement";
import { TSubMenu } from "../../../../../types/sidebar";
type props = {
  subMenu: TSubMenu;
};
const SubMenu = ({ subMenu }: props) => {
  const { pathname, push } = useRouter();
  const links: string[] = subMenu.map((item) => item.link);

  return (
    <El.Main active={links.includes(pathname)}>
      {subMenu.map((item, index) => {
        return (
          <El.Item
            key={item.name}
            active={item.link === pathname}
            onClick={() => push(item.link)}
          >
            {item.name}
          </El.Item>
        );
      })}
    </El.Main>
  );
};

export default SubMenu;
