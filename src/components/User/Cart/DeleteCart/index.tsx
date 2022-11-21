import { useMutation } from "@apollo/client";
import { useContext, useEffect } from "react";
import { DELETE_SHOPPING_CART } from "../../../../graphql/shoppingCart/mutations";
import { SHOPPINGCART } from "../../../../graphql/shoppingCart/queries";
import { AuthContext } from "../../../../contexts/AuthCtx";
import IconsControl from "../../../IconsControl";
import * as El from "./DeleteCartElement";
import { TGQLDeleteShoppingCart } from "../../../../types/shoppingCart";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";

const DeleteCart = ({ cartId }) => {
  const { user } = useContext(AuthContext);
  const { shoppingCart, dispatch } = useContext(ShoppingCartCtx);
  const [deleteShoppingCart, { loading }] = useMutation<TGQLDeleteShoppingCart>(
    DELETE_SHOPPING_CART,
    {
      errorPolicy: "none",
      fetchPolicy: "no-cache",
    }
  );
  useEffect(() => {
    if (loading)
      dispatch({
        type: "SET_LOADING_SCART",
        value: loading,
      });
  }, [loading]);

  const handler = () => {
    deleteShoppingCart({
      variables: { cartId },
      refetchQueries: [{ query: SHOPPINGCART, variables: { userId: user.id } }],
      awaitRefetchQueries: true,
    });
  };

  return (
    <El.Main onClick={() => handler()} disabled={shoppingCart.loading}>
      {IconsControl("BAG-REMOVE-OUTLINE")}
    </El.Main>
  );
};

export default DeleteCart;
