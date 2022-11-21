import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useContext } from "react";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import {
  REGISTER_CONFIRMATION,
  RESEND_CONFIRM_CODE,
  RESET_PASSWORD,
} from "../../../../../graphql/auth/mutations";
import {
  TGQLRegisterConfirm,
  TGQLResendConfirmCode,
  TGQLResetPassword,
} from "../../../../../types/auth";

type TVals = {
  email: string;
  confirmCode: string;
  password: string;
};

export const useGQLResetPassword = () => {
  const { dispatch } = useContext(UserNavCtx);
  const [resetPassword, { data, error, loading }] =
    useMutation<TGQLResetPassword>(RESET_PASSWORD, {
      errorPolicy: "all",
    });
  const GQLResetPassword = async (variables: TVals) => {
    return await resetPassword({ variables });
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
    if (data?.resetPassword) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: data.resetPassword.message,
          color: "success",
        },
      });
      dispatch({ type: "CLOSE_POPUP" });
    }
  }, [error, data]);
  return {
    resetPassword: GQLResetPassword,
    data: data?.resetPassword,
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
