import { FC, useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import UpdateData from "./Navigation/UpdateData";
import Button from "../../../../../otherComps/Buttons/Button";
import ChangeRole from "./Navigation/ChangeRole";
import { useGQLUserDetail } from "../../useGQLUser";
import Wishlist from "./Navigation/Wishlist";
import Shoppingcart from "./Navigation/Shoppingcart";
import Orders from "./Navigation/Orders";
import AddressList from "./Navigation/AddressList";
type TNavigation = {
  userId: string;
};
const NavigationMenu: FC<TNavigation> = ({ userId }) => {
  const { adminNav, dispatch } = useContext(AdminNavCtx);
  const { data, error, loading } = useGQLUserDetail({ userId });

  useEffect(() => {
    if (
      data?.role === "ADMIN" &&
      adminNav.userDetailNav !== "CHANGE_DATA" &&
      adminNav.userDetailNav !== "CHANGE_ROLE"
    ) {
      dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "CHANGE_DATA" });
    }
  }, [data]);
  return (
    <Main>
      <div className="button-wrapper">
        <ButtonNav
          type="button"
          disabled={loading}
          active={adminNav.userDetailNav === "CHANGE_DATA"}
          onClick={() =>
            dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "CHANGE_DATA" })
          }
        >
          Ubah Data
        </ButtonNav>
        <ButtonNav
          type="button"
          disabled={loading}
          active={adminNav.userDetailNav === "CHANGE_ROLE"}
          onClick={() =>
            dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "CHANGE_ROLE" })
          }
        >
          Ubah Role
        </ButtonNav>
        <ButtonNav
          type="button"
          disabled={loading || data.role === "ADMIN"}
          active={adminNav.userDetailNav === "WISHLIST"}
          onClick={() =>
            dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "WISHLIST" })
          }
        >
          Wishlist
        </ButtonNav>
        <ButtonNav
          type="button"
          disabled={loading || data.role === "ADMIN"}
          active={adminNav.userDetailNav === "SHOPPINGCART"}
          onClick={() =>
            dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "SHOPPINGCART" })
          }
        >
          Keranjang
        </ButtonNav>
        <ButtonNav
          type="button"
          disabled={loading || data.role === "ADMIN"}
          active={adminNav.userDetailNav === "ORDER"}
          onClick={() =>
            dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "ORDER" })
          }
        >
          Pesanan
        </ButtonNav>
        <ButtonNav
          type="button"
          disabled={loading || data.role === "ADMIN"}
          active={adminNav.userDetailNav === "RECIPIENT"}
          onClick={() =>
            dispatch({ type: "CHANGE_USER_DETAIL_NAV", value: "RECIPIENT" })
          }
        >
          Daftar Alamat
        </ButtonNav>
        <Button
          type="button"
          name="Hapus"
          disabled={loading}
          color="danger"
          onClick={() =>
            dispatch({
              type: "SHOW_POPUP",
              value: { name: "USER_DELETE", userId },
            })
          }
        />
      </div>
      <div className="content-workspace">
        {adminNav.userDetailNav === "CHANGE_DATA" && (
          <UpdateData userId={userId} />
        )}
        {adminNav.userDetailNav === "CHANGE_ROLE" && (
          <ChangeRole userId={userId} />
        )}
        {adminNav.userDetailNav === "WISHLIST" && <Wishlist userId={userId} />}
        {adminNav.userDetailNav === "SHOPPINGCART" && (
          <Shoppingcart userId={userId} />
        )}
        {adminNav.userDetailNav === "RECIPIENT" && (
          <AddressList userId={userId} />
        )}
        {adminNav.userDetailNav === "ORDER" && <Orders userId={userId} />}
      </div>
    </Main>
  );
};

export default NavigationMenu;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  .button-wrapper {
    gap: 8px;
    display: flex;
    width: 100%;
    max-width: 100%;
    padding-bottom: 10px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollbar.v1.thumb};
      border-radius: ${({ theme }) => theme.input.borderRadius};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
    }
    > button :nth-child(7) {
      font-size: 14px;
      padding: 5px 10px;
      min-height: 16px;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 12px;
      }
    }
  }
  .content-workspace {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.border[2]};
  }
`;
type TButtonNav = {
  active?: boolean;
};
const ButtonNav = styled.button<TButtonNav>`
  font-family: "Poppins", sans-serif;
  display: flex;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 500;
  min-height: 16px;
  min-width: max-content;
  width: max-content;
  font-size: 14px;
  padding: 5px 10px;
  min-height: 16px;
  padding: 6px 16px;
  border: 1px solid transparent;
  outline: none;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.button.section.background};
  color: ${({ theme }) => theme.button.section.color};

  :hover {
    background: ${({ theme }) => theme.button.hover.section.background};
    color: ${({ theme }) => theme.button.hover.section.color};
  }
  :disabled {
    background: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.color};
    cursor: default;
    :hover {
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
    }
  }
  :focus {
    background: ${({ theme }) => theme.button.focus.background};
    color: ${({ theme }) => theme.button.focus.color};
  }
  ::after {
    content: "";
    position: absolute;
    height: 0;
    aspect-ratio: 1/1;
    left: 0.5rem;
    border-radius: 100%;
    background: ${({ theme }) => theme.button.focus.primary.border};
    transition: 0.4s all ease;
  }
  ${({ active }) =>
    active &&
    css`
      padding-left: 24px;
      ::after {
        height: 10px;
      }
      color: ${({ theme }) => theme.button.hover.section.color};
      border: 1px solid ${({ theme }) => theme.button.focus.section.border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 12px;
    min-height: 16px;
    padding: 0.2rem 0.5rem;
    ${({ active }) =>
      active &&
      css`
        padding-left: 1.5rem;
      `}
  }
  transition: 0.4s all ease;
`;
