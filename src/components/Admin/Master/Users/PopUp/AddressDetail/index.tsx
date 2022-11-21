import { FC } from "react";
import styled from "styled-components";
import Button from "../../../../../otherComps/Buttons/Button";
import PopUpHeaderAdmin from "../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import { useGQLRecipient } from "../../useGQLUser";
import * as El from "./AddressDetailElement";

type TProps = {
  recipientId: string;
};
const AddressDetail: FC<TProps> = ({ recipientId }) => {
  const { data, error, loading } = useGQLRecipient({ recipientId });
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Detail Alamat" closePopup="CURRENT" />
      <El.Body>
        <El.Content>
          {data && (
            <El.ItemWrapper>
              <div className="text-group">
                <div className="name">ID</div>
                <div className="value">{data.id}</div>
              </div>
              <div className="text-group">
                <div className="name">Nama Depan</div>
                <div className="value">{data.firstName}</div>
              </div>
              <div className="text-group">
                <div className="name">Nama Belakang</div>
                <div className="value">{data.lastName || ""}</div>
              </div>
              <div className="text-group">
                <div className="name">Email</div>
                <div className="value">{data.email}</div>
              </div>
              <div className="text-group">
                <div className="name">Phone</div>
                <div className="value">{data.phone}</div>
              </div>
              <div className="text-group">
                <div className="name">Provinsi</div>
                <div className="value">{data.City.Province.name}</div>
              </div>
              <div className="text-group">
                <div className="name">Kabupaten/Kota</div>
                <div className="value">{data.City.name}</div>
              </div>
              <div className="text-group">
                <div className="name">Alamat Lengkap</div>
                <div className="value">{data.address}</div>
              </div>
            </El.ItemWrapper>
          )}
        </El.Content>
      </El.Body>
    </El.Main>
  );
};

export default AddressDetail;
