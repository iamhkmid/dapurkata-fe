import { useMutation, useQuery } from "@apollo/client";
import {
  PUBLISHER,
  PUBLISHERS,
} from "../../../../../graphql/publisher/queries";
import {
  CREATE_PUBLISHER,
  DELETE_PUBLISHER,
  UPDATE_PUBLISHER,
} from "../../../../../graphql/publisher/mutations";
import {
  TGQLPublisher,
  TGQLPublishers,
  TGQLCreatePublisher,
  TGQLDeletePublisher,
  TGQLUpdatePublisher,
  TValCreatePublisher,
  TValUpdatePublisher,
} from "../../../../../types/publisher";

export const useGQLPublishers = () => {
  const { data, error, loading } = useQuery<TGQLPublishers>(PUBLISHERS, {
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });
  const newData = data?.publishers || [];
  return { data: newData, error, loading };
};

export const useGQLPublisher = (values: { publisherId: string }) => {
  const { data, error, loading } = useQuery<TGQLPublisher>(PUBLISHER, {
    variables: values,
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });
  return { data: data && data.publisher, error, loading };
};

export const useGQLCreatePublisher = () => {
  const [createPublisher, { data, error, loading }] =
    useMutation<TGQLCreatePublisher>(CREATE_PUBLISHER, {
      errorPolicy: "all",
    });
  const GQLCreatePublisher = async (values: TValCreatePublisher) => {
    return await createPublisher({
      variables: { data: { ...values } },
      refetchQueries: [{ query: PUBLISHERS }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createPublisher: GQLCreatePublisher,
    data: data?.createPublisher,
    error,
    loading,
  };
};

export const useGQLUpdatePublisher = () => {
  const [updatePublisher, { data, error, loading }] =
    useMutation<TGQLUpdatePublisher>(UPDATE_PUBLISHER, {
      errorPolicy: "all",
    });
  const GQLUpdatePublisher = async (values: TValUpdatePublisher) => {
    const { publisherId, name } = values;
    return await updatePublisher({
      variables: { publisherId, data: { name } },
    });
  };
  return {
    updatePublisher: GQLUpdatePublisher,
    data: data?.updatePublisher,
    error,
    loading,
  };
};

export const useGQLDeletePublisher = () => {
  const [deletePublisher, { data, error, loading }] =
    useMutation<TGQLDeletePublisher>(DELETE_PUBLISHER, {
      errorPolicy: "all",
    });
  const GQLDeletePublisher = async (values: { publisherId: string }) => {
    return await deletePublisher({
      variables: values,
      refetchQueries: [{ query: PUBLISHERS }],
      awaitRefetchQueries: true,
    });
  };
  return {
    deletePublisher: GQLDeletePublisher,
    data: data && data.deletePublisher,
    error,
    loading,
  };
};
