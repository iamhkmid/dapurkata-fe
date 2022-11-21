import { useQuery } from "@apollo/client";
import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import { TWishlistCtx } from "../types/context";
import { WISHLIST } from "../graphql/wishlist/queries";
import { TGQLWishlistQuery } from "../types/wishlist";
import { AuthContext } from "./AuthCtx";

export const WishlistCtx = createContext<TWishlistCtx>(undefined);
const WishlistCtxProvider: FC<ReactNode> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery<TGQLWishlistQuery>(WISHLIST, {
    skip: !user,
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });

  return (
    <WishlistCtx.Provider value={{ wishlist: data?.wishlist, loading, error }}>
      {children}
    </WishlistCtx.Provider>
  );
};

export default WishlistCtxProvider;
