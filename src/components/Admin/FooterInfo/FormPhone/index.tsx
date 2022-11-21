import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import * as El from "./FormPhoneElement";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import {
  useGQLFooterPhone,
  useGQLUpdateFooterPhone,
} from "./useGQLFooterPhone";
import Button from "../../../otherComps/Buttons/Button";
import { useEffect } from "react";

type TForm = {
  phone: string;
};

const FormPhone = () => {
  const { data: dataInit, error, loading: loadingInit } = useGQLFooterPhone();
  const { updateFooterPhone, loading } = useGQLUpdateFooterPhone();
  const { register, handleSubmit, formState, setValue } = useForm<TForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const onSubmit = async (values: TForm) => {
    updateFooterPhone({ id: dataInit.id, phone: values.phone }).catch(() => {});
  };

  useEffect(() => {
    if (dataInit) {
      setValue("phone", dataInit.phone);
    }
  }, [dataInit]);

  return (
    <El.Main>
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <FormsControl
            control="input"
            type="number"
            name="phone"
            register={register}
            error={errors.phone ? true : false}
            isLoading={loadingInit}
            disabled={loadingInit || loading}
            message={errors.phone ? errors.phone.message : null}
          />
        </El.FormInput>
        <El.SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            isLoading={loading}
            disabled={loadingInit || !dataInit}
          />
        </El.SubmitWrapper>
      </El.Form>
    </El.Main>
  );
};

export default FormPhone;
