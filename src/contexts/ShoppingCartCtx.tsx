import { useQuery } from "@apollo/client";
import { useContext, useReducer } from "react";
import { createContext, FC, ReactNode, useEffect } from "react";
import { SHOPPINGCART } from "../graphql/shoppingCart/queries";
import { TShoppingCartCtx } from "../types/context";
import { TGQLShoppingCart } from "../types/shoppingCart";
import { AuthContext } from "./AuthCtx";
import { reducer, initialValue } from "../reducer/shoppingCart";

export const ShoppingCartCtx = createContext<TShoppingCartCtx>(undefined);
const ShoppingCartCtxProvider: FC<ReactNode> = ({ children }) => {
  const [shoppingCart, dispatch] = useReducer(reducer, initialValue);
  const { user } = useContext(AuthContext);

  const { data, error, loading } = useQuery<TGQLShoppingCart>(SHOPPINGCART, {
    skip: !user,
    errorPolicy: "all",
  });

  useEffect(() => {
    dispatch({ type: "SET_LOADING_SCART", value: loading });
    dispatch({ type: "SET_ERROR_SCART", value: error });
    if (data && data.shoppingCart) {
      dispatch({ type: "SET_SCART", value: data.shoppingCart });
      const weight = data.shoppingCart.reduce(
        (acc, curr) => acc + curr.Book.weight * curr.amount,
        0
      );
      dispatch({ type: "SET_SCART_WEIGHT", value: weight });
    }
  }, [data, loading, error]);

  return (
    <ShoppingCartCtx.Provider value={{ shoppingCart, dispatch }}>
      {children}
    </ShoppingCartCtx.Provider>
  );
};

export default ShoppingCartCtxProvider;
