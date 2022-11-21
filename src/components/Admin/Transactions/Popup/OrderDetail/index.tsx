import { useQuery } from "@apollo/client";
import moment from "moment";
import "moment/locale/id";
import { FC } from "react";
import NumberFormat from "react-number-format";
import { ORDER_DETAIL_BY_ADMIN } from "../../../../../graphql/transaction/queries";
import {
  getShippingStatus,
  getTransactionStatus,
} from "../../../../../services/getStatus";
import { TGQLOrderDetailByAdminQuery } from "../../../../../types/transaction";
import Button from "../../../../otherComps/Buttons/Button";
import LoadingPopup from "../../../../otherComps/Loading/LoadingPopup";
import PopUpHeaderAdmin from "../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import { useGQLOrderDetail } from "../../Orders/useGQLOrders";
import FormChangeShippingStatus from "./FormChangeShippingStatus";
import * as El from "./OrderDetailElement";

type TProps = { orderId: string };
const OrderDetail: FC<TProps> = ({ orderId }) => {
  const { data, loading, error } = useGQLOrderDetail({ orderId });
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Detail Pesanan" themeToggle={true} />
      {loading && <LoadingPopup />}
      {!loading && !!data && (
        <El.Section>
          <FormChangeShippingStatus orderId={orderId} />
          <El.Scroll>
            <El.OrderInfo>
              <El.FlexWrapper>
                <h1 className="title">INFO PESANAN</h1>
                <div className="info-group">
                  <div className="info-wrapper">
                    <div className="name">ID Pesanan</div>
                    <h1 className="value">{data.id}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Waktu Transaksi</div>
                    <h1 className="value">
                      {moment(data.transactionTime)
                        .locale("id")
                        .format("dddd, DD MMMM YYYY | HH:mm")}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Batas Waktu Pembayaran</div>
                    <h1 className="value">
                      {moment(data.expirationTime)
                        .locale("id")
                        .format("dddd, DD MMMM YYYY | HH:mm")}
                    </h1>
                  </div>
                </div>
              </El.FlexWrapper>
              <El.GridWrapper>
                <div className="info-group">
                  <h1 className="title">PEMBAYARAN</h1>
                  <div className="info-wrapper">
                    <div className="name">Total Pembayaran</div>
                    <h1 className="gross-amount">
                      <NumberFormat
                        prefix="Rp"
                        value={data.grossAmount}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Status Pembayaran</div>
                    <El.TransactionStatus status={data.transactionStatus}>
                      {getTransactionStatus(data.transactionStatus)}
                    </El.TransactionStatus>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Metode Pembayaran</div>
                    <h1 className="value">
                      {data.PaymentService.PaymentType.name}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Currency</div>
                    <h1 className="value">{data.currency}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Layanan Pembayaran</div>
                    <h1 className="value">{data.PaymentService.name}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Status Fraud</div>
                    <h1 className="value">{data.fraudStatus}</h1>
                  </div>
                </div>
                <div className="info-group">
                  <h1 className="title">PENGIRIMAN</h1>
                  <div className="info-wrapper">
                    <div className="name">Layanan Pengiriman</div>
                    <h1 className="value">{data.CourierDetail.Courier.name}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Paket Layanan</div>
                    <h1 className="value">{data.CourierDetail.service}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Deskripsi</div>
                    <h1 className="value">{data.CourierDetail.description}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Biaya Pengiriman</div>
                    <h1 className="gross-amount">
                      <NumberFormat
                        prefix="Rp"
                        value={data.CourierDetail.cost}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </h1>
                  </div>
                </div>
                <div className="info-group">
                  <h1 className="title">ALAMAT PENGIRIMAN</h1>
                  <div className="info-wrapper">
                    <div className="name">Penerima</div>
                    <h1 className="value">{`${
                      data.CustomerDetail.ShippingAddress.firstName
                    } ${
                      data.CustomerDetail.ShippingAddress.lastName || ""
                    }`}</h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Email</div>
                    <h1 className="value">
                      {data.CustomerDetail.ShippingAddress.email}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">No Handphone</div>
                    <h1 className="value">
                      {data.CustomerDetail.ShippingAddress.phone}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Kabupaten/Kota</div>
                    <h1 className="value">
                      {data.CustomerDetail.ShippingAddress.city}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Kode Pos</div>
                    <h1 className="value">
                      {data.CustomerDetail.ShippingAddress.postalCode}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Kode Negara</div>
                    <h1 className="value">
                      {data.CustomerDetail.ShippingAddress.countryCode}
                    </h1>
                  </div>
                  <div className="info-wrapper">
                    <div className="name">Alamat Lengkap</div>
                    <h1 className="value">
                      {data.CustomerDetail.ShippingAddress.address}
                    </h1>
                  </div>
                </div>
              </El.GridWrapper>
              <El.FlexWrapper>
                <h1 className="title">DETAIL ITEM</h1>
                <div className="info-group">
                  <El.ItemDetail>
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.ItemDetail.map((val, index) => {
                            return (
                              <tr key={val.id}>
                                <td>{index + 1}</td>
                                <td>
                                  <div className="item-name">{val.name}</div>
                                </td>
                                <td>
                                  <NumberFormat
                                    prefix="Rp"
                                    value={val.price}
                                    displayType={"text"}
                                    thousandSeparator={"."}
                                    decimalSeparator={","}
                                  />
                                </td>
                                <td>{val.quantity}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </El.ItemDetail>
                </div>
              </El.FlexWrapper>
            </El.OrderInfo>
          </El.Scroll>
        </El.Section>
      )}
    </El.Main>
  );
};

export default OrderDetail;
