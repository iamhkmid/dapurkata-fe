import * as El from "./DeleteELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { FC, useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLDeleteBook, useGQLGetBookDel } from "../../useGQLBook";
import FormMessage from "../../../../../../otherComps/ShowMessage";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";

type TProps = {
  bookId: string;
};

const Delete: FC<TProps> = ({ bookId }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { dataGBD, errorGBD, loadGBD } = useGQLGetBookDel({ bookId });
  const { deleteBook, data, loading, error } = useGQLDeleteBook();
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Hapus data" />
      <El.Body>
        <FormMessage message={error?.message} color="danger" />
        <El.Content>
          <El.Text1>KONFIRMASI HAPUS DATA</El.Text1>
          <El.TextWrapper>
            <El.TextGroup>
              <h1 className="key">ID</h1>
              <h1 className="separator">:</h1>
              <h1 className="value">{dataGBD?.id}</h1>
            </El.TextGroup>
            <El.TextGroup>
              <h1 className="key">Title</h1>
              <h1 className="separator">:</h1>
              <h1 className="value">{dataGBD?.title}</h1>
            </El.TextGroup>
          </El.TextWrapper>
          <El.ButtonWrapper>
            <Button
              name="Hapus"
              type="button"
              color="danger"
              onClick={() => {
                deleteBook({ bookId })
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
