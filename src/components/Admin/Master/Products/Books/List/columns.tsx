import Moment from "moment";
import { useContext } from "react";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";

import RowBtn from "../../../../../otherComps/Buttons/RowBtn";
import * as El from "./columnsElement";
export const columns = [
  {
    Header: "id",
    accessor: "id",
    hidden: true,
  },
  {
    Header: "No",
    className: "number",
    Cell: (row) => {
      return <El.NumberColumn>{1 + parseInt(row.cell.row.id)}</El.NumberColumn>;
    },
  },
  {
    Header: "Judul",
    accessor: "title",
    Cell: (d) => <El.Title>{d.value}</El.Title>,
  },
  { Header: "Harga", accessor: "price" },
  { Header: "Stok", accessor: "stock" },
  {
    Header: "ISBN",
    accessor: "isbn",
  },
  {
    Header: "Pengarang",
    accessor: "Author",
    Cell: (d) => d.value.name,
  },

  {
    Header: "Action",
    className: "actions",
    Cell: (d) => {
      const { dispatch } = useContext(AdminNavCtx);
      return (
        <El.ActionColumn>
          <RowBtn
            type="detail"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "BOOK_DETAIL", bookId: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="edit"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "BOOK_UPDATE", bookId: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="delete"
            onClick={() => {
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "BOOK_DELETE", bookId: d.row.values.id },
              });
            }}
          />
        </El.ActionColumn>
      );
    },
  },
];
