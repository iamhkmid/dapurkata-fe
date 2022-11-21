import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { GET_BOOK_DETAIL } from "../../../../graphql/book/queries";
import { CREATE_SHOPPING_CART } from "../../../../graphql/shoppingCart/mutations";
import { SHOPPINGCART } from "../../../../graphql/shoppingCart/queries";
import {
  ADD_WISHLIST,
  DELETE_WISHLIST,
} from "../../../../graphql/wishlist/mutations";
import { WISHLIST } from "../../../../graphql/wishlist/queries";
import { TGQLBookDetail } from "../../../../types/book";
import { TGQLCreateShoppingCart } from "../../../../types/shoppingCart";
import {
  TGQLAddWishlist,
  TGQLDeleteWishlist,
} from "../../../../types/wishlist";

export const useGQLGetbook = ({ bookId }) => {
  const { data, loading, error } = useQuery<TGQLBookDetail>(GET_BOOK_DETAIL, {
    skip: !bookId,
    variables: { bookId },
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });

  return { dataGB: data?.book, loadGB: loading, errorGB: error };
};

export const useGQLCreateSC = () => {
  const { push, pathname } = useRouter();
  const { user } = useContext(AuthContext);
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const { dispatch: dispatchSCart } = useContext(ShoppingCartCtx);
  const [createShoppingCart, { data, loading, error }] =
    useMutation<TGQLCreateShoppingCart>(CREATE_SHOPPING_CART, {
      errorPolicy: "all",
    });

  type TCreateSC = {
    bookId: string;
    amount: number;
    weight: number;
  };
  const createSC = async ({ bookId, amount }: TCreateSC) => {
    if (!user) {
      push(`/auth/login?next=${pathname}`);
      dispatchUserNav({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Anda harus login terlebih dahulu",
          color: "warning",
        },
      });
      dispatchUserNav({ type: "CLOSE_POPUP" });
    } else {
      await createShoppingCart({
        variables: { bookId, amount },
        refetchQueries: [
          { query: SHOPPINGCART, variables: { userId: user.id } },
        ],
        awaitRefetchQueries: true,
      });
    }
  };

  useEffect(() => {
    if (error)
      dispatchUserNav({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: error.message, color: "warning" },
      });
  }, [error]);

  useEffect(() => {
    dispatchSCart({
      type: "SET_LOADING_SCART",
      value: loading,
    });
  }, [loading]);
  return {
    createShoppingCart: createSC,
    data: data?.createShoppingCart,
    error,
    loading,
  };
};

export const useGQLAddWishlist = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const [addWishlist, { data, loading, error }] = useMutation<TGQLAddWishlist>(
    ADD_WISHLIST,
    {
      errorPolicy: "all",
      refetchQueries: [{ query: WISHLIST }],
      awaitRefetchQueries: true,
    }
  );

  useEffect(() => {
    if (error)
      dispatchUserNav({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: error.message, color: "warning" },
      });
  }, [error]);
  type TAddWishlist = { bookId: string };
  const GQLAddWishlist = async ({ bookId }: TAddWishlist) => {
    addWishlist({ variables: { bookId } });
  };
  return { addWishlist: GQLAddWishlist, data, error, loading };
};

export const useGQLDeleteWishlist = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const [deleteWishlist, { data, loading, error }] =
    useMutation<TGQLDeleteWishlist>(DELETE_WISHLIST, {
      errorPolicy: "all",
      refetchQueries: [{ query: WISHLIST }],
      awaitRefetchQueries: true,
    });

  useEffect(() => {
    if (error)
      dispatchUserNav({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: error.message, color: "warning" },
      });
  }, [error]);
  type TDeleteWishlist = { bookId: string };
  const GQLDeleteWishlist = async ({ bookId }: TDeleteWishlist) => {
    deleteWishlist({ variables: { bookId } });
  };
  return { deleteWishlist: GQLDeleteWishlist, data, error, loading };
};
