import { useMutation } from "@apollo/client";
import { useContext, useEffect } from "react";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import { DELETE_RECIPIENT } from "../../../../../../graphql/recipient/mutations";
import { RECIPIENTS } from "../../../../../../graphql/recipient/queries";
import { TGQLDelRecipient } from "../../../../../../types/recipient";

type TProps = {
  recipientId: string;
};

export const useGQLDelRcpt = ({ userId }: { userId: string }) => {
  const { dispatch } = useContext(UserNavCtx);
  const [deleteRecipient, { data, loading, error }] =
    useMutation<TGQLDelRecipient>(DELETE_RECIPIENT, {
      errorPolicy: "none",
    });
  const delRcpt = ({ recipientId }: TProps) => {
    return deleteRecipient({
      variables: { recipientId },
      refetchQueries: [{ query: RECIPIENTS, variables: { userId } }],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (data?.deleteRecipient)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Berhasil menghapus data",
          color: "success",
        },
      });
  }, [data?.deleteRecipient]);
  return {
    deleteRecipient: delRcpt,
    dataDelRcpt: data?.deleteRecipient,
    loadingDelRcpt: loading,
    errorDelRcpt: error,
  };
};
