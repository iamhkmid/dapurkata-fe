import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useContext } from "react";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { REGISTER } from "../../../../graphql/auth/mutations";
import { TFormCreateUser } from "../../../../types/user";
import Router from "next/router";
import { TGQLRegister } from "../../../../types/auth";

export const useGQLCreateUser = () => {
  const { dispatch } = useContext(UserNavCtx);
  const [register, { data, error, loading }] = useMutation<TGQLRegister>(
    REGISTER,
    {
      errorPolicy: "all",
    }
  );
  const GQLCreateUser = async (values: TFormCreateUser) => {
    const { userPic, confirmPassword, ...rest } = values;
    const [pic] = userPic;
    const variables = { userPic: pic, data: { ...rest } };
    return await register({ variables });
  };
  useEffect(() => {
    if (data?.register) {
      Router.replace("/auth/login");
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: data.register?.message,
          color: "success",
        },
      });
      dispatch({
        type: "SHOW_POPUP",
        value: {
          name: "REGISTER_CONFIRM",
          email: data?.register?.email,
          fetchWaitTime: data?.register?.fetchWaitTime,
        },
      });
    }
  }, [data?.register]);

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
  }, [error]);
  return {
    createUser: GQLCreateUser,
    data: data?.register,
    error,
    loading,
  };
};
