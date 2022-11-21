import { FC, useContext, useEffect } from "react";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import Button from "../../../../../otherComps/Buttons/Button";
import RowBtn from "../../../../../otherComps/Buttons/RowBtn";
import LoadingWrapper from "../../../../../otherComps/Loading/LoadingWrapper";
import PopUpHeader from "../../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./ChangeRecipientElement";
import { useGQLDelRcpt } from "./useGQL";

const ChangeRecipient: FC = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { order, dispatch: dispatchOrder } = useContext(OrderCtx);
  const { deleteRecipient, loadingDelRcpt } = useGQLDelRcpt({
    userId: user.id,
  });
  const deleteHandler = ({ id }) => {
    deleteRecipient({ recipientId: id })
      .then(() => {
        dispatchOrder({
          type: "SET_RECIPIENT_ID",
          value: order.recipient.data.recipients[0]?.id || null,
        });
      })
      .catch(() => {});
  };
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeader title="Kirim Ke alamat Lain" />
      {loadingDelRcpt && <LoadingWrapper />}
      <El.Body>
        <El.BtnWrapper>
          <Button
            name="Tambah"
            type="button"
            onClick={() =>
              dispatchUserNav({
                type: "SHOW_POPUP",
                value: {
                  name: "ADD_RECIPIENT",
                },
              })
            }
            color="success"
          />
          <Button
            name="Simpan"
            type="button"
            onClick={() => dispatchUserNav({ type: "CLOSE_POPUP" })}
            color="primary"
          />
        </El.BtnWrapper>
        <El.Ul>
          {order.recipient.data.recipients?.map((val) => (
            <El.Li key={val.id}>
              <El.Info
                active={val.id === order.recipient.selected.id}
                onClick={() => {
                  dispatchOrder({ type: "SET_RECIPIENT_ID", value: val.id });
                }}
              >
                <h1>{`${val.firstName} ${val.lastName}`}</h1>
                <h1>{val.address}</h1>
              </El.Info>
              <El.BtnLiWrapper>
                <RowBtn
                  type="edit"
                  disabled={loadingDelRcpt}
                  onClick={() =>
                    dispatchUserNav({
                      type: "SHOW_POPUP",
                      value: {
                        name: "UPDATE_RECIPIENT",
                        recipientId: val.id,
                      },
                    })
                  }
                />
                <RowBtn
                  type="delete"
                  disabled={loadingDelRcpt}
                  onClick={() => deleteHandler({ id: val.id })}
                />
              </El.BtnLiWrapper>
            </El.Li>
          ))}
        </El.Ul>
      </El.Body>
    </El.Main>
  );
};

export default ChangeRecipient;
