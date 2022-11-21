import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { UPDATE_FOOTER_ADDRESS } from "../../../../graphql/footerInfo/mutations";
import {
  FOOTERINFO_ADDRESS,
  FOOTERINFO_PHONE,
} from "../../../../graphql/footerInfo/queries";
import {
  TGQLFooterAddress,
  TGQLUpdateFooterAddress,
} from "../../../../types/footerInfo";

export const useGQLFooterAddress = () => {
  const { data, error, loading } = useQuery<TGQLFooterAddress>(
    FOOTERINFO_ADDRESS,
    {
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    }
  );
  return {
    data: data?.footerAddress,
    error,
    loading,
  };
};

type TUpdate = {
  id: string;
  address: string;
};

export const useGQLUpdateFooterAddress = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [updateFooterAddress, { data, error, loading }] =
    useMutation<TGQLUpdateFooterAddress>(UPDATE_FOOTER_ADDRESS, {
      errorPolicy: "all",
    });

  const update = async (props: TUpdate) => {
    await updateFooterAddress({
      variables: props,
      refetchQueries: [{ query: FOOTERINFO_ADDRESS }],
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
    if (!!data?.updateFooterAddress) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: `Berhasil ubah data alamat`,
          color: "success",
        },
      });
    }
  }, [error, data?.updateFooterAddress]);
  return {
    updateFooterAddress: update,
    data: data?.updateFooterAddress,
    error,
    loading,
  };
};
