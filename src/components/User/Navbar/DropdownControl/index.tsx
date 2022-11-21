import Notification from "./Notification";
import Services from "./Services";
import ShoppingCart from "./ShoppingCart";

const DropdownControl = ({ name }) => {
  switch (name) {
    case "SERVICES":
      return <Services />;
    case "CART":
      return <ShoppingCart />;
    case "NOTIF":
      return <Notification />;
    default:
      return null;
      break;
  }
};

export default DropdownControl;
