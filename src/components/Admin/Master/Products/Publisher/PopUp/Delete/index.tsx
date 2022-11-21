import * as El from "./DeleteELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLPublisher, useGQLDeletePublisher } from "../../useGQLPublisher";
import ShowMessage from "../../../../../../otherComps/ShowMessage";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
const Delete = ({ id }) => {
  const { deletePublisher, error, loading } = useGQLDeletePublisher();
  const {
    data: dataInit,
    error: errorInit,
    loading: loadingInit,
  } = useGQLPublisher({ publisherId: id });
  const { dispatch } = useContext(AdminNavCtx);
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Hapus" />
      <El.Body>
        <ShowMessage message={error?.message} color="danger" />
        <El.Content>
          <El.Text1>KONFIRMASI HAPUS DATA</El.Text1>
          {dataInit && (
            <El.TextWrapper>
              <El.TextGroup>
                <h1 className="key">ID</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{dataInit.id}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Name</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{dataInit.name}</h1>
              </El.TextGroup>
            </El.TextWrapper>
          )}
          <El.ButtonWrapper>
            <Button
              name="Hapus"
              type="button"
              color="danger"
              onClick={() => {
                deletePublisher({ publisherId: id })
                  .then(() => dispatch({ type: "CLOSE_ALL_POPUP" }))
                  .catch(() => {});
              }}
            />
            <Button
              name="Batalkan"
              type="button"
              onClick={() => dispatch({ type: "CLOSE_ALL_POPUP" })}
            />
          </El.ButtonWrapper>
        </El.Content>
      </El.Body>
    </El.Main>
  );
};

export default Delete;
