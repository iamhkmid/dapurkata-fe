import { useContext } from "react";
import Table from "../../../../../otherComps/Table";
import * as El from "./ListELement";
import { columns } from "./columns";
import { useGQLAuthors } from "../useGQLAuthor";

const List = () => {
  const { data, error, loading } = useGQLAuthors();

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={data} isLoading={loading} />
    </El.Container>
  );
};

export default List;
