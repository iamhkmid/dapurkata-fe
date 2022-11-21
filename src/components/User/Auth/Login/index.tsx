import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect, useRef, useState } from "react";
import { TGQLFormSignin } from "../../../../types/auth";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import Button from "../../../otherComps/Buttons/Button";
import ButtonLink from "../../../otherComps/Buttons/ButtonLink";
import * as El from "./LoginElement";
import { useSignIn } from "../../../../hooks/useGQLAuth";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import IconsControl from "../../../IconsControl";
import { useRouter } from "next/router";
import { useGQLGoogleOauth2Verify } from "./useGQL";
import Loading2 from "../../../otherComps/Loading/Loading2";

const Login = () => {
  const { dispatch } = useContext(UserNavCtx);
  const { query, push } = useRouter();
  const htmlElRef = useRef<{ focus: () => void }>();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  const { register, handleSubmit, formState, setError } =
    useForm<TGQLFormSignin>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });

  const { isDirty, isValid, errors } = formState;
  const { signIn, loading, error, data } = useSignIn();
  const onSubmit = async (values: TGQLFormSignin) => {
    await signIn(values);
  };
  const {
    googleOauth2Verify,
    data: dataGOV,
    error: errorGOV,
    loading: loadingGOV,
  } = useGQLGoogleOauth2Verify();

  useEffect(() => {
    if (query.code as string) {
      googleOauth2Verify({ code: query.code as string });
    }
  }, [query?.code]);

  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: error.message,
          color: "danger",
        },
      });
    }
  }, [error]);
  useEffect(() => {
    // htmlElRef.current.focus();
  }, []);

  return (
    <El.Main>
      <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <El.CompTittle>Login</El.CompTittle>
        <El.Form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          autoComplete="off"
        >
          <FormsControl
            control="input"
            type="text"
            name="username"
            ref={htmlElRef}
            register={register}
            label="Username"
            disabled={loading || loadingGOV}
            withIcon={true}
            error={errors.username ? true : false}
            message={errors.username ? errors.username.message : null}
          />
          <FormsControl
            control="input"
            type="password"
            name="password"
            register={register}
            label="Password"
            disabled={loading || loadingGOV}
            withIcon={true}
            autoComplete="off"
            error={errors.password ? true : false}
            message={errors.password ? errors.password.message : null}
          />
          <FormsControl
            control="checkbox"
            name="rememberMe"
            register={register}
            label="Ingat saya"
            error={false}
            disabled={loading || loadingGOV}
            message={errors.rememberMe ? errors.rememberMe.message : null}
          />
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Masuk"
              disabled={loading || loadingGOV}
              isLoading={loading}
            />
            <h1>atau</h1>
            <El.GoogleSignin
              type="button"
              isLoading={loadingGOV}
              onClick={() => (window.location.href = "/auth/google")}
            >
              {IconsControl("Google")}Masuk dengan Google
              {loadingGOV && (
                <El.LoadingWrapper>
                  <Loading2 />
                </El.LoadingWrapper>
              )}
            </El.GoogleSignin>
          </El.SubmitWrapper>

          <El.LinkWrapper>
            <Button
              type="button"
              name="Buat Akun Baru"
              disabled={loading || loadingGOV}
              color="section"
              onClick={() => push("/auth/register")}
            />
            <Button
              type="button"
              name="Lupa password"
              disabled={loading || loadingGOV}
              color="section"
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: { name: "RESET_PASSWORD" },
                })
              }
            />
            <Button
              type="button"
              name="Aktifkan akun"
              disabled={loading || loadingGOV}
              color="section"
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: { name: "ACTIVATE_ACCOUNT" },
                })
              }
            />
          </El.LinkWrapper>
        </El.Form>
      </El.Container>
    </El.Main>
  );
};

export default Login;
