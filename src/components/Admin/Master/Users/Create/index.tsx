import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect, useRef } from "react";
import * as El from "./CreateElement";
import { useGQLCreateUser } from "../useGQLUser";
import { TFormCreateUser } from "../../../../../types/user";
import FormsControl from "../../../../otherComps/Forms/FormsControl";
import ShowMessage from "../../../../otherComps/ShowMessage";
import Button from "../../../../otherComps/Buttons/Button";

const Create = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  const { register, handleSubmit, formState, setError } =
    useForm<TFormCreateUser>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });

  const { isDirty, isValid, errors } = formState;
  const { createUser, data, error, loading } = useGQLCreateUser();
  const onSubmit = async (values: TFormCreateUser) => {
    createUser(values)
      .then(() => {})
      .catch(() => {});
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ShowMessage message={error?.message} color="danger" />
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <El.InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="firstName"
              ref={htmlElRef}
              register={register}
              label="Nama Depan"
              error={errors.firstName ? true : false}
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
              disabled={loading}
              message={errors.lastName ? errors.lastName.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="username"
              register={register}
              label="Username"
              error={errors.username ? true : false}
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
              disabled={loading}
              message={errors.email ? errors.email.message : null}
            />
            <FormsControl
              control="input"
              type="password"
              name="password"
              register={register}
              label="Password"
              error={errors.password ? true : false}
              disabled={loading}
              message={errors.password ? errors.password.message : null}
            />
            <FormsControl
              control="input"
              type="password"
              name="confirmPassword"
              register={register}
              label="Konfirmasi Password"
              error={errors.confirmPassword ? true : false}
              disabled={loading}
              message={
                errors.confirmPassword ? errors.confirmPassword.message : null
              }
            />
          </El.InputGroup>
          <El.InputGroup>
            <FormsControl
              control="input"
              type="number"
              name="phone"
              register={register}
              label="Phone"
              error={errors.phone ? true : false}
              disabled={loading}
              message={errors.phone ? errors.phone.message : null}
            />
            <FormsControl
              control="file"
              name="userPic"
              register={register}
              ref={htmlElRef[5]}
              label="Foto Profil"
              accept="image/jpeg, image/png"
              error={errors.userPic ? true : false}
              disabled={loading}
              message={errors.userPic ? errors.userPic.message : null}
            />
          </El.InputGroup>
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            isLoading={loading}
            disabled={!isDirty || !isValid || loading}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default Create;
