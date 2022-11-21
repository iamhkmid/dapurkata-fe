import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import Button from "../../../../../otherComps/Buttons/Button";
import FormsControl from "../../../../../otherComps/Forms/FormsControl";
import PopUpHeader from "../../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./ChangePasswordElement";
import { validationSchema } from "./validationScema";
import { useGQLChangePassword } from "./useGQL";
import ShowMessage from "../../../../../otherComps/ShowMessage";
import { TFormChangePass } from "../../../../../../types/user";
import { useLogOut } from "../../../../../../hooks/useGQLAuth";
import { AuthContext } from "../../../../../../contexts/AuthCtx";

const ChangePassword: FC = () => {
  const { dispatch: dispatchUserNav } = useContext(UserNavCtx);
  const htmlElRef = useRef<{ focus: () => void }>();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  const { register, handleSubmit, formState } = useForm<TFormChangePass>({
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const { isDirty, isValid, errors } = formState;
  const { logOut } = useLogOut();
  const { data, loading, error, changePassword } = useGQLChangePassword();

  const onSubmit = async (values: TFormChangePass) => {
    const { newPassword, oldPassword } = values;
    await changePassword({ newPassword, oldPassword });
  };

  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    setFocus();
  }, []);

  useEffect(() => {
    const checkData = async () => {
      if (data) {
        dispatchUserNav({
          type: "SHOW_GLOBAL_MESSAGE",
          value: {
            message: "Berhasil mengubah password",
            color: "success",
          },
        });
        dispatchUserNav({
          type: "CLOSE_POPUP",
        });
        await logOut();
      }
    };
    checkData();
  }, [data]);

  return (
    <El.Main>
      <PopUpHeader title="Ubah Password" />
      <El.Body>
        <ShowMessage message={error?.message} color="danger" />
        <El.Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormsControl
            control="input"
            type="password"
            name="oldPassword"
            ref={htmlElRef}
            register={register}
            label="Password Lama"
            error={errors.oldPassword ? true : false}
            disabled={loading}
            message={errors.oldPassword ? errors.oldPassword.message : null}
          />
          <FormsControl
            control="input"
            type="password"
            name="newPassword"
            register={register}
            label="Password Baru"
            error={errors.newPassword ? true : false}
            disabled={loading}
            message={errors.newPassword ? errors.newPassword.message : null}
          />
          <FormsControl
            control="input"
            type="password"
            name="confirmPassword"
            register={register}
            label="Konfirmasi Password"
            error={errors.confirmPassword ? true : false}
            disabled={loading}
            message={
              errors.confirmPassword ? errors.confirmPassword.message : null
            }
          />
          <El.SubmitWrapper>
            <Button type="submit" name="Simpan" isLoading={loading} />
          </El.SubmitWrapper>
        </El.Form>
      </El.Body>
    </El.Main>
  );
};

export default ChangePassword;
