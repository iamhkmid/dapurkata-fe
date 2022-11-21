import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import * as El from "./SocialMediaElement";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import {
  useGQLFooterSocialMedia,
  useGQLUpdateFooterSocialMedia,
} from "./useGQLFooterSocialMedia";
import Button from "../../../otherComps/Buttons/Button";
import { FC, useEffect } from "react";
import IconsControl from "../../../IconsControl";

type TForm = {
  url: string;
  isEnabled: boolean;
};

type TFSC = {
  id: string;
  url: string;
  isEnabled: boolean;
  name: string;
  isOpen: boolean;
};
const FormSocialMedia: FC<TFSC> = (props) => {
  const { isEnabled, isOpen, url, id, name } = props;
  const { updateFooterSocialMedia, loading } = useGQLUpdateFooterSocialMedia();

  const { register, handleSubmit, formState, setValue } = useForm<TForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: { isEnabled, url },
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });
  const { isDirty, isValid, errors } = formState;
  const onSubmit = async (values: TForm) => {
    updateFooterSocialMedia({ id, ...values }).catch(() => {});
  };

  return (
    <El.SocialMedia>
      <El.SocialMediaInfo>
        <El.IconWrapper>{IconsControl(name)}</El.IconWrapper>
        <El.DropdownIcon isOpen={isOpen}>
          {IconsControl("chevron-up-outline")}
        </El.DropdownIcon>
        <El.ItemName>{name}</El.ItemName>
      </El.SocialMediaInfo>
      <El.FormWrapper isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <El.Form onSubmit={handleSubmit(onSubmit)}>
          <El.FormInput>
            <FormsControl
              control="toggle"
              name="isEnabled"
              label="Aktif"
              register={register}
              error={errors.isEnabled ? true : false}
              disabled={loading}
              message={errors.isEnabled ? errors.isEnabled.message : null}
            />
            <FormsControl
              control="input"
              type="text"
              name="url"
              register={register}
              error={errors.url ? true : false}
              disabled={loading}
              message={errors.url ? errors.url.message : null}
            />
          </El.FormInput>
          <El.SubmitWrapper>
            <Button type="submit" name="Simpan" isLoading={loading} />
          </El.SubmitWrapper>
        </El.Form>
      </El.FormWrapper>
    </El.SocialMedia>
  );
};

export default FormSocialMedia;
