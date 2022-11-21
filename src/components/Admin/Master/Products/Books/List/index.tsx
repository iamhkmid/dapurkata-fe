import Table from "../../../../../otherComps/Table";
import * as El from "./ListELement";
import { columns } from "./columns";
import { useGQLGetBooks } from "../useGQLBook";

const List = () => {
  const { dataGBooks, errorGBooks, loadGBooks } = useGQLGetBooks();

  return (
    <El.Container>
      <Table columns={columns} data={dataGBooks} isLoading={loadGBooks} />
    </El.Container>
  );
};

export default List;
