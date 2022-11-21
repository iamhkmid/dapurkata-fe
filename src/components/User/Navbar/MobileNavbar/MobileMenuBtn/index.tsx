import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import ThemeToggle from "../../../../otherComps/Buttons/ThemeToggle";
import IconsControl from "../../../../IconsControl";
import * as El from "./MobileMenuBtnElement";
import { TUserMenu } from "../../../../../types/context";
import { ShoppingCartCtx } from "../../../../../contexts/ShoppingCartCtx";
import Loading2 from "../../../../otherComps/Loading/Loading2";

const MobileMenuBtn = () => {
  const { user, loading } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [totalItems, setTotalItems] = useState(0);
  const { userNav, dispatch } = useContext(UserNavCtx);
  useEffect(() => {
    const total = shoppingCart.data.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalItems(total);
  }, [shoppingCart]);
  return (
    <El.Main onClick={(e) => e.stopPropagation()}>
      {loading && <Loading2 />}
      {user &&
        user.role === "USER" &&
        ["CART", "MAIL"].map((value) => (
          <El.IconButton
            key={value}
            active={userNav.menu === value || false}
            onClick={() =>
              dispatch({ type: "SHOW_MENU", value: value as TUserMenu })
            }
          >
            {IconsControl(value)}
            {value === "CART" && totalItems > 0 && (
              <El.AmountNum>{totalItems}</El.AmountNum>
            )}
          </El.IconButton>
        ))}
      <ThemeToggle />
      <El.MobileIcon
        active={userNav.menu === "MENU"}
        onClick={() => {
          dispatch({ type: "SHOW_MENU", value: "MENU" });
        }}
      >
        {IconsControl("Menu")}
      </El.MobileIcon>
    </El.Main>
  );
};

export default MobileMenuBtn;
