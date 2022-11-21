import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { useLogOut } from "../../../../../hooks/useGQLAuth";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import * as El from "./AccountElement";
import ImageResponsive from "../../../../otherComps/ImageResponsive";

const Account = () => {
  const { logOut } = useLogOut();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);

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
            alt="Profile Pic"
            height={80}
            width={80}
            defaultIcon="person"
            quality={75}
          />
        </El.PhotoWrapper>
        <El.FullName>{`${user.firstName} ${user.lastName || ""}`}</El.FullName>
        <El.Email>{user.email}</El.Email>
      </El.UserInfo>
      <El.Ul onClick={() => dispatch({ type: "CLOSE_MENU" })}>
        <El.Li>
          <El.NLink href="/u/account?menu=my-account">
            <El.Anchor>Akun Saya</El.Anchor>
          </El.NLink>
        </El.Li>
        {user.role === "ADMIN" && (
          <El.Li>
            <El.NLink href="/admin">
              <El.Anchor>Admin Page</El.Anchor>
            </El.NLink>
          </El.Li>
        )}
        {user.role === "USER" && (
          <El.Li
            onClick={async () =>
              dispatch({ type: "SHOW_POPUP", value: { name: "WISHLIST" } })
            }
          >
            <El.Item>Wishlist</El.Item>
          </El.Li>
        )}
        <El.Li onClick={async () => await logOut()}>
          <El.Item>Keluar</El.Item>
        </El.Li>
      </El.Ul>
    </El.Main>
  );
};

export default Account;
