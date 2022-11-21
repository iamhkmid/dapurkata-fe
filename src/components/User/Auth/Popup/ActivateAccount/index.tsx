import { FC, useEffect, useState } from "react";
import PopUpHeaderUser from "../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./ActivateAccountElement";
import ConfirmCodeForm from "./ConfirmCodeForm";
import EmailForm from "./EmailForm";
import LoadingLdsRing from "../../../../otherComps/Loading/LoadingLdsRing";
import { useGQLResendConfirmCode } from "./useGQL";

type TProps = {
  type: "ACTIVATE_ACCOUNT" | "REGISTRATION";
  email?: string;
  fetchWaitTime?: number;
};
const ActivateAccount: FC<TProps> = (Props) => {
  const [email, setEmail] = useState<string>(Props.email);
  const [fetchWaitTime, setFetchWaitTime] = useState<number>(
    Props.fetchWaitTime || 0
  );
  const [fetchWaitCounter, setFetchWaitCounter] = useState<number>(0);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(true);
  const { resendConfirmCode, data, error, loading } = useGQLResendConfirmCode();
  const changeEmail = (val: string) => {
    setEmail(val);
  };
  useEffect(() => {
    const timer =
      fetchWaitCounter > 0 &&
      setInterval(
        () =>
          setFetchWaitCounter(
            Math.floor((fetchWaitTime - new Date().getTime()) / 1000)
          ),
        1000
      );
    return () => clearInterval(timer);
  }, [fetchWaitCounter]);
  useEffect(() => {
    setFetchWaitCounter(
      Math.floor((fetchWaitTime - new Date().getTime()) / 1000)
    );
  }, [fetchWaitTime]);

  useEffect(() => {
    if (data?.fetchWaitTime) {
      setFetchWaitTime(data?.fetchWaitTime);
    }
  }, [data?.fetchWaitTime]);

  useEffect(() => {
    if (Props.email) {
      setShowEmailForm(false);
    }
  }, [Props.email]);

  const toggleShowEmailForm = (val: boolean) => {
    setShowEmailForm(val);
  };
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderUser title="Aktivasi akun" />
      <El.Section>
        <El.EmailInfo>
          <h1 className="title">Email Pendaftaran</h1>
          <El.EmailFormWrapper
            isShowed={
              (!email || showEmailForm) && Props.type === "ACTIVATE_ACCOUNT"
            }
          >
            <EmailForm
              changeEmail={changeEmail}
              email={email}
              toggleShowEmailForm={toggleShowEmailForm}
              setFetchWaitTime={setFetchWaitTime}
            />
          </El.EmailFormWrapper>
          <El.CurrEmail isShowed={!!email && !showEmailForm}>
            <h1>{email}</h1>
            {Props.type === "ACTIVATE_ACCOUNT" && (
              <El.ButtonLink onClick={() => toggleShowEmailForm(true)}>
                ubah
              </El.ButtonLink>
            )}
          </El.CurrEmail>
        </El.EmailInfo>
        <El.ConfirmCodeWrapper isShowed={!!email && !showEmailForm}>
          <ConfirmCodeForm email={email} disabled={loading} />
          <div className="resend-code-wrapper">
            <El.ButtonLink
              onClick={() =>
                resendConfirmCode({ email, type: "ACTIVATE_ACCOUNT" })
              }
              className="resend-code-button"
              disabled={loading}
            >
              Kirim ulang Kode
            </El.ButtonLink>
            {fetchWaitCounter > 0 && !loading && (
              <El.FetchWait>{`( ${fetchWaitCounter} )`}</El.FetchWait>
            )}
            {loading && <LoadingLdsRing />}
          </div>
        </El.ConfirmCodeWrapper>
      </El.Section>
    </El.Main>
  );
};

export default ActivateAccount;
