import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import {
  CHANGE_ROLE,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../../../../graphql/user/mutations";
import {
  INIT_DATA_UPDATE_USER,
  USERS_ADMIN_LIST,
  USER_CHANGE_ROLE_DATA,
  USER_DEL_DATA,
  USER_DETAIL_BY_ADMIN,
  USER_SHOPPINGCART_BY_ADMIN,
  USER_WISHLIST_BY_ADMIN,
} from "../../../../graphql/user/queries";
import {
  ONLINE_USERS,
  ONLINE_USER_QUERY,
} from "../../../../graphql/dashboard/queries";
import { TGQLOnlineUsersQuery } from "../../../../types/dashboard";
import {
  TFormCreateUser,
  TFormUpdateUser,
  TGQLChangeRole,
  TGQLDataChangeRole,
  TGQLDataDelUser,
  TGQLUpdateUser,
  TGQLUserAdminList,
  TGQLUserDetailByAdmin,
  TGQLUserShoppingcartByAdmin,
  TGQLUserWishlistByAdmin,
  TInitDataUpdateUser,
  TUpdateUserVal,
} from "../../../../types/user";
import {
  TOrderListsUser,
  TOrderListUserByAdmin,
} from "../../../../types/transaction";
import { ORDER_LIST_USER_BY_ADMIN } from "../../../../graphql/transaction/queries";
import {
  TAddressListByAdmin,
  TGQLRecipient,
  TRecipients,
} from "../../../../types/recipient";
import {
  ADDRESS_LIST_BY_ADMIN,
  RECIPIENT,
  RECIPIENTS,
} from "../../../../graphql/recipient/queries";

type TUserDetailByAdmin = {
  userId: string;
};
export const useGQLUserDetail = (props: TUserDetailByAdmin) => {
  const { userId } = props;
  const { data, error, loading } = useQuery<TGQLUserDetailByAdmin>(
    USER_DETAIL_BY_ADMIN,
    {
      variables: { userId },
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );
  return { data: data?.user, error, loading };
};

export const useGQLUsersAL = () => {
  const { data, error, loading } = useQuery<TGQLUserAdminList>(
    USERS_ADMIN_LIST,
    {
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );
  const newData = data?.users || [];
  return { data: newData, error, loading };
};
export const useGQLCreateUser = () => {
  const [createUser, { data, error, loading }] = useMutation(CREATE_USER, {
    errorPolicy: "all",
  });
  const GQLCreateUser = async (values: TFormCreateUser) => {
    const { userPic, confirmPassword, ...rest } = values;
    const [pic] = userPic;
    const variables = { userPic: pic, data: { ...rest } };
    return await createUser({
      variables,
      refetchQueries: [{ query: USERS_ADMIN_LIST }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createUser: GQLCreateUser,
    data: data?.createUser,
    error,
    loading,
  };
};

type TDelUserVal = { userId: string; username: string };
type TDelMut = { deleteUser: { id: string } };
export const useGQLDeleteUser = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [deleteUser, { data, error, loading }] = useMutation<TDelMut>(
    DELETE_USER,
    {
      errorPolicy: "all",
    }
  );
  const GQLDeleteUser = async (values: TDelUserVal) => {
    return deleteUser({
      variables: values,
      refetchQueries: [{ query: USERS_ADMIN_LIST }],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (!!data?.deleteUser) {
      dispatch({ type: "CLOSE_ALL_POPUP" });
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: "Berhasil menghapus data", color: "success" },
      });
    }
  }, [data?.deleteUser]);
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { color: "danger", message: error.message },
      });
    }
  }, [error]);
  return {
    deleteUser: GQLDeleteUser,
    data: data?.deleteUser,
    error,
    loading,
  };
};

export const useGQLUserDelData = (values: { userId: string }) => {
  const { data, error, loading } = useQuery<TGQLDataDelUser>(USER_DEL_DATA, {
    variables: values,
    errorPolicy: "all",
  });

  return { data: data && data.user, error, loading };
};

type TUpdateUser = {
  userId: string;
};
export const useGQLInitData = ({ userId }: TUpdateUser) => {
  const { data, error, loading } = useQuery<TInitDataUpdateUser>(
    INIT_DATA_UPDATE_USER,
    {
      variables: { userId },
      fetchPolicy: "network-only",
      errorPolicy: "all",
    }
  );
  return { data: data?.user, error, loading };
};

export const useGQLUpdateUser = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [updateUser, { data, error, loading }] = useMutation<TGQLUpdateUser>(
    UPDATE_USER,
    {
      errorPolicy: "all",
      awaitRefetchQueries: true,
    }
  );
  const GQLUpdateUser = async (values: TUpdateUserVal) => {
    const { userId, ...rest } = values;
    return await updateUser({
      variables: { userId, data: { ...rest } },
      refetchQueries: [{ query: USER_DETAIL_BY_ADMIN, variables: { userId } }],
    });
  };
  useEffect(() => {
    if (data?.updateUser)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          color: "success",
          message: "Berhasil ubah data pengguna",
        },
      });
  }, [data?.updateUser]);
  return {
    updateUser: GQLUpdateUser,
    data: data?.updateUser,
    error,
    loading,
  };
};

export const useGQLOnlineUserQuery = () => {
  const { data, error, loading, subscribeToMore } =
    useQuery<TGQLOnlineUsersQuery>(ONLINE_USERS, {
      errorPolicy: "all",
      fetchPolicy: "network-only",
    });
  return {
    data: data?.onlineUsers || [],
    error,
    loading,
    subscribeToMore,
  };
};

export const useGQLChangeRole = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [changeRole, { data, error, loading }] = useMutation<TGQLChangeRole>(
    CHANGE_ROLE,
    {
      errorPolicy: "all",
      fetchPolicy: "network-only",
      awaitRefetchQueries: true,
    }
  );
  type TGQLchangeRole = {
    userId: string;
    password: string;
    role: string;
  };
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { color: "danger", message: error.message },
      });
    }
  }, [error]);
  const GQLchangeRole = async (variables: TGQLchangeRole) => {
    return await changeRole({
      variables,
      refetchQueries: [
        {
          query: USER_DETAIL_BY_ADMIN,
          variables: { userId: variables.userId },
        },
      ],
    });
  };
  return {
    changeRole: GQLchangeRole,
    data: data?.changeRole,
    error,
    loading,
  };
};

export const useGQLUserChangeRoleData = (values: { userId: string }) => {
  const { data, error, loading } = useQuery<TGQLDataChangeRole>(
    USER_CHANGE_ROLE_DATA,
    {
      variables: values,
      errorPolicy: "all",
    }
  );

  return { data: data?.user, error, loading };
};

export const useGQLWishlist = (props: TUserDetailByAdmin) => {
  const { userId } = props;
  const { data, error, loading } = useQuery<TGQLUserWishlistByAdmin>(
    USER_WISHLIST_BY_ADMIN,
    {
      variables: { userId },
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );
  return { data: data?.user?.Wishlist?.Book || [], error, loading };
};

export const useGQLShoppingcart = (props: TUserDetailByAdmin) => {
  const { userId } = props;
  const { data, error, loading } = useQuery<TGQLUserShoppingcartByAdmin>(
    USER_SHOPPINGCART_BY_ADMIN,
    {
      variables: { userId },
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );
  return { data: data?.user?.ShoppingCart || [], error, loading };
};

type TGQLOrderListsUser = {
  userId: string;
};
export const useGQLOrderListsUser = ({ userId }: TGQLOrderListsUser) => {
  const { data, error, loading } = useQuery<TOrderListUserByAdmin>(
    ORDER_LIST_USER_BY_ADMIN,
    {
      variables: { userId },
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );
  const newData = data?.ordersListUsers || [];
  return { data: newData, error, loading };
};

type TuseGQLRecipients = {
  userId: string;
};
export const useGQLRecipients = (props: TuseGQLRecipients) => {
  const { data, loading, error } = useQuery<TAddressListByAdmin>(
    ADDRESS_LIST_BY_ADMIN,
    {
      errorPolicy: "all",
      fetchPolicy: "network-only",
      variables: { userId: props.userId },
    }
  );

  return {
    data: data?.recipients,
    loading,
    error,
  };
};
type TGetRecipient = {
  recipientId: string;
};
export const useGQLRecipient = (props: TGetRecipient) => {
  const { recipientId } = props;
  const { data, error, loading } = useQuery<TGQLRecipient>(RECIPIENT, {
    variables: { recipientId },
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });
  return { data: data?.recipient, error, loading };
};
