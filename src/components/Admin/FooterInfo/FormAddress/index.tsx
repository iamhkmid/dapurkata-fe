import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import * as El from "./FormAddressElement";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import {
  useGQLFooterAddress,
  useGQLUpdateFooterAddress,
} from "./useGQLFooterAddress";
import Button from "../../../otherComps/Buttons/Button";
import { useEffect } from "react";

type TForm = {
  address: string;
};

const FormAddress = () => {
  const { data: dataInit, error, loading: loadingInit } = useGQLFooterAddress();
  const { updateFooterAddress, loading } = useGQLUpdateFooterAddress();

  const { register, handleSubmit, formState, setValue } = useForm<TForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const onSubmit = async (values: TForm) => {
    updateFooterAddress({ id: dataInit.id, address: values.address }).catch(
      () => {}
    );
  };

  useEffect(() => {
    if (dataInit) {
      setValue("address", dataInit.address);
    }
  }, [dataInit]);

  return (
    <El.Main>
      <El.Form onSubmit={handleSubmit(onSubmit)}>
        <El.FormInput>
          <FormsControl
            control="textarea"
            name="address"
            register={register}
            disabled={false}
            error={errors.address ? true : false}
            isLoading={loadingInit}
            message={errors.address ? errors.address.message : null}
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

export default FormAddress;
