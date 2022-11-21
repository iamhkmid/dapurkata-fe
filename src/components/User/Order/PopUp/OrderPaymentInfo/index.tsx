import { FC, useContext, useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import {
  TGQLOrderInfoSubscription,
  TGQLPaymentInfoQuery,
} from "../../../../../types/transaction";
import PopUpHeader from "../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./OrderPaymentInfoElement";
import Image from "next/image";
import PaymentCode from "./PaymentCode";
import HowToPay from "./HowToPay";
import TransactionStatus from "./TransactionStatus";
import { useQuery, useSubscription } from "@apollo/client";
import { ORDER_INFO_SUBSCRIPTION } from "../../../../../graphql/transaction/subscription";
import { PAYMENT_INFO } from "../../../../../graphql/transaction/queries";
import LoadingPopup from "../../../../otherComps/Loading/LoadingPopup";

type TProps = {
  orderId: string;
};
const OrderPaymentInfo: FC<TProps> = ({ orderId }) => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { data, loading, error, subscribeToMore } =
    useQuery<TGQLPaymentInfoQuery>(PAYMENT_INFO, {
      fetchPolicy: "network-only",
      variables: { orderId },
    });

  useEffect(() => {
    if (data?.order?.id) {
      subscribeToMore<TGQLOrderInfoSubscription>({
        document: ORDER_INFO_SUBSCRIPTION,
        variables: { orderId: data?.order?.id },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data.orderInfo) return prev;
          return {
            order: {
              ...prev.order,
              transactionStatus:
                subscriptionData.data.orderInfo.transactionStatus,
              transactionTime: subscriptionData.data.orderInfo.transactionTime,
              fraudStatus: subscriptionData.data.orderInfo.fraudStatus,
            },
          };
        },
      });
    }
  }, [data?.order?.id]);
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeader title="Info Pembayaran" />
      {loading && <LoadingPopup />}
      {!loading && data?.order && (
        <El.PaymentInfo>
          <div>
            <El.Payment>
              <El.GrossAmount>
                <h1 className="name">Total Pembayaran</h1>
                <h1 className="value">
                  <NumberFormat
                    prefix="Rp"
                    value={data?.order?.grossAmount}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                  />
                </h1>
              </El.GrossAmount>
              <El.PaymentService>
                <div className="payment-icon-wrapper">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${data?.order?.PaymentService.icon}`}
                    height={40}
                    width={40}
                    alt="payment logo"
                    layout="fixed"
                  />
                </div>
                <div className="name">
                  <h1 className="type">
                    {data?.order?.PaymentService?.PaymentType.name}
                  </h1>
                  <h1 className="service">
                    {data?.order?.PaymentService?.name}
                  </h1>
                </div>
              </El.PaymentService>
            </El.Payment>
            <TransactionStatus status={data?.order?.transactionStatus} />
            <PaymentCode
              data={data?.order?.PaymentInfo}
              paymentServiceId={data?.order?.PaymentService.id}
            />
            <HowToPay paymentServiceId={data?.order?.PaymentService?.id} />
          </div>
        </El.PaymentInfo>
      )}
    </El.Main>
  );
};

export default OrderPaymentInfo;
