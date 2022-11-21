import { useContext, useEffect } from "react";
import Table from "../../../../otherComps/Table";
import * as El from "./ListElement";
import { columns } from "./columns";
import { useGQLUsersAL } from "../useGQLUser";

const AllUsers = () => {
  const { data, loading } = useGQLUsersAL();

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={data} isLoading={loading} />
    </El.Container>
  );
};

export default AllUsers;
