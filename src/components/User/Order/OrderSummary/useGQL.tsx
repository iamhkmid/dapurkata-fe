import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { GET_ORDER_BOOK } from "../../../../graphql/book/queries";
import { SHOPPINGCART } from "../../../../graphql/shoppingCart/queries";
import { ORDER } from "../../../../graphql/transaction/mutations";
import { TGQLGetOrderBook } from "../../../../types/book";
import { TGQLOrder } from "../../../../types/order";
import { TGQLMutationOrder } from "../../../../types/transaction";

type TValues = {
  orderType: string;
  recipientId?: string;
  bookId?: string;
  amount?: number;
  courierCode: string;
  courierService: string;
  payment: string;
};
export const useGQLOrder = () => {
  const { dispatch } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { replace } = useRouter();
  const [order, { data, error, loading }] = useMutation<TGQLMutationOrder>(
    ORDER,
    {
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    }
  );
  const makeAnOrder = async (values: TValues) => {
    return order({
      variables: { data: values },
      refetchQueries: [{ query: SHOPPINGCART, variables: { userId: user.id } }],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Gagal melakukan pemesanan",
          color: "danger",
        },
      });
    }
    if (data?.order) {
      replace("/books");
      dispatch({
        type: "SHOW_POPUP",
        value: { name: "ORDER_PAYMENT_INFO", orderId: data.order.id },
      });
    }
  }, [error, data?.order]);
  return { makeAnOrder, data: data?.order, error, loading };
};
