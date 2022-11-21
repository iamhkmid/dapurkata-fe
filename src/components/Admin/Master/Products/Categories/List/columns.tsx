import Moment from "moment";
import { useContext } from "react";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";

import RowBtn from "../../../../../otherComps/Buttons/RowBtn";
import {
  Container,
  ActionColumn,
  DefaultColumn,
  NumberColumn,
} from "./ListElement";
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
      return <NumberColumn>{1 + parseInt(row.cell.row.id)}</NumberColumn>;
    },
  },
  { Header: "Nama", accessor: "name" },
  { Header: "Kelompok", accessor: "group" },
  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: (d) => Moment(d.value).local().format("DD-MM-YYYY hh:mm a"),
    hidden: true,
  },
  {
    Header: "Updated At",
    accessor: "updatedAt",
    Cell: (d) => Moment(d.value).local().format("DD-MM-YYYY hh:mm a"),
    hidden: true,
  },
  {
    Header: "Action",
    className: "actions",
    Cell: (d) => {
      const { dispatch } = useContext(AdminNavCtx);
      return (
        <ActionColumn>
          <RowBtn
            type="detail"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "CATEGORY_DETAIL", categoryId: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="edit"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "CATEGORY_UPDATE", categoryId: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="delete"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "CATEGORY_DELETE", categoryId: d.row.values.id },
              })
            }
          />
        </ActionColumn>
      );
    },
  },
];
