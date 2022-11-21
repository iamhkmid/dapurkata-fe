import * as El from "./MobileShowCartElement";
import CartList from "../../../../Cart/CartList";

const MobileShowCart = () => {
  return (
    <El.Main
      initial={{ y: "-55vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ type: "tween", delay: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <CartList />
    </El.Main>
  );
};

export default MobileShowCart;
