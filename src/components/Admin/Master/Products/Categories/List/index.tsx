import Table from "../../../../../otherComps/Table";
import * as El from "./ListElement";
import { columns } from "./columns";
import { useGQLCategories } from "../useGQLCategory";

const List = () => {
  const { data, loading, error } = useGQLCategories();
  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={data} isLoading={loading} />
    </El.Container>
  );
};

export default List;
