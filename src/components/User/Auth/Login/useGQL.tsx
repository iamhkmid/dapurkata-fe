import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useContext } from "react";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import {
  GOOGLE_OAUTH2_VERIFY,
  REGISTER,
} from "../../../../graphql/auth/mutations";
import { TFormCreateUser } from "../../../../types/user";
import Router, { useRouter } from "next/router";
import { TGQLGoogleOauth2Verify, TGQLRegister } from "../../../../types/auth";
import { ApolloClientCtx } from "../../../../contexts/ApolloClientCtx";
import { AuthContext } from "../../../../contexts/AuthCtx";

export const useGQLGoogleOauth2Verify = () => {
  const { dispatch } = useContext(UserNavCtx);
  const { replace } = useRouter();
  const [googleOauth2Verify, { data, error, loading }] =
    useMutation<TGQLGoogleOauth2Verify>(GOOGLE_OAUTH2_VERIFY, {
      errorPolicy: "all",
      fetchPolicy: "network-only",
    });
  const GQLGoogleOauth2Verify = async ({ code }: { code: string }) => {
    return await googleOauth2Verify({ variables: { code } });
  };
  const { isLoggin, setIsLoggin } = useContext(ApolloClientCtx);

  const { setUser, setLoading } = useContext(AuthContext);
  useEffect(() => {
    if (data && data.googleOauth2Verify) {
      sessionStorage.setItem("authToken", data.googleOauth2Verify.jwt);
      setIsLoggin(true);
      setUser(data.googleOauth2Verify.user);
      replace("/");
    }
    setLoading(loading);
    setLoading(loading);
  }, [data, loading]);
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
    googleOauth2Verify: GQLGoogleOauth2Verify,
    data: data?.googleOauth2Verify,
    error,
    loading,
  };
};
