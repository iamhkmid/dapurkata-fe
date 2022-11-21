import { useEffect, useState } from "react";
import { useContext } from "react";
import { OrderCtx } from "../../../../../contexts/OrderCtx";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import Button from "../../../../otherComps/Buttons/Button";
import * as El from "./DestinationElement";

const Destination = () => {
  const { dispatch } = useContext(UserNavCtx);
  const { order } = useContext(OrderCtx);
  const {
    recipient: {
      data: { recipient },
    },
  } = order;
  return (
    <>
      {recipient && (
        <El.Main>
          <El.Scroll>
            <El.RecipientInfo>
              <El.TextGroup>
                <h1 className="key">Penerima</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{`${recipient.firstName} ${recipient.lastName}`}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Phone</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{recipient.phone}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Email</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{recipient.email}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Provinsi</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{recipient.City.Province.name}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Kabupaten/Kota</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{recipient.City.name}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Kode Pos</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{recipient.City.postalCode}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Alamat Lengkap</h1>
                <h1 className="separator">{":"}</h1>
                <h1 className="value">{recipient.address}</h1>
              </El.TextGroup>
            </El.RecipientInfo>
          </El.Scroll>
          <El.ButtonWrapper>
            <Button
              name="Ubah"
              type="button"
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: {
                    name: "UPDATE_RECIPIENT",
                    recipientId: recipient?.id,
                  },
                })
              }
              color="section"
            />
            <Button
              name="Kirim ke Alamat Lain"
              type="button"
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: {
                    name: "CHANGE_RECIPIENT",
                  },
                })
              }
              color="section"
            />
          </El.ButtonWrapper>
        </El.Main>
      )}

      {!recipient && (
        <El.Main>
          <El.Info>Anda Belum memasukan alamat penerima.</El.Info>
          <El.ButtonWrapper>
            <Button
              name="Tambah"
              type="button"
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: { name: "ADD_RECIPIENT" },
                })
              }
              color="section"
            />
          </El.ButtonWrapper>
        </El.Main>
      )}
    </>
  );
};

export default Destination;
