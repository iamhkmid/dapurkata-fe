import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import {
  CITIES_BY_PROV_ID,
  PROVINCES,
} from "../../../../../../graphql/courier/queries";
import { UPDATE_RECIPIENT } from "../../../../../../graphql/recipient/mutations";
import {
  RECIPIENT,
  RECIPIENTS,
} from "../../../../../../graphql/recipient/queries";
import { TGQLCities, TGQLProvinces } from "../../../../../../types/courier";
import {
  TGQLRecipient,
  TGQLUpdateRecipient,
  TUpdateRcptDefVal,
  TUpdateRcptVar,
} from "../../../../../../types/recipient";

export const useGQLInitData = ({ recipientId }: { recipientId: string }) => {
  const [ndata, setNdata] = useState<TUpdateRcptDefVal>(null);
  const { data, loading, error } = useQuery<TGQLRecipient>(RECIPIENT, {
    errorPolicy: "all",
    fetchPolicy: "network-only",
    skip: !recipientId,
    variables: { recipientId },
  });

  useEffect(() => {
    if (data) {
      const { recipient: val } = data;
      setNdata({
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        phone: val.phone,
        province: { id: val.City.Province.id, value: val.City.Province.name },
        city: { id: val.City.id, value: val.City.name },
        address: val.address,
      });
    }
  }, [data]);
  return {
    dataInit: ndata,
    errorInit: error,
    loadInit: loading,
  };
};

export const useGQLFormData = ({ watchProvId }: { watchProvId: string }) => {
  const {
    data: dataProvs,
    loading: loadProvs,
    error: errorProvs,
  } = useQuery<TGQLProvinces>(PROVINCES, {
    errorPolicy: "all",
    fetchPolicy: "cache-first",
  });

  const {
    data: dataCities,
    loading: loadCities,
    error: errorCities,
    refetch,
  } = useQuery<TGQLCities>(CITIES_BY_PROV_ID, {
    skip: !watchProvId,
    errorPolicy: "all",
    fetchPolicy: "cache-first",
    variables: { province_id: watchProvId },
  });

  return {
    dataProvs: dataProvs?.provinces,
    loadProvs,
    errorProvs,
    dataCities: dataCities?.cities,
    loadCities,
    errorCities,
  };
};

export const useGQLUpdateRecipient = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);
  const [updateRecipient, { data, loading, error }] =
    useMutation<TGQLUpdateRecipient>(UPDATE_RECIPIENT, { errorPolicy: "all" });
  const updateRcpt = async (variables: TUpdateRcptVar) => {
    return await updateRecipient({
      variables,
      refetchQueries: [{ query: RECIPIENTS, variables: { userId: user.id } }],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (data?.updateRecipient) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Berhasil menyimpan data",
          color: "success",
        },
      });
      dispatch({ type: "CLOSE_POPUP" });
    }
  }, [data?.updateRecipient]);

  return {
    updateRecipient: updateRcpt,
    data: data?.updateRecipient,
    loading,
    error,
  };
};
