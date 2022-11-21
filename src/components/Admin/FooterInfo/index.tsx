import { useState } from "react";
import ButtonBase from "../../otherComps/Buttons/ButtonBase";
import * as El from "./FooterInfoElement";
import FormPhone from "./FormPhone";
import FormAddress from "./FormAddress";
import FormMessage from "./FormMessage";
import SocialMedia from "./SocialMedia";

const FooterInfo = () => {
  const navItem = ["Create", "Users list"];
  const [navState, setNavState] = useState(1);
  const changeNavState = (value) => {
    setNavState(value);
  };

  return (
    <El.Main>
      <El.Section>
        <El.Title>Nomor Telepon</El.Title>
        <FormPhone />
      </El.Section>
      <El.Section>
        <El.Title>Alamat</El.Title>
        <FormAddress />
      </El.Section>
      <El.Section>
        <El.Title>Tulisan bawah</El.Title>
        <FormMessage />
      </El.Section>
      <El.Section>
        <El.Title>Sosial Media</El.Title>
        <SocialMedia />
      </El.Section>
    </El.Main>
  );
};
export default FooterInfo;
