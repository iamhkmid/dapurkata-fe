import Moment from "moment";
import { useContext } from "react";
import { AdminNavCtx } from "../../../../../contexts/AdminNavCtx";
import Button from "../../../../otherComps/Buttons/Button";
import RowBtn from "../../../../otherComps/Buttons/RowBtn";
import * as El from "./ListElement";
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
    Header: () => <El.DefaultColumn>Username</El.DefaultColumn>,
    accessor: "username",
  },
  {
    Header: "Nama",
    Cell: (d) => {
      return `${d.row.original.firstName} ${d.row.original.lastName || ""}`;
    },
  },
  {
    Header: () => <El.DefaultColumn>Role</El.DefaultColumn>,
    accessor: "role",
  },
  {
    Header: () => <El.DefaultColumn>Email</El.DefaultColumn>,
    accessor: "email",
  },
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
        <El.ActionColumn>
          <Button
            type="button"
            name="DETAIL"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "USER_DETAIL", userId: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="delete"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "USER_DELETE", userId: d.row.values.id },
              })
            }
          />
        </El.ActionColumn>
      );
    },
  },
];
