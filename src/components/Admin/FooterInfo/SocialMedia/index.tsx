import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationScema";
import * as El from "./SocialMediaElement";
import FormsControl from "../../../otherComps/Forms/FormsControl";
import { useGQLFooterSocialMedia } from "./useGQLFooterSocialMedia";
import Button from "../../../otherComps/Buttons/Button";
import { useEffect, useState } from "react";
import IconsControl from "../../../IconsControl";
import FormSocialMedia from "./FormSocialMedia";

type TForm = {
  phone: string;
};

const SocialMedia = () => {
  const [selected, setSelected] = useState<string>(null);
  const { data, error, loading } = useGQLFooterSocialMedia();

  return (
    <El.Main>
      <El.ItemWrapper>
        {data?.map((val) => (
          <El.Item
            key={val.id}
            onClick={() =>
              selected === val.id ? setSelected(null) : setSelected(val.id)
            }
          >
            <FormSocialMedia
              id={val.id}
              isEnabled={val.isEnabled}
              name={val.name}
              url={val.url}
              isOpen={selected === val.id}
            />
          </El.Item>
        ))}
      </El.ItemWrapper>
    </El.Main>
  );
};

export default SocialMedia;
