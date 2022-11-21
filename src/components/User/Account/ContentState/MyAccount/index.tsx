import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import { TFormMyAccount } from "../../../../../types/user";
import Button from "../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../otherComps/Forms/FormsControl";
import ImageResponsive from "../../../../otherComps/ImageResponsive";
import LoadingProfile from "../../../../otherComps/Loading/LoadingProfile";
import * as El from "./MyAccountElement";
import PhotoProfile from "./PhotoProfile";
import {
  useGQLChangeUserPic,
  useGQLDeleteUserPic,
  useGQLInitData,
  useGQLUpdateUser,
} from "./useGQL";
import { validationSchema } from "./validationScema";

const MyAccount = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);

  const {
    data: dataInit,
    loading: loadInit,
    error: errorInit,
  } = useGQLInitData();
  const { register, handleSubmit, formState, setError, setValue } =
    useForm<TFormMyAccount>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });
  const { isDirty, isValid, errors } = formState;

  const { updateUser, data, error, loading } = useGQLUpdateUser();
  const { changeUserPic, loading: loadCUP } = useGQLChangeUserPic();
  const { deleteUserPic, loading: loadDUP } = useGQLDeleteUserPic();

  const onSubmit = async (values: TFormMyAccount) => {
    setMessage(null);
    updateUser(values).catch(() => {});
  };

  type TMessage = { value: string; color: "danger" | "success" | "warning" };
  const [message, setMessage] = useState<TMessage>(null);

  useEffect(() => {
    if (error) {
      setMessage({ value: error?.message, color: "danger" });
    } else if (!!data) {
      setMessage({ value: "Berhasil update data user", color: "success" });
    }
  }, [data, error]);

  useEffect(() => {
    if (dataInit) {
      setValue("firstName", dataInit.firstName);
      setValue("lastName", dataInit.lastName);
      setValue("username", dataInit.username);
      setValue("email", dataInit.email);
      setValue("phone", dataInit.phone);
    }
  }, [dataInit]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Head>
        <PhotoProfile userPicture={dataInit?.userPicture} />
      </El.Head>
      <El.FormWrapper>
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <El.InputGroup2>
            <FormsControl
              control="input"
              type="text"
              name="firstName"
              register={register}
              label="Nama Depan"
              error={errors.firstName ? true : false}
              isLoading={loadInit}
              disabled={loading}
              message={errors.firstName ? errors.firstName.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="lastName"
              register={register}
              label="Nama Belakang"
              error={errors.lastName ? true : false}
              isLoading={loadInit}
              disabled={loading}
              message={errors.lastName ? errors.lastName.message : null}
            />
          </El.InputGroup2>
          <El.InputGroup3>
            <FormsControl
              control="input"
              type="number"
              name="phone"
              register={register}
              label="Phone"
              error={errors.phone ? true : false}
              isLoading={loadInit}
              disabled={loading}
              message={errors.phone ? errors.phone.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="username"
              register={register}
              label="Username"
              error={errors.username ? true : false}
              isLoading={loadInit}
              disabled={loading}
              message={errors.username ? errors.username.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="email"
              register={register}
              label="Email"
              error={errors.email ? true : false}
              isLoading={loadInit}
              disabled={loading}
              message={errors.email ? errors.email.message : null}
            />
          </El.InputGroup3>
          <El.ButtonLink
            onClick={() =>
              dispatchUserNav({
                type: "SHOW_POPUP",
                value: { name: "CHANGE_PASSWORD" },
              })
            }
          >
            Ubah password
          </El.ButtonLink>
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Simpan"
              isLoading={loadInit || loading}
            />
          </El.SubmitWrapper>
        </El.Form>
      </El.FormWrapper>
    </El.Main>
  );
};

export default MyAccount;
