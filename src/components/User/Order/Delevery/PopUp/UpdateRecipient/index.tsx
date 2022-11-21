import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import {
  TFormAddRecipient,
  TFormEditRecipient,
} from "../../../../../../types/Forms";
import Button from "../../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import PopUpHeader from "../../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./UpdateRecipientElement";
import { validationSchema } from "./validationScema";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import {
  useGQLFormData,
  useGQLInitData,
  useGQLUpdateRecipient,
} from "./useGQL";

type TUpdateRcpt = {
  recipientId: string;
};
const UpdateRecipient: FC<TUpdateRcpt> = ({ recipientId }) => {
  const { user } = useContext(AuthContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
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
  } = useForm<TFormEditRecipient>({
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const watchProvId = watch("province");
  const watchCityId = watch("city");

  const { dataInit, loadInit, errorInit } = useGQLInitData({ recipientId });

  const {
    dataProvs,
    loadProvs,
    errorProvs,
    dataCities,
    errorCities,
    loadCities,
  } = useGQLFormData({ watchProvId: watchProvId as string });
  const { updateRecipient, data, error, loading } = useGQLUpdateRecipient();

  const onSubmit = async (values: TFormEditRecipient) => {
    const { city, province, ...rest } = values;
    const nData = { cityId: city, recipientId, ...rest };
    await updateRecipient({ data: nData });
  };

  useEffect(() => {
    setFocus();
  }, []);
  useEffect(() => {
    if (watchProvId && dataInit && isDirty) {
      setValue("city", undefined);
    }
    if (watchProvId && dataInit && !watchCityId && !loadCities) {
      setValue("city", dataInit.city.id);
    }
  }, [watchProvId, dataInit, loadCities]);

  useEffect(() => {
    if (dataInit && !isDirty) {
      setValue("firstName", dataInit.firstName);
      setValue("lastName", dataInit.lastName);
      setValue("email", dataInit.email);
      setValue("phone", dataInit.phone);
      setValue("address", dataInit.address);
    }
    if (dataInit && !watchProvId && !loadProvs) {
      setValue("province", dataInit.province.id);
    }
  }, [dataInit, loadProvs]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeader title="Ubah Data Penerima" />
      <El.Body>
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
            label="Name Depan"
            error={errors.firstName ? true : false}
            isLoading={loadInit}
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
            isLoading={loadInit}
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
            isLoading={loadInit}
            disabled={loading}
            message={errors.email ? errors.email.message : null}
          />
          <FormsControl
            control="input"
            type="number"
            name="phone"
            register={register}
            label="No. Handphone"
            error={errors.phone ? true : false}
            isLoading={loadInit}
            disabled={loading}
            message={errors.phone ? errors.phone.message : null}
          />
          <FormsControl
            control="select"
            name="province"
            register={register}
            label="Provinsi"
            options={
              dataProvs &&
              dataProvs.map((val) => ({
                id: val.province_id,
                value: val.province,
              }))
            }
            error={errors.province ? true : false}
            isLoading={loadInit || loadProvs}
            disabled={loading || loadProvs || loadInit}
            message={errors.province ? "Required" : null}
            clearError={clearErrors}
          />
          <FormsControl
            control="select"
            name="city"
            disabled={loading || !watchProvId}
            register={register}
            label="Kabupaten/Kota"
            isLoading={loadCities || loadInit}
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
            isLoading={loadInit}
            message={errors.address ? errors.address.message : null}
          />
          <El.SubmitWrapper>
            <Button
              type="submit"
              name="Simpan"
              disabled={loading || loadInit || loadProvs || loadCities}
              isLoading={loading}
            />
          </El.SubmitWrapper>
        </El.Form>
      </El.Body>
    </El.Main>
  );
};

export default UpdateRecipient;
