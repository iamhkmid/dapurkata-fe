import { FC, useEffect, useState } from "react";
import PopUpHeaderUser from "../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./ResetPasswordElement";
import ConfirmCodeForm from "./ConfirmCodeForm";
import EmailForm from "./EmailForm";
import LoadingLdsRing from "../../../../otherComps/Loading/LoadingLdsRing";
import { useGQLResendConfirmCode } from "./useGQL";

const ResetPassword: FC = () => {
  const [email, setEmail] = useState<string>(null);
  const [fetchWaitTime, setFetchWaitTime] = useState<number>(0);
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

  const toggleShowEmailForm = (val: boolean) => {
    setShowEmailForm(val);
  };
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderUser title="Lupa password" />
      <El.Section>
        <div>
          <El.EmailInfo>
            <h1 className="title">Email</h1>
            <El.EmailFormWrapper isShowed={!email || showEmailForm}>
              <EmailForm
                changeEmail={changeEmail}
                email={email}
                toggleShowEmailForm={toggleShowEmailForm}
                setFetchWaitTime={setFetchWaitTime}
              />
            </El.EmailFormWrapper>
            <El.CurrEmail isShowed={!!email && !showEmailForm}>
              <h1>{email}</h1>
              {
                <El.ButtonLink onClick={() => toggleShowEmailForm(true)}>
                  ubah
                </El.ButtonLink>
              }
            </El.CurrEmail>
          </El.EmailInfo>
          <El.ConfirmCodeWrapper isShowed={!!email && !showEmailForm}>
            <ConfirmCodeForm
              email={email}
              disabled={loading}
              loadingCC={loading}
              fetchWaitCounter={fetchWaitCounter}
              resendConfirmCode={() =>
                resendConfirmCode({ email, type: "RESET_PASSWORD" })
              }
            />
          </El.ConfirmCodeWrapper>
        </div>
      </El.Section>
    </El.Main>
  );
};

export default ResetPassword;
