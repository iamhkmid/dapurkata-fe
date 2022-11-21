import { useState } from "react";
import Button from "../../../../otherComps/Buttons/Button";
import ButtonBase from "../../../../otherComps/Buttons/ButtonBase";
import Create from "./Create";
import List from "./List";
import * as El from "./BooksElement";

const Books = () => {
  const navItem = ["Tambah", "Daftar Buku"];
  const [navState, setNavState] = useState(1);

  return (
    <El.Container>
      <El.Navigation>
        {navItem.map((item, index) => (
          <ButtonBase
            name={item}
            type="button"
            key={item}
            active={navState === index}
            onClick={() => setNavState(index)}
          />
        ))}
      </El.Navigation>
      {navState === 0 && <Create />}
      {navState === 1 && <List />}
    </El.Container>
  );
};

export default Books;
