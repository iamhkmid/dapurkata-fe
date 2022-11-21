import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { OrderCtx } from "../../../../contexts/OrderCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { ORDER } from "../../../../graphql/transaction/mutations";
import Button from "../../../otherComps/Buttons/Button";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import LoadingPopup2 from "../../../otherComps/Loading/LoadingPopup2";
import Loading from "./Loading";
import * as El from "./OrderSummaryElement";
import { useGQLOrder } from "./useGQL";

type TProps = {
  isEmpty: boolean;
  isLoading: boolean;
};

const OrderSummary: FC<TProps> = ({ isEmpty, isLoading }) => {
  const { order } = useContext(OrderCtx);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [amountPrice, setAmountPrice] = useState(0);

  const { makeAnOrder, data, error, loading } = useGQLOrder();
  const orderHandler = () => {
    makeAnOrder({
      orderType: order.order.type,
      recipientId: order.recipient.data.recipient.id,
      bookId: order.order.type === "buy-now" ? order.order.book.id : undefined,
      amount: order.order.type === "buy-now" ? order.order.amount : undefined,
      courierCode: order.courier.selected.code,
      courierService: order.courier.selected.courier.service,
      payment: order.payment.selected.paymentServiceId,
    });
  };

  useEffect(() => {
    if (order.order.type === "buy-now" && !!order.order.book) {
      setAmountPrice(
        (order.order.book.price -
          (order.order.book.price * order.order.book.discount) / 100) *
          order.order.amount
      );
    } else {
      const amount = shoppingCart.data.reduce(
        (acc, curr) =>
          acc +
          (curr.Book.price - (curr.Book.price * curr.Book.discount) / 100) *
            curr.amount,
        0
      );
      setAmountPrice(amount);
    }
  }, [
    shoppingCart.data,
    order.order.type,
    order.order.type === "buy-now" && order.order.book,
  ]);

  return (
    <El.Main>
      {isLoading && <LoadingPopup2 />}
      {isEmpty && <El.EmptyCart>Keranjang Kosong</El.EmptyCart>}
      {!isEmpty && !isLoading && (
        <>
          <El.Detail>
            {order.order.type === "buy-now" && (
              <El.TableWrapper>
                <El.TableName>ITEM</El.TableName>
                <El.CartInfo>
                  <El.ItemWrapper>
                    <El.CoverWrapper>
                      <ImageResponsive
                        src={
                          order.order.book?.BookPicture.find(
                            (img) => img.type === "COVER"
                          )?.url
                        }
                        alt={order.order.book?.title}
                        height={75}
                        width={37}
                        quality={75}
                        defaultIcon="dapurkata"
                      />
                    </El.CoverWrapper>
                    <El.InfoWrapper>
                      <El.Info>
                        <h1>{order.order.book?.title}</h1>
                        <h1>{order.order.book?.Author.name}</h1>
                      </El.Info>
                      <El.Info2>
                        <h1>
                          <NumberFormat
                            prefix="Rp"
                            value={
                              order.order.book?.price -
                              (order.order.book?.price *
                                order.order.book?.discount) /
                                100
                            }
                            displayType={"text"}
                            thousandSeparator={"."}
                            decimalSeparator={","}
                          />
                        </h1>
                        <h1>{`x ${order.order?.amount}`}</h1>
                      </El.Info2>
                    </El.InfoWrapper>
                  </El.ItemWrapper>
                </El.CartInfo>
              </El.TableWrapper>
            )}
            {order.order.type === "shoppingcart" && (
              <El.TableWrapper>
                <El.TableName>KERANJANG</El.TableName>
                <El.CartInfo>
                  {shoppingCart.data.map((val, i) => {
                    return (
                      <El.ItemWrapper key={val.id}>
                        <El.CoverWrapper>
                          <ImageResponsive
                            src={val.Book?.coverURL}
                            alt={val.Book?.title}
                            height={70}
                            width={46}
                            quality={75}
                            defaultIcon="dapurkata"
                          />
                        </El.CoverWrapper>
                        <El.InfoWrapper>
                          <El.Info>
                            <h1>{val.Book.title}</h1>
                            <h1>{val.Book.Author.name}</h1>
                          </El.Info>
                          <El.Info2>
                            <h1>
                              <NumberFormat
                                prefix="Rp"
                                value={
                                  val.Book.price -
                                  (val.Book.price * val.Book.discount) / 100
                                }
                                displayType={"text"}
                                thousandSeparator={"."}
                                decimalSeparator={","}
                              />
                            </h1>
                            <h1>{`x ${val.amount}`}</h1>
                          </El.Info2>
                        </El.InfoWrapper>
                      </El.ItemWrapper>
                    );
                  })}
                </El.CartInfo>
              </El.TableWrapper>
            )}
            <El.OrderInfo>
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td colSpan={2} className="title">
                      PENERIMA
                    </td>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td>{`${order.recipient.data.recipient?.firstName || ""} ${
                      order.recipient.data.recipient?.lastName || ""
                    }`}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{order.recipient.data.recipient?.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{order.recipient.data.recipient?.phone}</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td>
                      {order.recipient.data.recipient?.City.Province.name}
                    </td>
                  </tr>
                  <tr>
                    <td>Kota</td>
                    <td>{order.recipient.data.recipient?.City.name}</td>
                  </tr>
                  <tr>
                    <td>Kode Pos</td>
                    <td>{order.recipient.data.recipient?.City.postalCode}</td>
                  </tr>
                  <tr>
                    <td>Alamat Lengkap</td>
                    <td>{order.recipient.data.recipient?.address}</td>
                  </tr>
                </tbody>
              </El.TableInfo>
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td colSpan={2} className="title">
                      KURIR
                    </td>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td>{order.courier.selected.courier?.name}</td>
                  </tr>
                  <tr>
                    <td>Layanan</td>
                    <td>{order.courier.selected.courier?.service}</td>
                  </tr>
                  <tr>
                    <td>ETD</td>
                    <td>{order.courier.selected.courier?.etd}</td>
                  </tr>
                  <tr>
                    <td>Deskripsi</td>
                    <td>{order.courier.selected.courier?.description}</td>
                  </tr>
                </tbody>
              </El.TableInfo>
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td colSpan={2} className="title">
                      PEMBAYARAN
                    </td>
                  </tr>
                  <tr>
                    <td>Tipe</td>
                    <td>
                      {
                        order.payment.data.paymentTypes.find(
                          (val) =>
                            val.id === order.payment.selected.paymentTypeId
                        )?.name
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Layanan</td>
                    <td>
                      {
                        order.payment.data.paymentServices.find(
                          (val) =>
                            val.id === order.payment.selected.paymentServiceId
                        )?.name
                      }
                    </td>
                  </tr>
                </tbody>
              </El.TableInfo>
            </El.OrderInfo>
            {order.courier.loading && <Loading />}
            {!order.courier.loading && (
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>
                      <NumberFormat
                        prefix="Rp"
                        value={amountPrice}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Biaya Kirim</td>
                    <td>
                      <NumberFormat
                        prefix="Rp"
                        value={order.courier.selected.courier?.cost || 0}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <El.TotalName>Total</El.TotalName>
                    </td>
                    <td>
                      <El.TotalValue>
                        <NumberFormat
                          prefix="Rp"
                          value={
                            amountPrice +
                              order.courier.selected.courier?.cost || 0
                          }
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                        />
                      </El.TotalValue>
                    </td>
                  </tr>
                </tbody>
              </El.TableInfo>
            )}
            <El.ButtonWrapper>
              <Button
                name="CHECKOUT"
                type="button"
                isLoading={loading}
                onClick={() => orderHandler()}
                disabled={!order.payment.selected.paymentServiceId}
              />
            </El.ButtonWrapper>
          </El.Detail>
        </>
      )}
    </El.Main>
  );
};

export default OrderSummary;
