import { useContext, useEffect } from "react";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import * as El from "./ServicesElement";

const Services = () => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const servicesMenu = [
    { name: "Spesifikasi Naskah", link: "/#section2-1" },
    { name: "Paket Kreator", link: "/#section2-2" },
    { name: "Layanan Lainnya", link: "/#section2-3" },
  ];
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <El.Ul onClick={() => dispatch({ type: "CLOSE_MENU" })}>
        {servicesMenu.map((val) => (
          <El.Li key={val.link}>
            <El.NLink href={val.link}>
              <El.Anchor>{val.name}</El.Anchor>
            </El.NLink>
          </El.Li>
        ))}
      </El.Ul>
    </El.Main>
  );
};

export default Services;
