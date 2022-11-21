import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect } from "react";
import * as El from "./CreateElement";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../otherComps/Buttons/Button";
import LoadingWrapper from "../../../../../otherComps/Loading/LoadingWrapper";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import { useGQLCreateAuthor } from "../useGQLAuthor";
import ShowMessage from "../../../../../otherComps/ShowMessage";
import { TFormCreateAuthor } from "../../../../../../types/author";

const Create = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const { register, handleSubmit, formState, reset } =
    useForm<TFormCreateAuthor>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });

  const { errors } = formState;
  const { createAuthor, data, error, loading } = useGQLCreateAuthor();

  const onSubmit = async (values: TFormCreateAuthor) => {
    await createAuthor(values)
      .then(({ data }) => {
        reset();
        dispatch({
          type: "SHOW_POPUP",
          value: { name: "AUTHOR_DETAIL", authorId: data.createAuthor.id },
        });
      })
      .catch(() => {});
  };

  return (
    <El.Main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.FormContainer>
        <ShowMessage message={error?.message} color="danger" />
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <FormsControl
            control="input"
            type="text"
            name="name"
            register={register}
            label="Nama"
            error={errors.name ? true : false}
            message={errors.name ? errors.name.message : null}
          />
          <El.SubmitWrapper>
            <Button type="submit" name="Simpan" disabled={false} />
          </El.SubmitWrapper>
        </El.Form>
      </El.FormContainer>
    </El.Main>
  );
};

export default Create;
