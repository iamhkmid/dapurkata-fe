import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { UPDATE_FOOTER_PHONE } from "../../../../graphql/footerInfo/mutations";
import { FOOTERINFO_PHONE } from "../../../../graphql/footerInfo/queries";
import {
  TGQLFooterPhone,
  TGQLUpdateFooterPhone,
} from "../../../../types/footerInfo";

export const useGQLFooterPhone = () => {
  const { data, error, loading } = useQuery<TGQLFooterPhone>(FOOTERINFO_PHONE, {
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });
  return {
    data: data?.footerPhone,
    error,
    loading,
  };
};

type TUpdate = {
  id: string;
  phone: string;
};

export const useGQLUpdateFooterPhone = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [updateFooterPhone, { data, error, loading }] =
    useMutation<TGQLUpdateFooterPhone>(UPDATE_FOOTER_PHONE, {
      errorPolicy: "all",
    });

  const update = async (props: TUpdate) => {
    await updateFooterPhone({
      variables: props,
      refetchQueries: [{ query: FOOTERINFO_PHONE }],
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
    if (!!data?.updateFooterPhone) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: `Berhasil ubah data nomor telepon`,
          color: "success",
        },
      });
    }
  }, [error, data?.updateFooterPhone]);
  return {
    updateFooterPhone: update,
    data: data?.updateFooterPhone,
    error,
    loading,
  };
};
