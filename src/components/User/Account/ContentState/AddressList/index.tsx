import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { OrderCtx } from "../../../../../contexts/OrderCtx";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import Button from "../../../../otherComps/Buttons/Button";
import RowBtn from "../../../../otherComps/Buttons/RowBtn";
import LoadingPopup from "../../../../otherComps/Loading/LoadingPopup";
import * as El from "./AddressListElement";
import { useGQLDelRcpt, useGQLGetRecipients } from "./useGQL";

const AddressList = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { order, dispatch: dispatchOrder } = useContext(OrderCtx);
  const { deleteRecipient, loadingDelRcpt } = useGQLDelRcpt({
    userId: user.id,
  });

  const { data, loading, error } = useGQLGetRecipients();

  const deleteHandler = async ({ id }) => {
    await deleteRecipient({ recipientId: id });
  };
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
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
        </El.BtnWrapper>
        <El.Ul>
          {loading && <LoadingPopup />}
          {!loading &&
            data?.map((val) => (
              <El.Li key={val.id}>
                <El.Info
                  onClick={() => {
                    dispatchOrder({ type: "SET_RECIPIENT_ID", value: val.id });
                  }}
                >
                  <El.TextGroup>
                    <h1 className="key">Nama</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{`${val.firstName} ${val.lastName}`}</h1>
                  </El.TextGroup>
                  <El.TextGroup>
                    <h1 className="key">Phone</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{val.phone}</h1>
                  </El.TextGroup>
                  <El.TextGroup>
                    <h1 className="key">Email</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{val.email}</h1>
                  </El.TextGroup>
                  <El.TextGroup>
                    <h1 className="key">Provinsi</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{val.City.Province.name}</h1>
                  </El.TextGroup>
                  <El.TextGroup>
                    <h1 className="key">Kabupaten/Kota</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{val.City.name}</h1>
                  </El.TextGroup>
                  <El.TextGroup>
                    <h1 className="key">Kode Pos</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{val.City.postalCode}</h1>
                  </El.TextGroup>
                  <El.TextGroup>
                    <h1 className="key">Alamat Lengkap</h1>
                    <h1 className="separator">{":"}</h1>
                    <h1 className="value">{val.address}</h1>
                  </El.TextGroup>
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
      </El.Section>
    </El.Main>
  );
};

export default AddressList;
