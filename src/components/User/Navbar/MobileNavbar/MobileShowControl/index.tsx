import MobileShowCart from "./MobileShowCart";
import MobileShowMenu from "./MobileShowMenu";

const MobileShowControl = ({ name }) => {
  switch (name) {
    case "MENU":
      return <MobileShowMenu />;
    case "CART":
      return <MobileShowCart />;
    default:
      return null;
      break;
  }
};

export default MobileShowControl;
