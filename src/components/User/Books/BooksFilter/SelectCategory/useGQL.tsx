import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import { CATEGORIES_BY_USER } from "../../../../../graphql/category/queries";
import { TGQLCategories } from "../../../../../types/category";

export const useGQLCategories = () => {
  const { dispatch } = useContext(UserNavCtx);
  const { data, loading, error } = useQuery<TGQLCategories>(
    CATEGORIES_BY_USER,
    {
      errorPolicy: "all",
      fetchPolicy: "cache-first",
      variables: { isEnabled: true },
    }
  );
  useEffect(() => {
    if (error)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: error?.message, color: "danger" },
      });
  }, [error]);
  return {
    data: data?.categories,
    loading,
    error,
  };
};
