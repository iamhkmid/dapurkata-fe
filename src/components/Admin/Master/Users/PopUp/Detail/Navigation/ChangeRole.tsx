import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { TFormChangeRole } from "../../../../../../../types/user";
import Button from "../../../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../../../otherComps/Forms/FormsControl";
import {
  useGQLChangeRole,
  useGQLUserChangeRoleData,
} from "../../../useGQLUser";
import { validationSchemaChangeRole } from "./validationScema";

type TProps = {
  userId: string;
};
const ChangeRole: FC<TProps> = ({ userId }) => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<TFormChangeRole>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    shouldFocusError: true,
    resolver: yupResolver(validationSchemaChangeRole),
  });

  const { isDirty, isValid, errors } = formState;
  const { dispatch } = useContext(AdminNavCtx);
  const {
    data: dataInit,
    loading: loadInit,
    error: errorInit,
  } = useGQLUserChangeRoleData({ userId });
  const { changeRole, data, loading } = useGQLChangeRole();

  const onSubmit = async (values: TFormChangeRole) => {
    changeRole({ ...values, userId }).catch(() => {});
  };
  useEffect(() => {
    if (data) {
      setValue("password", "");
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: "Berhasil mengubah role user", color: "success" },
      });
    }
  }, [data]);
  useEffect(() => {
    if (dataInit) {
      setValue("role", dataInit.role);
    }
  }, [dataInit]);
  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput>
          <FormsControl
            control="select"
            name="role"
            register={register}
            label="Pilih Role"
            options={[
              { id: "ADMIN", value: "ADMIN" },
              { id: "USER", value: "USER" },
            ]}
            error={errors.role ? true : false}
            disabled={loading}
            isLoading={loadInit}
            message={errors.role ? "Required" : null}
            clearError={clearErrors}
          />
          <div className="confirm-wrapper">
            <div className="confirm-info">
              Masukan password <h1 className="role-name">ADMIN</h1> untuk
              konfirmasi
            </div>
            <FormsControl
              control="input"
              type="password"
              name="password"
              register={register}
              label=""
              error={errors.password ? true : false}
              disabled={loading}
              message={errors.password ? errors.password.message : null}
            />
          </div>
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

export default ChangeRole;

const Main = styled.div`
  display: flex;
  padding: 16px;
`;

const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  max-width: 300px;
`;
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
