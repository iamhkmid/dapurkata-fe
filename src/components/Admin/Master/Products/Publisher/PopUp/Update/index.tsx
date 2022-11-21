import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import { useContext, useEffect } from "react";
import * as El from "./UpdateElement";
import FormsControl from "../../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../../otherComps/Buttons/Button";
import LoadingWrapper from "../../../../../../otherComps/Loading/LoadingWrapper";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLUpdatePublisher, useGQLPublisher } from "../../useGQLPublisher";
import {
  TFormPublisher,
  TFormUpdatePublisher,
} from "../../../../../../../types/publisher";
import ShowMessage from "../../../../../../otherComps/ShowMessage";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";

const Update = ({ id }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { register, handleSubmit, formState, setValue } =
    useForm<TFormPublisher>({
      mode: "all",
      reValidateMode: "onChange",
      defaultValues: {},
      shouldFocusError: true,
      resolver: yupResolver(validationSchema),
    });
  const { errors } = formState;
  const {
    data: dataInit,
    error: errorInit,
    loading: loadInit,
  } = useGQLPublisher({ publisherId: id });
  const {
    updatePublisher,
    data,
    loading: loadUpdate,
    error: errorUpdate,
  } = useGQLUpdatePublisher();

  const onSubmit = async (values: TFormUpdatePublisher) => {
    await updatePublisher({ publisherId: id, ...values }).then(({ data }) => {
      dispatch({
        type: "SHOW_POPUP",
        value: {
          name: "PUBLISHER_DETAIL",
          publisherId: data.updatePublisher.id,
        },
      });
    });
  };
  useEffect(() => {
    if (dataInit) {
      setValue("name", dataInit.name);
    }
  }, [dataInit]);
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Ubah data" />
      <El.Body>
        <ShowMessage message={errorUpdate?.message} color="danger" />
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <FormsControl
            control="input"
            type="text"
            name="name"
            register={register}
            label="Nama"
            error={errors.name ? true : false}
            disabled={loadUpdate}
            isLoading={loadInit}
            message={errors.name ? errors.name.message : null}
          />
          <El.SubmitWrapper>
            <Button type="submit" name="Ubah" disabled={false} />
            <Button
              name="Batalkan"
              type="button"
              disabled={loadUpdate}
              onClick={() => dispatch({ type: "CLOSE_ALL_POPUP" })}
            />
          </El.SubmitWrapper>
        </El.Form>
      </El.Body>
    </El.Main>
  );
};

export default Update;
