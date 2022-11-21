import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../contexts/AdminNavCtx";
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../../../../../graphql/category/mutations";
import { CATEGORIES, CATEGORY } from "../../../../../graphql/category/queries";
import {
  TFormCreateCategory,
  TFormUpdateCategory,
  TGQLCategories,
  TGQLCategory,
  TGQLCreateCategory,
  TGQLDeleteCategory,
  TGQLUpdateCategory,
  TValCreateCategory,
  TValUpdateCategory,
} from "../../../../../types/category";

export const useGQLCategories = () => {
  const { data, error, loading } = useQuery<TGQLCategories>(CATEGORIES, {
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });
  const newData = data ? data.categories : [];
  return { data: newData, error, loading };
};

export const useGQLCategory = (values: { categoryId: string }) => {
  const { data, error, loading } = useQuery<TGQLCategory>(CATEGORY, {
    variables: values,
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });
  return { data: data?.category, error, loading };
};

export const useGQLCreateCategory = () => {
  const [createCategory, { data, error, loading }] =
    useMutation<TGQLCreateCategory>(CREATE_CATEGORY, {
      errorPolicy: "all",
    });
  const GQLCreateCategory = async (values: TValCreateCategory) => {
    return await createCategory({
      variables: { data: { ...values } },
      refetchQueries: [{ query: CATEGORIES }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createCategory: GQLCreateCategory,
    data: data && data.createCategory,
    error,
    loading,
  };
};

type TGQLCategoryArgs = {
  id: string;
  name: string;
  group: string;
};
export const useGQLUpdateCategory = () => {
  const [updateCategory, { data, error, loading }] =
    useMutation<TGQLUpdateCategory>(UPDATE_CATEGORY, {
      errorPolicy: "all",
    });
  const GQLUpdateCategory = async (values: TValUpdateCategory) => {
    const { categoryId, ...rest } = values;
    return await updateCategory({
      variables: { categoryId, data: { ...rest } },
    });
  };
  return {
    updateCategory: GQLUpdateCategory,
    data: data && data.updateCategory,
    error,
    loading,
  };
};

export const useGQLDeleteCategory = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [deleteCategory, { data, error, loading }] =
    useMutation<TGQLDeleteCategory>(DELETE_CATEGORY, {
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
  const GQLDeleteCategory = async (values: { categoryId: string }) => {
    return await deleteCategory({
      variables: values,
      refetchQueries: [{ query: CATEGORIES }],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (!!data?.deleteCategory) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: "Berhasil menghapus data", color: "success" },
      });
    }
  }, [data?.deleteCategory]);
  return {
    deleteCategory: GQLDeleteCategory,
    data: data?.deleteCategory,
    error,
    loading,
  };
};
