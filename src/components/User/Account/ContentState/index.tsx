import { AnimatePresence } from "framer-motion";
import AddressList from "./AddressList";
import * as El from "./ContentStateElement";
import MyAccount from "./MyAccount";
import Orders from "./Orders";
import Wishlist from "./Wishlist";

const ContentState = ({ menuId }) => {
  return (
    <El.Main>
      <El.Section>
        <AnimatePresence>
          {menuId === "my-account" && <MyAccount />}
          {menuId === "address-list" && <AddressList />}
          {menuId === "orders" && <Orders />}
          {menuId === "wishlist" && (
            <El.WishlistWrapper>
              <h1 className="title">Daftar Wishlist</h1>
              <div className="wishlist-wrapper">
                <Wishlist />
              </div>
            </El.WishlistWrapper>
          )}
        </AnimatePresence>
      </El.Section>
    </El.Main>
  );
};
export default ContentState;
