import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import * as El from "./FormMessageElement";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import {
  useGQLFooterMessage,
  useGQLUpdateFooterMessage,
} from "./useGQLFooterMessage";
import Button from "../../../otherComps/Buttons/Button";
import { useEffect } from "react";

type TForm = {
  message: string;
};

const FormMessage = () => {
  const { data: dataInit, error, loading: loadingInit } = useGQLFooterMessage();
  const { updateFooterMessage, loading } = useGQLUpdateFooterMessage();

  const { register, handleSubmit, formState, setValue } = useForm<TForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const onSubmit = async (values: TForm) => {
    updateFooterMessage({ id: dataInit.id, message: values.message }).catch(
      () => {}
    );
  };

  useEffect(() => {
    if (dataInit) {
      setValue("message", dataInit.message);
    }
  }, [dataInit]);

  return (
    <El.Main>
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <FormsControl
            control="input"
            type="text"
            name="message"
            register={register}
            error={errors.message ? true : false}
            isLoading={loadingInit}
            disabled={false}
            message={errors.message ? errors.message.message : null}
          />
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            isLoading={false}
            disabled={loadingInit}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default FormMessage;
