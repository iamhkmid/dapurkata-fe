import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { COURIER_COST } from "../../../../../../graphql/courier/queries";
import { TGQLCCost } from "../../../../../../types/courier";

type TProps = {
  destination: string;
  weight: number;
  courier: string;
};

export const useGQLCCost = (props: TProps) => {
  const { destination, weight, courier } = props;
  const { dispatch } = useContext(OrderCtx);
  const { data, loading, error, refetch } = useQuery<TGQLCCost>(COURIER_COST, {
    skip: !destination || !weight || !courier,
    errorPolicy: "all",
    fetchPolicy: "network-only",
    variables: { destination, weight, courier },
  });
  useEffect(() => {
    dispatch({ type: "SET_COURIER_ERROR", value: error?.message || null });
    dispatch({ type: "SET_COURIER_LOADING", value: loading });
  }, [error, loading]);

  return {
    data: data?.courierCost,
    loading,
    error,
    refetch,
  };
};
