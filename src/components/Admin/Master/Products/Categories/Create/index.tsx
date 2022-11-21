import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect } from "react";
import * as El from "./CreateElement";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../otherComps/Buttons/Button";
import LoadingWrapper from "../../../../../otherComps/Loading/LoadingWrapper";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import { useGQLCreateCategory } from "../useGQLCategory";
import { formCategory } from "../../../../../../data/form";
import { TFormCreateCategory } from "../../../../../../types/category";
import ShowMessage from "../../../../../otherComps/ShowMessage";

const Create = () => {
  const { dispatch } = useContext(AdminNavCtx);

  const { register, handleSubmit, formState, reset, clearErrors } =
    useForm<TFormCreateCategory>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });

  const { errors } = formState;

  const {
    createCategory,
    data: dataAdd,
    error: errorAdd,
    loading: loadAdd,
  } = useGQLCreateCategory();

  const onSubmit = async (values: TFormCreateCategory) => {
    createCategory(values)
      .then(({ data }) => {
        reset();
        dispatch({
          type: "SHOW_POPUP",
          value: {
            name: "CATEGORY_DETAIL",
            categoryId: data.createCategory.id,
          },
        });
      })
      .catch(() => {});
  };

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.FormContainer>
        <ShowMessage message={errorAdd?.message} color="danger" />
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <El.SpanGroup>
            <FormsControl
              control="input"
              type="text"
              name="name"
              register={register}
              label="Nama"
              error={errors.name ? true : false}
              message={errors.name ? errors.name.message : null}
            />
            <FormsControl
              control="select"
              name="group"
              register={register}
              label="Kelompok"
              options={formCategory.group}
              error={errors.group ? true : false}
              message={errors.group ? "Required" : null}
              clearError={clearErrors}
            />
          </El.SpanGroup>
          <El.SubmitWrapper>
            <Button type="submit" name="Simpan" disabled={false} />
          </El.SubmitWrapper>
        </El.Form>
      </El.FormContainer>
    </El.Main>
  );
};

export default Create;
