import { useContext, useState } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import FormData from "./FormData";
import SideMenu from "./SideMenu";
import * as El from "./UpdateElement";

const Update = ({ id }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const [navState, setNavState] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(true);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin
        title="Ubah data"
        withSideMenu={{ showSideMenu, setShowSideMenu }}
        themeToggle={true}
      />
      <El.Body>
        <SideMenu
          navState={navState}
          setNavState={setNavState}
          showSideMenu={showSideMenu}
        />
        <El.Content showSideMenu={showSideMenu}>
          {navState === 0 && <FormData bookId={id} />}
        </El.Content>
      </El.Body>
    </El.Main>
  );
};

export default Update;
