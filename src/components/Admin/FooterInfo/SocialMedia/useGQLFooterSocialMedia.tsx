import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { UPDATE_FOOTER_SOCIAL_MEDIA } from "../../../../graphql/footerInfo/mutations";
import { FOOTERINFO_SOCIAL_MEDIA } from "../../../../graphql/footerInfo/queries";
import {
  TGQLFooterSocialMedia,
  TGQLUpdateFooterSocialMedia,
} from "../../../../types/footerInfo";

export const useGQLFooterSocialMedia = () => {
  const { data, error, loading } = useQuery<TGQLFooterSocialMedia>(
    FOOTERINFO_SOCIAL_MEDIA,
    {
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    }
  );
  return {
    data: data?.footerSocialMedia,
    error,
    loading,
  };
};

type TUpdate = {
  id: string;
  isEnabled: boolean;
  url: string;
};
export const useGQLUpdateFooterSocialMedia = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [updateFooterSocialMedia, { data, error, loading }] =
    useMutation<TGQLUpdateFooterSocialMedia>(UPDATE_FOOTER_SOCIAL_MEDIA, {
      errorPolicy: "all",
    });

  const update = async (props: TUpdate) => {
    await updateFooterSocialMedia({
      variables: props,
      refetchQueries: [{ query: FOOTERINFO_SOCIAL_MEDIA }],
      awaitRefetchQueries: true,
    });
  };

  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: error.message, color: "danger" },
      });
    }
    if (!!data?.updateFooterSocialMedia) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: `Berhasil ubah data ${data?.updateFooterSocialMedia.name}`,
          color: "success",
        },
      });
    }
  }, [error, data?.updateFooterSocialMedia]);
  return {
    updateFooterSocialMedia: update,
    data: data?.updateFooterSocialMedia,
    error,
    loading,
  };
};
