import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import { TFormAddRecipient } from "../../../../../../types/Forms";
import Button from "../../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import PopUpHeaderUser from "../../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./CreateRecipientElement";
import { validationSchema } from "./validationScema";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import { useGQLGetFormData, useGQLCreateRecipient } from "./useGQL";
import FormMessage from "../../../../../otherComps/ShowMessage";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";

const CreateRecipient = () => {
  const { user } = useContext(AuthContext);
  const { dispatch: dispatchOrder } = useContext(OrderCtx);
  const { userNav, dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const htmlElRef = useRef<{ focus: () => void }>();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  const {
    register,
    handleSubmit,
    formState,
    clearErrors,
    reset,
    watch,
    setValue,
  } = useForm<TFormAddRecipient>({
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const watchProvId = watch("province");

  const {
    dataProvs,
    loadProvs,
    errorProvs,
    dataCities,
    errorCities,
    loadCities,
  } = useGQLGetFormData({ watchProvId: watchProvId as string });

  const { createRecipient, data, error, loading } = useGQLCreateRecipient({
    userId: user.id,
  });

  const onSubmit = async (values: TFormAddRecipient) => {
    const { city, province, ...rest } = values;
    const nData = { cityId: city, ...rest };
    await createRecipient({ data: nData });
  };

  useEffect(() => {
    setFocus();
  }, []);
  useEffect(() => {
    if (data) {
      dispatchUserNav({ type: "CLOSE_POPUP" });
      dispatchOrder({ type: "SET_RECIPIENT_ID", value: data.id });
    }
  }, [data]);
  useEffect(() => {
    if (watchProvId) {
      setValue("city", undefined);
    }
  }, [watchProvId]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderUser title="Tambah Data Penerima" />
      <El.Body>
        <FormMessage message={error?.message} color="danger" />
        <El.Form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormsControl
            control="input"
            type="text"
            name="firstName"
            ref={htmlElRef}
            register={register}
            label="Nama Depan"
            error={errors.firstName ? true : false}
            disabled={loading}
            message={errors.firstName ? errors.firstName.message : null}
          />
          <FormsControl
            control="input"
            type="text"
            name="lastName"
            register={register}
            label="Nama Belakang"
            error={errors.lastName ? true : false}
            disabled={loading}
            message={errors.lastName ? errors.lastName.message : null}
          />
          <FormsControl
            control="input"
            type="text"
            name="email"
            register={register}
            label="Email"
            error={errors.email ? true : false}
            disabled={loading}
            message={errors.email ? errors.email.message : null}
          />
          <FormsControl
            control="input"
            type="number"
            name="phone"
            register={register}
            label="Phone"
            error={errors.phone ? true : false}
            disabled={loading}
            message={errors.phone ? errors.phone.message : null}
          />
          <FormsControl
            control="select"
            name="province"
            register={register}
            label="Provinsi"
            isLoading={loadProvs}
            options={
              dataProvs &&
              dataProvs.map((val) => ({
                id: val.province_id,
                value: val.province,
              }))
            }
            error={errors.province ? true : false}
            disabled={loading}
            message={errors.province ? "Required" : null}
            clearError={clearErrors}
          />
          <FormsControl
            control="select"
            name="city"
            disabled={loading || !watchProvId}
            register={register}
            label="Kabupaten/Kota"
            isLoading={loadCities}
            options={
              dataCities &&
              dataCities.map((val) => ({
                id: val.city_id,
                value: val.city_name,
              }))
            }
            error={errors.city ? true : false}
            message={errors.city ? "Required" : null}
            clearError={clearErrors}
          />
          <FormsControl
            control="textarea"
            name="address"
            register={register}
            label="Alamat Lengkap"
            disabled={loading}
            placeholder="Contoh : Jln. Dahlia Dalam 1 No. 446 RT/RW 003/001, kel. Bukit Merapin, kec. Gerunggang Pangkalpinang Kepulauan Bangka Belitung 33123"
            error={errors.address ? true : false}
            message={errors.address ? errors.address.message : null}
          />
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Simpan"
              disabled={loading || loadProvs || loadCities}
              isLoading={loading}
            />
          </El.SubmitWrapper>
        </El.Form>
      </El.Body>
    </El.Main>
  );
};

export default CreateRecipient;
