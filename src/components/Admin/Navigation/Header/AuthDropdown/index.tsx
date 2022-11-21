import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { useLogOut } from "../../../../../hooks/useGQLAuth";
import ImageResponsive from "../../../../otherComps/ImageResponsive";
import * as El from "./AuthDropdownElement";

const AuthDropdown = ({ setIsShowed }) => {
  const { logOut } = useLogOut();
  const { user } = useContext(AuthContext);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <El.UserInfo>
        <El.PhotoWrapper>
          <ImageResponsive
            src={user?.userPicture}
            alt="Profil Pic"
            width={32}
            height={32}
            quality={75}
          />
        </El.PhotoWrapper>
        <El.Info>
          <El.FullName>{`${user.firstName} ${
            user.lastName || ""
          }`}</El.FullName>
          <El.Email>{user.email}</El.Email>
        </El.Info>
      </El.UserInfo>
      <El.Ul onClick={() => setIsShowed(false)}>
        <El.Li>
          <El.Item>My Profile</El.Item>
        </El.Li>
        <El.Li>
          <El.NLink href="/">
            <El.Anchor>Homepage</El.Anchor>
          </El.NLink>
        </El.Li>
        <El.Li onClick={async () => await logOut()}>
          <El.Item>Sign out</El.Item>
        </El.Li>
      </El.Ul>
    </El.Main>
  );
};

export default AuthDropdown;
