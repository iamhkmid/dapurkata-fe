import * as El from "./ShoppingCartElement";
import CartList from "../../../Cart/CartList";

const ShoppingCart = () => {
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <CartList />
    </El.Main>
  );
};

export default ShoppingCart;
