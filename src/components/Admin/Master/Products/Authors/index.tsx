import { useState } from "react";
import ButtonBase from "../../../../otherComps/Buttons/ButtonBase";
import Add from "./Create";
import List from "./List";
import * as El from "./AuthorsElement";

const Authors = () => {
  const navItem = ["Tambah", "Daftar Kepengarangan"];
  const [navState, setNavState] = useState(1);

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.Navigation>
        {navItem.map((item, index) => (
          <ButtonBase
            name={item}
            key={item}
            type="button"
            active={navState === index}
            onClick={() => setNavState(index)}
          />
        ))}
      </El.Navigation>
      {navState === 0 && <Add />}
      {navState === 1 && <List />}
    </El.Container>
  );
};

export default Authors;
