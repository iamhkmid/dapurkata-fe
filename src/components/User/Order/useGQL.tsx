import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthCtx";
import { OrderCtx } from "../../../contexts/OrderCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { GET_ORDER_BOOK } from "../../../graphql/book/queries";
import { RECIPIENTS } from "../../../graphql/recipient/queries";
import { TGQLGetOrderBook } from "../../../types/book";
import { TRecipients } from "../../../types/recipient";

export const useGQLGetBook = (values: { bookId: string }) => {
  const { data, error, loading } = useQuery<TGQLGetOrderBook>(GET_ORDER_BOOK, {
    skip: !values.bookId,
    variables: values,
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });
  return { data: data?.book, error, loading };
};

export const useGQLGetRecipients = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery<TRecipients>(RECIPIENTS, {
    skip: !user,
    errorPolicy: "all",
    variables: { userId: user?.id },
  });
  useEffect(() => {
    const { recipient } = order;
    if (data) {
      dispatch({ type: "SET_RECIPIENTS", value: data.recipients });
      if (!recipient.data.recipient && data.recipients?.length > 0) {
        dispatch({ type: "SET_RECIPIENT_ID", value: data.recipients[0].id });
      } else {
        dispatch({ type: "SET_RECIPIENT_ID", value: recipient.selected.id });
      }
    }
  }, [data]);

  useEffect(() => {
    dispatch({ type: "SET_RECIPIENT_LOADING", value: loading });
  }, [loading]);

  return {
    dataRcpts: data?.recipients,
    loadRcpts: loading,
    errorRcpts: error,
  };
};
