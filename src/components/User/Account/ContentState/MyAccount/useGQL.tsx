import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import {
  CHANGE_USER_PIC,
  DELETE_USER_PIC,
  UPDATE_USER_BY_USER,
} from "../../../../../graphql/user/mutations";
import { INIT_DATA_MY_ACCOUNT } from "../../../../../graphql/user/queries";
import { TFormMyAccount, TGQLUpdateUser } from "../../../../../types/user";

type TInitData = {
  user: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    userPicture: string;
  };
};

export const useGQLInitData = () => {
  const { user } = useContext(AuthContext);
  const { data, error, loading } = useQuery<TInitData>(INIT_DATA_MY_ACCOUNT, {
    skip: !user,
    variables: { userId: user?.id },
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });
  return { data: data?.user, error, loading };
};

export const useGQLUpdateUser = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);
  const [updateUser, { data, error, loading }] = useMutation<TGQLUpdateUser>(
    UPDATE_USER_BY_USER,
    {
      errorPolicy: "all",
    }
  );
  const GQLUpdateUser = async (values: TFormMyAccount) => {
    return await updateUser({
      variables: { userId: user?.id, data: values },
      refetchQueries: [
        { query: INIT_DATA_MY_ACCOUNT, variables: { userId: user?.id } },
      ],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (data?.updateUser)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Berhasil menyimpan data",
          color: "success",
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

type TchangePic = {
  changeUserPic: { message: string };
};

export const useGQLChangeUserPic = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);
  const [changeUserPic, { data, loading, error }] = useMutation<TchangePic>(
    CHANGE_USER_PIC,
    {
      errorPolicy: "all",
    }
  );
  const changePic = async ({ userPic }: { userPic: any }) => {
    return await changeUserPic({
      variables: { userPic },
      refetchQueries: [
        { query: INIT_DATA_MY_ACCOUNT, variables: { userId: user?.id } },
      ],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (data?.changeUserPic)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Berhasil ubah foto",
          color: "success",
        },
      });
  }, [data?.changeUserPic]);

  useEffect(() => {
    if (error)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: error.message,
          color: "danger",
        },
      });
  }, [error]);

  return {
    changeUserPic: changePic,
    data: data?.changeUserPic,
    loading,
    error,
  };
};

type TDeletePic = {
  deleteUserPic: { message: string };
};

export const useGQLDeleteUserPic = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);
  const [deleteUsePic, { data, loading, error }] = useMutation<TDeletePic>(
    DELETE_USER_PIC,
    {
      errorPolicy: "all",
    }
  );
  const DeletePic = async () => {
    return await deleteUsePic({
      refetchQueries: [
        { query: INIT_DATA_MY_ACCOUNT, variables: { userId: user?.id } },
      ],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (data?.deleteUserPic)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: data.deleteUserPic.message,
          color: "success",
        },
      });
  }, [data?.deleteUserPic]);

  useEffect(() => {
    if (error)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Gagal hapus foto",
          color: "danger",
        },
      });
  }, [error]);
  return {
    deleteUserPic: DeletePic,
    data: data?.deleteUserPic,
    loading,
    error,
  };
};
