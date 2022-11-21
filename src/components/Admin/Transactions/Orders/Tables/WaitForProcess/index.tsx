import { useContext, useEffect } from "react";
import * as El from "./ListElement";
import { columns } from "./columns";
import { useGQLOrderListsUsers } from "../../useGQLOrders";
import Table from "../../../../../otherComps/Table";

const WaitForProcess = () => {
  const { data, loading } = useGQLOrderListsUsers();

  return (
    <El.Main>
      <h1 className="title">BELUM DIKIRIM</h1>
      <Table
        columns={columns}
        data={data.filter(
          (val) =>
            val.transactionStatus === "settlement" &&
            val.shippingStatus !== "inShipping"
        )}
        isLoading={loading}
      />
    </El.Main>
  );
};

export default WaitForProcess;
