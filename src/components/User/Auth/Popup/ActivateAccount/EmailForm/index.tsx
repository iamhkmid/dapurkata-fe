import Button from "../../../../../otherComps/Buttons/Button";
import ButtonLink from "../../../../../otherComps/Buttons/ButtonLink";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import { useGQLResendConfirmCode } from "../useGQL";
import * as El from "./EmailFormElement";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";

type TFormRCC = {
  email: string;
};

type TProps = {
  changeEmail: (val: string) => void;
  email: string;
  toggleShowEmailForm: (val: boolean) => void;
  setFetchWaitTime: (val: number) => void;
};

const EmailForm: FC<TProps> = (props) => {
  const { changeEmail, email, toggleShowEmailForm, setFetchWaitTime } = props;
  const { resendConfirmCode, data, error, loading } = useGQLResendConfirmCode();
  const onSubmitRCC = async (values: TFormRCC) => {
    if (values.email === email) {
      toggleShowEmailForm(false);
    } else {
      resendConfirmCode({
        email: values.email,
        type: "ACTIVATE_ACCOUNT",
      }).catch(() => {});
    }
  };

  useEffect(() => {
    if (data) {
      changeEmail(data.email);
      toggleShowEmailForm(false);
      setFetchWaitTime(data.fetchWaitTime);
    }
    if (error) {
      toggleShowEmailForm(true);
    }
  }, [data, error]);
  const { register, handleSubmit, formState, setError } = useForm<TFormRCC>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  return (
    <El.EmailForm onSubmit={handleSubmit(onSubmitRCC)}>
      <FormsControl
        control="input"
        type="text"
        name="email"
        register={register}
        placeholder="example@dapurkata.com"
        error={errors.email ? true : false}
        disabled={loading}
        message={errors.email ? errors.email.message : null}
      />
      <El.SubmitWrapper>
        <Button
          type="submit"
          name="Ubah"
          isLoading={loading}
          disabled={!isDirty || !isValid || loading}
        />
      </El.SubmitWrapper>
    </El.EmailForm>
  );
};

export default EmailForm;
