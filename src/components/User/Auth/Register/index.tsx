import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useEffect, useRef } from "react";
import { TFormCreateUser } from "../../../../types/user";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import Button from "../../../otherComps/Buttons/Button";
import ButtonLink from "../../../otherComps/Buttons/ButtonLink";
import ThemeContextProvider from "../../../../contexts/ThemeCtx";
import LoadingWrapper from "../../../otherComps/Loading/LoadingWrapper";
import * as El from "./RegisterElement";
import { DateSingleInput } from "@datepicker-react/styled";
import ShowMessage from "../../../otherComps/ShowMessage";
import { useGQLCreateUser } from "./useGQL";

const Register = () => {
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
    createUser(values);
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <El.CompTittle>Buat akun baru</El.CompTittle>
        <El.Form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          autoComplete="off"
        >
          <El.FormWrapper>
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
                autoComplete="off"
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
                autoComplete="off"
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
          </El.FormWrapper>
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Daftar"
              isLoading={loading}
              disabled={!isDirty || !isValid || loading}
            />
            <ButtonLink name="Masuk" link="/auth/login" />
          </El.SubmitWrapper>
        </El.Form>
      </El.Container>
    </El.Main>
  );
};
export default Register;
