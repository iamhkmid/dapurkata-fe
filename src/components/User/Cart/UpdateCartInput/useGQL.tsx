import { useMutation } from "@apollo/client";
import { EDIT_SHOPPING_CART } from "../../../../graphql/shoppingCart/mutations";
import { TGQLUpdateShoppingCart } from "../../../../types/shoppingCart";

export const useGQLUpdateSCart = () => {
  const [updateShoppingCart, { data, error, loading }] =
    useMutation<TGQLUpdateShoppingCart>(EDIT_SHOPPING_CART, {
      errorPolicy: "all",
    });

  type TUpdateSCart = {
    cartId: string;
    amount: number;
  };
  const GQLUpdateSCart = async ({ cartId, amount }: TUpdateSCart) => {
    try {
      await updateShoppingCart({ variables: { cartId, amount } });
    } catch (err) {}
  };
  return {
    updateSCart: GQLUpdateSCart,
    data: data && data.updateShoppingCart,
    error,
    loading,
  };
};
