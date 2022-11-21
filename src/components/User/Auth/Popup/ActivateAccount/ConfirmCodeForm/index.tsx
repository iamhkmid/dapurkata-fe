import Button from "../../../../../otherComps/Buttons/Button";
import ButtonLink from "../../../../../otherComps/Buttons/ButtonLink";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import { useGQLRegisterConfirm, useGQLResendConfirmCode } from "../useGQL";
import * as El from "./ConfirmCodeFormElement";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";

type TFormRCC = {
  confirmCode: string;
};

type TProps = {
  email: string;
  disabled: boolean;
};

const ConfirmCodeForm: FC<TProps> = (props) => {
  const { email, disabled } = props;
  const { registerConfirmation, data, error, loading } =
    useGQLRegisterConfirm();
  const onSubmitRCC = async (values: TFormRCC) => {
    registerConfirmation({ confirmCode: values.confirmCode, email }).catch(
      () => {}
    );
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
    <El.EmailForm onSubmit={handleSubmit(onSubmitRCC)}>
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
      <El.SubmitWrapper>
        <Button
          type="submit"
          name="Kirim"
          isLoading={loading}
          disabled={!isDirty || !isValid || loading || disabled}
        />
      </El.SubmitWrapper>
    </El.EmailForm>
  );
};

export default ConfirmCodeForm;
