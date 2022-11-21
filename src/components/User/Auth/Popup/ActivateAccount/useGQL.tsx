import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useContext } from "react";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import {
  REGISTER_CONFIRMATION,
  RESEND_CONFIRM_CODE,
} from "../../../../../graphql/auth/mutations";
import {
  TGQLRegisterConfirm,
  TGQLResendConfirmCode,
} from "../../../../../types/auth";

type TVals = {
  email: string;
  confirmCode: string;
};

export const useGQLRegisterConfirm = () => {
  const { dispatch } = useContext(UserNavCtx);
  const [registerConfirmation, { data, error, loading }] =
    useMutation<TGQLRegisterConfirm>(REGISTER_CONFIRMATION, {
      errorPolicy: "all",
    });
  const GQLRegisterConfirm = async (variables: TVals) => {
    return await registerConfirmation({ variables });
  };
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: error.message,
          color: "danger",
        },
      });
    }
    if (data?.registerConfirmation) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: data.registerConfirmation.message,
          color: "success",
        },
      });
      dispatch({ type: "CLOSE_POPUP" });
    }
  }, [error, data]);
  return {
    registerConfirmation: GQLRegisterConfirm,
    data: data?.registerConfirmation,
    error,
    loading,
  };
};

export const useGQLResendConfirmCode = () => {
  const { dispatch } = useContext(UserNavCtx);
  const [resendConfirmCode, { data, error, loading }] =
    useMutation<TGQLResendConfirmCode>(RESEND_CONFIRM_CODE, {
      errorPolicy: "all",
    });
  type TVar = { email: string; type: "ACTIVATE_ACCOUNT" | "RESET_PASSWORD" };
  const GQLresendConfirmCode = async (variables: TVar) => {
    return await resendConfirmCode({ variables });
  };
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: error.message,
          color: "danger",
        },
      });
    }
    if (data?.resendConfirmCode) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: data.resendConfirmCode.message,
          color: "success",
        },
      });
    }
  }, [error, data?.resendConfirmCode]);
  return {
    resendConfirmCode: GQLresendConfirmCode,
    data: data?.resendConfirmCode,
    error,
    loading,
  };
};
