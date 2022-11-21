import Button from "../../../../../otherComps/Buttons/Button";
import ButtonLink from "../../../../../otherComps/Buttons/ButtonLink";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import { useGQLResetPassword, useGQLResendConfirmCode } from "../useGQL";
import * as El from "./ConfirmCodeFormElement";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import LoadingLdsRing from "../../../../../otherComps/Loading/LoadingLdsRing";

type TFormRCC = {
  confirmCode: string;
  password: string;
  confirmPassword: string;
};

type TProps = {
  email: string;
  disabled: boolean;
  resendConfirmCode: () => void;
  fetchWaitCounter: number;
  loadingCC: boolean;
};

const ConfirmCodeForm: FC<TProps> = (props) => {
  const { email, disabled, resendConfirmCode, loadingCC, fetchWaitCounter } =
    props;
  const { resetPassword, data, error, loading } = useGQLResetPassword();
  const onSubmitRCC = async (values: TFormRCC) => {
    resetPassword({
      confirmCode: values.confirmCode,
      email,
      password: values.password,
    }).catch(() => {});
  };

  const { register, handleSubmit, formState, setError } = useForm<TFormRCC>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  return (
    <El.Form onSubmit={handleSubmit(onSubmitRCC)}>
      <El.ConfirmCodeWrapper>
        <FormsControl
          control="input"
          type="text"
          name="confirmCode"
          register={register}
          label="Kode Konfirmasi"
          error={errors.confirmCode ? true : false}
          disabled={loading || disabled}
          message={errors.confirmCode ? errors.confirmCode.message : null}
        />
        <div className="resend-code-wrapper">
          <El.ButtonLink
            onClick={() => resendConfirmCode()}
            className="resend-code-button"
            disabled={loadingCC || loading}
          >
            Kirim ulang Kode
          </El.ButtonLink>
          {fetchWaitCounter > 0 && !loadingCC && (
            <El.FetchWait>{`( ${fetchWaitCounter} )`}</El.FetchWait>
          )}
          {loadingCC && <LoadingLdsRing />}
        </div>
      </El.ConfirmCodeWrapper>
      <FormsControl
        control="input"
        type="password"
        name="password"
        register={register}
        label="Password Baru"
        error={errors.password ? true : false}
        disabled={loading}
        message={errors.password ? errors.password.message : null}
      />
      <FormsControl
        control="input"
        type="password"
        name="confirmPassword"
        register={register}
        label="Konfirmasi Password Baru"
        error={errors.confirmPassword ? true : false}
        disabled={loading}
        message={errors.confirmPassword ? errors.confirmPassword.message : null}
      />
      <El.SubmitWrapper>
        <Button
          type="submit"
          name="Kirim"
          isLoading={loading}
          disabled={!isDirty || !isValid || loading || disabled}
        />
      </El.SubmitWrapper>
    </El.Form>
  );
};

export default ConfirmCodeForm;
