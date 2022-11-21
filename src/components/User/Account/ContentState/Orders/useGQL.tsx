import { useQuery } from "@apollo/client";
import { ORDERS_LIST_USER } from "../../../../../graphql/transaction/queries";
import { TOrderListsUser } from "../../../../../types/transaction";

export const useGQLOrders = () => {
  const { data, error, loading } = useQuery<TOrderListsUser>(ORDERS_LIST_USER, {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });
  return { data: data?.ordersListUser, error, loading };
};
