import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { COURIER_COST } from "../../../../../../graphql/courier/queries";
import { PAYMENT_TYPE_ISACTIVE } from "../../../../../../graphql/transaction/queries";
import { TGQLPaymentType } from "../../../../../../types/payment";

export const useGQLPaymentType = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const { data, loading, error, refetch } = useQuery<TGQLPaymentType>(
    PAYMENT_TYPE_ISACTIVE,
    {
      skip:
        !order.courier.selected.courier?.service ||
        !order.recipient.data.recipient,
      errorPolicy: "all",
      fetchPolicy: "network-only",
      variables: { isEnabled: true },
    }
  );
  useEffect(() => {
    dispatch({ type: "SET_PAYMENT_ERROR", value: error?.message || null });
  }, [error]);
  return {
    data: data?.paymentType,
    loading: loading,
    error: error,
    refetch,
  };
};
