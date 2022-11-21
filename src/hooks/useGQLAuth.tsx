import { useMutation } from "@apollo/client";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { LOGIN } from "../graphql/auth/mutations";
import { TGQLFormSignin, TGqlSignin } from "../types/auth";
import { AuthContext } from "../contexts/AuthCtx";
import { ApolloClientCtx, client } from "../contexts/ApolloClientCtx";
import { useState } from "react";
import { ShoppingCartCtx } from "../contexts/ShoppingCartCtx";
import { OrderCtx } from "../contexts/OrderCtx";

export const useSignIn = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const { isLoggin, setIsLoggin } = useContext(ApolloClientCtx);
  const [login, { error, data, loading }] = useMutation<TGqlSignin>(LOGIN, {
    errorPolicy: "all",
  });

  const { setUser, setLoading } = useContext(AuthContext);
  useEffect(() => {
    if (data && data.login) {
      if (rememberMe) {
        localStorage.setItem("authToken", data.login.jwt);
      } else {
        sessionStorage.setItem("authToken", data.login.jwt);
      }
      setUser(data.login.user);
      setIsLoggin(true);
    }
    setLoading(loading);
  }, [data, loading]);

  const signIn = async (values: TGQLFormSignin) => {
    try {
      setRememberMe(values.rememberMe);
      await login({ variables: { ...values } });
    } catch (error) {}
  };

  return { signIn, data, error, loading };
};

export const useLogOut = () => {
  const { setUser } = useContext(AuthContext);
  const sc = useContext(ShoppingCartCtx);
  const order = useContext(OrderCtx);
  const { setIsLoggin } = useContext(ApolloClientCtx);
  const logOut = async () => {
    await client.clearStore();
    setIsLoggin(false);
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    sc?.dispatch({ type: "CLEAR_SCART" });
    order?.dispatch({ type: "CLEAR_ORDER" });
    Router.replace("/auth/login");
    setUser(null);
  };
  return { logOut };
};
