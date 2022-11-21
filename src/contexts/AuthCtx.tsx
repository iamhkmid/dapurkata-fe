import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { CHECK_USER } from "../graphql/auth/queries";
import { SHOPPINGCART } from "../graphql/shoppingCart/queries";
import { TGqlCheckUser } from "../types/auth";
import { TAuthContext } from "../types/context";
import { TCart, TGQLShoppingCart } from "../types/shoppingCart";
import { TAuthUser } from "../types/user";
import { ApolloClientCtx } from "./ApolloClientCtx";

export const AuthContext = createContext<TAuthContext>(undefined);
const AuthContextProvider: FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState<TAuthUser>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggin, setIsLoggin } = useContext(ApolloClientCtx);
  const [error, setError] = useState<string>(null);
  const { pathname } = useRouter();

  const {
    data,
    loading,
    error: apolloError,
  } = useQuery<TGqlCheckUser>(CHECK_USER, {
    errorPolicy: "all",
  });

  useEffect(() => {
    if (data && data.checkUser) {
      setUser(data.checkUser);
      setIsLoggin(true);
    } else {
      setUser(null);
    }
    setIsLoading(loading);
  }, [data, loading]);

  useEffect(() => {
    const isAdminPath = pathname.slice(0, 7) === "/admin/";
    const isUserPath = pathname.slice(0, 3) === "/u/";
    const isReqAuth = isAdminPath || isUserPath;
    if (apolloError && isReqAuth) {
      setError(apolloError.message);
    }
  }, [apolloError]);

  const values = {
    loading: isLoading,
    setLoading: setIsLoading,
    user,
    setUser,
    error,
    setError,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
