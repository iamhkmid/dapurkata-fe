import * as El from "./DetailELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import moment from "moment";
import "moment/locale/id";
import { useGQLPublisher } from "../../useGQLPublisher";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";

const Detail = ({ id }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { data, error, loading } = useGQLPublisher({ publisherId: id });
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Detail" />
      <El.Body>
        {data && (
          <El.Table>
            <tbody>
              <tr>
                <td>id</td>
                <td>{data.id}</td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Update At</td>
                <td>
                  {moment(data.createdAt)
                    .locale("id")
                    .format("dddd, DD MMMM YYYY | HH:mm")}
                </td>
              </tr>
              <tr>
                <td>Create At</td>
                <td>
                  {moment(data.updatedAt)
                    .locale("id")
                    .format("dddd, DD MMMM YYYY | HH:mm")}
                </td>
              </tr>
            </tbody>
          </El.Table>
        )}
      </El.Body>
    </El.Main>
  );
};

export default Detail;
