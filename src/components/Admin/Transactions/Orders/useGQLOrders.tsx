import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { CHANGE_SHIPPING_STATUS } from "../../../../graphql/transaction/mutations";
import {
  ORDER_DETAIL_BY_ADMIN,
  ORDER_DETAIL_INIT,
  ORDER_LIST_ADMIN,
} from "../../../../graphql/transaction/queries";
import {
  TGQLChangeShippingStatus,
  TGQLOrderDetailByAdminQuery,
  TGQLOrderDetailInit,
  TOrderListsUsers,
} from "../../../../types/transaction";

export const useGQLOrderListsUsers = () => {
  const { data, error, loading } = useQuery<TOrderListsUsers>(
    ORDER_LIST_ADMIN,
    {
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );
  const newData = data?.ordersListUsers || [];
  return { data: newData, error, loading };
};

type TuseGQLOrderLists = {
  orderId: string;
};
export const useGQLOrderDetail = ({ orderId }: TuseGQLOrderLists) => {
  const { data, loading, error } = useQuery<TGQLOrderDetailByAdminQuery>(
    ORDER_DETAIL_BY_ADMIN,
    {
      fetchPolicy: "network-only",
      variables: { orderId },
    }
  );
  return { data: data?.order, loading, error };
};

export const useGQLOrderInit = ({ orderId }: TuseGQLOrderLists) => {
  const { data, loading, error } = useQuery<TGQLOrderDetailInit>(
    ORDER_DETAIL_INIT,
    {
      fetchPolicy: "network-only",
      variables: { orderId },
    }
  );
  return { data: data?.order, loading, error };
};

type TChangeSSProps = {
  orderId: string;
  shippingStatus: string;
  receiptNumber: string;
};
export const useGQLChangeShippingStatus = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [changeShippingStatus, { data, loading, error }] =
    useMutation<TGQLChangeShippingStatus>(CHANGE_SHIPPING_STATUS, {
      fetchPolicy: "network-only",
      errorPolicy: "all",
      awaitRefetchQueries: true,
    });
  const GQLChangeShippingStatus = async (props: TChangeSSProps) => {
    const { orderId, receiptNumber, shippingStatus } = props;
    await changeShippingStatus({
      variables: { orderId, data: { receiptNumber, shippingStatus } },
      refetchQueries: [{ query: ORDER_LIST_ADMIN }],
    });
  };
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { color: "danger", message: error.message },
      });
    }
  }, [error]);
  return {
    changeShippingStatus: GQLChangeShippingStatus,
    data: data?.changeShippingStatus,
    loading,
    error,
  };
};
