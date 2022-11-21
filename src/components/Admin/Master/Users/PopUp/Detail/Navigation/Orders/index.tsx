import { FC, useContext, useEffect } from "react";
import * as El from "./OrdersElement";
import { columns } from "./columns";
import { useGQLOrderListsUsers } from "../../../../../../Transactions/Orders/useGQLOrders";
import Table from "../../../../../../../otherComps/Table";
import { useGQLOrderListsUser } from "../../../../useGQLUser";

type TProps = {
  userId: string;
};
const Orders: FC<TProps> = ({ userId }) => {
  const { data, loading } = useGQLOrderListsUser({ userId });

  return (
    <El.Main>
      <Table columns={columns} data={data} isLoading={loading} />
    </El.Main>
  );
};

export default Orders;
