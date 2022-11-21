import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { validationSchemaUpdateUser } from "./validationScema";
import { useContext, useEffect, useRef } from "react";
import FormsControl from "../../../../../../otherComps/Forms/FormsControl";
import Button from "../../../../../../otherComps/Buttons/Button";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLInitData, useGQLUpdateUser } from "../../../useGQLUser";
import { TFormUpdateUser } from "../../../../../../../types/user";
import styled from "styled-components";
import { motion } from "framer-motion";

const FormUpdateUser = ({ userId }) => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormUpdateUser>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchemaUpdateUser),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminNavCtx);

  const {
    updateUser,
    data: dataUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = useGQLUpdateUser();
  const {
    data: dataInit,
    loading: loadingInit,
    error: errorInit,
  } = useGQLInitData({ userId });

  const onSubmit = async (values: TFormUpdateUser) => {
    updateUser({ userId, ...values }).catch(() => {});
  };

  useEffect(() => {
    if (dataInit) {
      setValue("firstName", dataInit.firstName);
      setValue("lastName", dataInit.lastName);
      setValue("email", dataInit.email);
      setValue("username", dataInit.username);
      setValue("phone", dataInit.phone);
    }
  }, [dataInit]);
  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput>
          <InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="username"
              register={register}
              label="Username"
              error={errors.username ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.username ? errors.username.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="firstName"
              register={register}
              label="Nama Depan"
              error={errors.firstName ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.firstName ? errors.firstName.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="lastName"
              register={register}
              label="Nama Belakang"
              error={errors.lastName ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.lastName ? errors.lastName.message : null}
            />
          </InputGroup>
          <InputGroup>
            <FormsControl
              control="input"
              type="text"
              name="email"
              register={register}
              label="Email"
              error={errors.email ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.email ? errors.email.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="phone"
              register={register}
              label="No Handphone"
              error={errors.phone ? true : false}
              disabled={loadingUpdate}
              isLoading={loadingInit}
              message={errors.phone ? errors.phone.message : null}
            />
          </InputGroup>
        </FormInput>
        <SubmitWrapper>
          <Button
            type="submit"
            name="Simpan"
            color="primary"
            isLoading={loadingUpdate}
            disabled={loadingInit}
          />
        </SubmitWrapper>
      </Form>
    </Main>
  );
};

export default FormUpdateUser;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: max-content;
  width: 100%;
  transition: 0.4s all ease;
`;

const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;
const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
  }
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
