import { useEffect } from "react";
import { useContext, useRef, useState } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import IconsControl from "../../../../../IconsControl";
import TextError from "../../../../../otherComps/Forms/TextMessage";
import Loading2 from "../../../../../otherComps/Loading/Loading2";
import TextLoading from "../../../../../otherComps/Loading/TextLoading";
import * as El from "./SelectElement";
import { useGQLPaymentType } from "./useGQL";

const Select = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState(false);
  const selectRef = useRef<HTMLDivElement>();

  const { data, loading, error } = useGQLPaymentType();

  const close = () => {
    setIsFocus(false);
    selectRef.current.blur();
  };
  type TChangeSelected = { paymentTypeId: string; paymentServiceId: string };
  const changeSelected = (value: TChangeSelected) => {
    dispatch({ type: "SET_PAYMENT_TYPE_ID", value: value.paymentTypeId });
    dispatch({ type: "SET_PAYMENT_SERVICE_ID", value: value.paymentServiceId });
    close();
  };
  useEffect(() => {
    if (
      !order.recipient.data.recipient ||
      !order.courier.selected.courier?.service
    ) {
      setDisabled(true);
    } else if (!!data) {
      dispatch({
        type: "SET_PAYMENT_TYPES",
        value: data,
      });
      setDisabled(false);
    }
  }, [
    order.courier.selected.courier?.service,
    order.recipient.data.recipient,
    data,
  ]);

  useEffect(() => {
    const pTypesData = order.payment.data.paymentTypes;
    if (pTypesData.length > 0) {
      dispatch({ type: "SET_PAYMENT_TYPE_ID", value: pTypesData[0].id });
    }
  }, [order.payment.data.paymentTypes]);

  useEffect(() => {
    if (disabled) {
      setIsFocus(false);
      selectRef.current.blur();
    }
  }, [disabled]);
  return (
    <El.InputContainer>
      <El.Label>Tipe Pembayaran</El.Label>
      <El.InputWrapper
        tabIndex={0}
        ref={selectRef}
        onFocus={() => {
          if (!disabled) {
            setIsFocus(true);
          } else {
            selectRef.current.blur();
          }
        }}
        onBlur={() => setIsFocus(false)}
      >
        <El.SelectStyled
          isError={!!order.courier.error}
          isFocus={isFocus}
          disabled={disabled}
          isLoading={false}
        >
          <El.CloseWrapper isShowed={isFocus} onClick={() => close()} />
          {true && (
            <El.Text>
              {
                data?.find(
                  (val) => val.id === order.payment.selected?.paymentTypeId
                )?.name
              }
            </El.Text>
          )}
          {false && (
            <El.LoadingWrapper2>
              <Loading2 />
            </El.LoadingWrapper2>
          )}
          <El.DropdownIconWrapper
            isFocus={isFocus}
            disabled={disabled}
            error={!!order.courier.error}
          >
            {IconsControl("chevron-up-outline")}
          </El.DropdownIconWrapper>
        </El.SelectStyled>
        <El.Dropdown isFocus={isFocus} onClick={(e) => e.stopPropagation()}>
          <El.DropdownWrapper>
            {loading && (
              <El.LoadingWrapper>
                <TextLoading text="Loading" />
              </El.LoadingWrapper>
            )}

            <El.NoOption isShowed={!loading && data?.length < 0}>
              no option
            </El.NoOption>

            <El.OptionWrapper isShowed={data?.length > 0 && !loading}>
              {!loading &&
                data?.map((val, index) => (
                  <El.Options
                    isShowed={true}
                    isSelected={
                      val.id === order.payment.selected?.paymentTypeId
                    }
                    key={val.id}
                    onClick={() =>
                      changeSelected({
                        paymentTypeId: val.id,
                        paymentServiceId: val.PaymentService[0].id,
                      })
                    }
                  >
                    <El.TextInfo
                      isSelected={
                        val.id === order.payment.selected?.paymentTypeId
                      }
                    >
                      <h1>{val.name}</h1>
                      <h1>{val.description}</h1>
                    </El.TextInfo>
                  </El.Options>
                ))}
            </El.OptionWrapper>
          </El.DropdownWrapper>
        </El.Dropdown>
      </El.InputWrapper>

      <TextError message={order.payment?.error} color="danger" />
    </El.InputContainer>
  );
};

export default Select;
