import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { UPDATE_FOOTER_MESSAGE } from "../../../../graphql/footerInfo/mutations";
import { FOOTERINFO_MESSAGE } from "../../../../graphql/footerInfo/queries";
import {
  TGQLFooterMessage,
  TGQLUpdateFooterMessage,
} from "../../../../types/footerInfo";

export const useGQLFooterMessage = () => {
  const { data, error, loading } = useQuery<TGQLFooterMessage>(
    FOOTERINFO_MESSAGE,
    {
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    }
  );
  return {
    data: data?.footerMessage,
    error,
    loading,
  };
};

type TUpdate = {
  id: string;
  message: string;
};

export const useGQLUpdateFooterMessage = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [updateFooterMessage, { data, error, loading }] =
    useMutation<TGQLUpdateFooterMessage>(UPDATE_FOOTER_MESSAGE, {
      errorPolicy: "all",
    });

  const update = async (props: TUpdate) => {
    await updateFooterMessage({
      variables: props,
      refetchQueries: [{ query: FOOTERINFO_MESSAGE }],
      awaitRefetchQueries: true,
    });
  };

  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: error.message, color: "danger" },
      });
    }
    if (!!data?.updateFooterMessage) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: `Berhasil ubah data`,
          color: "success",
        },
      });
    }
  }, [error, data?.updateFooterMessage]);
  return {
    updateFooterMessage: update,
    data: data?.updateFooterMessage,
    error,
    loading,
  };
};
