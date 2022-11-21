import { useMutation } from "@apollo/client";
import { useContext, useEffect } from "react";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import { DELETE_WISHLIST } from "../../../../../graphql/wishlist/mutations";
import { WISHLIST } from "../../../../../graphql/wishlist/queries";
import { TGQLDeleteWishlist } from "../../../../../types/wishlist";

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
