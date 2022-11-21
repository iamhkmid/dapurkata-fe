import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { AdminNavCtx } from "../../../../../contexts/AdminNavCtx";
import { TFormChangeSS } from "../../../../../types/transaction";
import Button from "../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../otherComps/Forms/FormsControl";
import {
  useGQLChangeShippingStatus,
  useGQLOrderInit,
} from "../../Orders/useGQLOrders";
import { validationSchemaChangeSS } from "./validationScema";

type TProps = {
  orderId: string;
};
const FormChangeShippingStatus: FC<TProps> = ({ orderId }) => {
  const [showInput, setShowInput] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormChangeSS>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchemaChangeSS),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminNavCtx);
  const {
    data: dataInit,
    loading: loadInit,
    error: errorInit,
  } = useGQLOrderInit({ orderId });
  const { changeShippingStatus, data, loading } = useGQLChangeShippingStatus();

  const onSubmit = async (values: TFormChangeSS) => {
    changeShippingStatus({ ...values, orderId }).catch(() => {});
  };
  useEffect(() => {
    if (data) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: data.message, color: "success" },
      });
    }
  }, [data]);
  useEffect(() => {
    if (dataInit) {
      setValue("shippingStatus", dataInit.shippingStatus);
      setValue("receiptNumber", dataInit.receiptNumber);
    }
  }, [dataInit]);

  useEffect(() => {
    setShowInput(getValues("shippingStatus") === "inShipping");
  }, [watch]);

  return (
    <Main>
      <h1 className="title">KONFIRMASI PENGIRIMAN</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput isShow={showInput}>
          <FormsControl
            control="select"
            name="shippingStatus"
            register={register}
            label="Status Pengiriman"
            options={[
              { id: "unProcessed", value: "Belum Diproses" },
              { id: "inProcess", value: "Sedang Diproses" },
              { id: "inShipping", value: "Dikirim" },
            ]}
            error={errors.shippingStatus ? true : false}
            disabled={loading}
            isLoading={loadInit}
            message={errors.shippingStatus ? "Required" : null}
            clearError={clearErrors}
          />
          <InputShowHide isShow={showInput}>
            <FormsControl
              control="input"
              type="text"
              name="receiptNumber"
              register={register}
              label="Kode Resi"
              error={errors.receiptNumber ? true : false}
              disabled={loading}
              message={
                errors.receiptNumber ? errors.receiptNumber.message : null
              }
            />
          </InputShowHide>
        </FormInput>
        <SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            color="primary"
            isLoading={loading}
            disabled={loadInit}
          />
        </SubmitWrapper>
      </Form>
    </Main>
  );
};

export default FormChangeShippingStatus;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 100%;
  min-width: 250px;
  max-width: 250px;
  min-height: 500px;
  padding-right: 16px;
  border-right: 2px dashed ${({ theme }) => theme.input.border};
  > h1.title {
    font-size: 16px;
    background: ${({ theme }) => theme.button.list.background};
    color: ${({ theme }) => theme.button.list.color};
    padding: 2px 8px;
    border-radius: 3px;
    font-weight: 600;
    padding-bottom: 5px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    border-right: none;
    border-bottom: 2px dashed ${({ theme }) => theme.input.border};
    padding-bottom: 8px;
    min-width: 100%;
    max-width: 100%;
    min-height: fit-content;
  }
`;

type TInputShowHide = {
  isShow: boolean;
};
const InputShowHide = styled.div<TInputShowHide>`
  display: flex;
  max-height: 0;
  overflow: hidden;
  ${({ isShow }) =>
    isShow &&
    css`
      max-height: 150px;
    `}
  transition: 0.4s all ease;
  transition-property: max-height;
`;
const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  max-width: 300px;
`;
const FormInput = styled.div<TInputShowHide>`
  display: flex;
  flex-direction: column;
  ${({ isShow }) =>
    isShow &&
    css`
      gap: 1rem;
    `}
  .confirm-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .confirm-info {
    font-size: 14px;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .role-name {
    display: inline;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
  }
  transition: 0.4s gap ease;
`;

const SubmitWrapper = styled.div`
  display: flex;
  height: 2rem;
  padding: 1.5rem 0;
  gap: 0.5rem;
  width: max-content;
  > button {
    width: 100%;
  }
  justify-content: flex-end;
  align-items: center;
`;
