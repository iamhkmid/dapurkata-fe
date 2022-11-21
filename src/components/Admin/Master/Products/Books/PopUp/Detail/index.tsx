import * as El from "./DetailElement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { FC, useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import DetailInfo from "./DetailInfo";
import LoadingWrapper from "../../../../../../otherComps/Loading/LoadingWrapper";
import { useGQLGetBook } from "../../useGQLBook";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import LoadingBookDetail from "./LoadingBookDetail";

type TProps = {
  bookId: string;
  nested: boolean;
};
const Detail: FC<TProps> = ({ bookId, nested }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { dataGBook, errorGBook, loadGBook } = useGQLGetBook({ bookId });
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin
        title="Detail"
        closePopup={nested ? "CURRENT" : "ALL"}
      />
      <El.DetailBody>
        {loadGBook && (
          <El.LoadingWrapper>
            <LoadingBookDetail />
          </El.LoadingWrapper>
        )}
        {!loadGBook && dataGBook && <DetailInfo data={dataGBook} />}
      </El.DetailBody>
    </El.Main>
  );
};

export default Detail;
