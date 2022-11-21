import { useRouter } from "next/router";
import IconsControl from "../../../../IconsControl";
import * as El from "./MenuElement";
import SubMenu from "../SubMenu";
import { TMenu } from "../../../../../types/sidebar";
type props = {
  group: TMenu;
};
const Menu = ({ group }: props) => {
  const { push, pathname } = useRouter();
  return (
    <El.Main>
      {group.map((menu) => {
        const Links: string[] =
          menu.subMenu.length > 0
            ? menu.subMenu.map((submenu) => submenu.link)
            : null;
        const active = Links
          ? Links.includes(pathname)
          : pathname === menu.link;
        return (
          <div key={menu.name}>
            <El.Item active={active} onClick={() => push(menu.link)}>
              <El.IconWrapper>{IconsControl(menu.name)}</El.IconWrapper>
              {menu.name}
              {menu.subMenu.length > 0 && (
                <El.DropdownIcon active={active}>
                  {IconsControl("chevron-forward-outline")}
                </El.DropdownIcon>
              )}
            </El.Item>
            {menu.subMenu.length > 0 && <SubMenu subMenu={menu.subMenu} />}
          </div>
        );
      })}
    </El.Main>
  );
};

export default Menu;
