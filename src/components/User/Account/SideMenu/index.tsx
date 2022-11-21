import { useRouter } from "next/router";
import { FC } from "react";
import { accountMenu } from "../../../../data/accountMenu";
import { useLogOut } from "../../../../hooks/useGQLAuth";
import * as El from "./SideMenuElement";

type TSideMenu = {
  changeMenu: (p: string) => void;
  menuId: string;
  showSideMenu: boolean;
  sideMenuToggle: (p: boolean) => void;
};
const SideMenu: FC<TSideMenu> = (props) => {
  const { changeMenu, menuId, showSideMenu, sideMenuToggle } = props;
  const { push } = useRouter();
  const { logOut } = useLogOut();

  return (
    <El.Main active={showSideMenu} onClick={(e) => e.stopPropagation()}>
      <El.Ul>
        {accountMenu.map((val) => (
          <El.Li
            key={val.id}
            isActive={val.id === menuId}
            onClick={() => {
              push({ pathname: "/u/account", query: { menu: val.id } });
              sideMenuToggle(false);
            }}
          >
            {val.name}
          </El.Li>
        ))}
        <El.Li className="logout" onClick={async () => await logOut()}>
          Keluar
        </El.Li>
      </El.Ul>
    </El.Main>
  );
};
export default SideMenu;
