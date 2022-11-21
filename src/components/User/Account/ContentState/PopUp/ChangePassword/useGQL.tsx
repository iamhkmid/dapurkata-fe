import { useMutation } from "@apollo/client";
import { CHANGE_PASSWORD } from "../../../../../../graphql/user/mutations";
import { TChangePassVar } from "../../../../../../types/user";

type TchangePass = {
  ChangePassword: { message: string };
};

export const useGQLChangePassword = () => {
  const [changePassword, { data, loading, error }] = useMutation<TchangePass>(
    CHANGE_PASSWORD,
    {
      errorPolicy: "all",
    }
  );
  const changePass = async (data: TChangePassVar) => {
    return await changePassword({
      variables: { data },
    });
  };
  return {
    changePassword: changePass,
    data: data?.ChangePassword,
    loading,
    error,
  };
};
