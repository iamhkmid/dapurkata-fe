import { FC, useRef, useState } from "react";
import * as El from "./OrderElement";
import { useGQLGetBook, useGQLGetRecipients } from "./useGQL";
import OrderSummary from "./OrderSummary";
import Delevery from "./Delevery";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { OrderCtx } from "../../../contexts/OrderCtx";
import { useEffect } from "react";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";

const Order: FC = () => {
  const { query } = useRouter();
  const { order, dispatch } = useContext(OrderCtx);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { data, error, loading } = useGQLGetBook({
    bookId:
      (query.type as string) === "buy-now" && (query["book-id"] as string),
  });
  useGQLGetRecipients();
  useEffect(() => {
    if (data && (query.type as string) === "buy-now") {
      dispatch({
        type: "SET_ORDER_TYPE",
        value: {
          type: "buy-now",
          book: data,
          amount: Number((query.amount as string) || 1),
          weight: data.weight,
        },
      });
    } else {
      dispatch({ type: "SET_ORDER_TYPE", value: { type: "shoppingcart" } });
    }
  }, [query.type, data]);

  useEffect(() => {
    dispatch({
      type: "SET_ORDER_LOADING",
      value: loading,
    });
    setIsLoading(loading || order.recipient.loading);
  }, [loading, shoppingCart.loading, order.recipient.loading]);

  useEffect(() => {
    const isBuyNow =
      order.order.type === "buy-now" &&
      !!order.order.book &&
      !!order.order.amount;
    const emptyCart =
      order.order.type === "shoppingcart" && shoppingCart.data.length === 0;
    setIsEmpty(!isBuyNow && emptyCart && !shoppingCart.loading);
  }, [order.order.type, shoppingCart.data, shoppingCart.loading]);

  return (
    <El.Main>
      <El.Delivery>
        <El.SectionHead>
          <El.SectionName>{"Pengiriman & Pembayaran"}</El.SectionName>
        </El.SectionHead>
        <Delevery isEmpty={isEmpty} isLoading={isLoading} />
      </El.Delivery>
      <El.OrderSummary>
        <El.SectionHead>
          <El.SectionName>Ringkasan Pemesanan</El.SectionName>
        </El.SectionHead>
        <OrderSummary isEmpty={isEmpty} isLoading={isLoading} />
      </El.OrderSummary>
    </El.Main>
  );
};

export default Order;
