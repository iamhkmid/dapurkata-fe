import { FC } from "react";
import WaitForProcess from "./Tables/WaitForProcess";
import * as El from "./OrdersElement";
import AllOrders from "./Tables/AllOrders";

const Orders: FC = () => {
  return (
    <El.Main>
      <WaitForProcess />
      <AllOrders />
    </El.Main>
  );
};

export default Orders;
