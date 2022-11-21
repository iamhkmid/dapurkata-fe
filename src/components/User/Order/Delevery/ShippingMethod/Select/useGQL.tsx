import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { COURIER_ISACTIVE } from "../../../../../../graphql/courier/queries";
import { TGQLCourierIsActive } from "../../../../../../types/courier";

export const useGQLCourier = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const { data, loading, error, refetch } = useQuery<TGQLCourierIsActive>(
    COURIER_ISACTIVE,
    {
      skip: !order.recipient.data.recipient,
      errorPolicy: "all",
      fetchPolicy: "network-only",
      variables: { isEnabled: true },
    }
  );
  useEffect(() => {
    dispatch({ type: "SET_COURIER_ERROR", value: error?.message || null });
  }, [error]);
  return {
    data: data?.courier,
    loading,
    error,
    refetch,
  };
};
