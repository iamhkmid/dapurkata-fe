import { useEffect } from "react";
import { useContext, useRef, useState } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import IconsControl from "../../../../../IconsControl";
import TextError from "../../../../../otherComps/Forms/TextMessage";
import Loading2 from "../../../../../otherComps/Loading/Loading2";
import TextLoading from "../../../../../otherComps/Loading/TextLoading";
import * as El from "./SelectElement";
import { useGQLCourier } from "./useGQL";

const Select = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState(false);
  const selectRef = useRef<HTMLDivElement>();

  const { data, loading, error } = useGQLCourier();

  const close = () => {
    setIsFocus(false);
    selectRef.current.blur();
  };
  const changeSelected = (value: { code: string }) => {
    dispatch({ type: "SET_COURIER_CODE", value: value.code });
    close();
  };
  useEffect(() => {
    if (order.courier.loading || !order.recipient.data.recipient || !data) {
      setDisabled(true);
    } else {
      dispatch({
        type: "SET_COURIER_CODE",
        value: order.courier.selected.code || data[0].code,
      });
      setDisabled(false);
    }
  }, [order.courier.loading, order.recipient.data.recipient, data]);

  useEffect(() => {
    if (disabled) {
      setIsFocus(false);
      selectRef.current.blur();
    }
  }, [disabled]);
  return (
    <El.InputContainer>
      <El.Label>Kurir</El.Label>
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
          {!loading && (
            <El.Text>
              {
                data?.find((val) => val.code === order.courier.selected?.code)
                  ?.name
              }
            </El.Text>
          )}
          {loading && (
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

            <El.NoOption isShowed={!data || (data.length < 0 && !loading)}>
              no option
            </El.NoOption>

            <El.OptionWrapper isShowed={!!data && data.length > 0 && !loading}>
              {data &&
                data.map((val, index) => (
                  <El.Options
                    isShowed={true}
                    isSelected={val.code === order.courier.selected?.code}
                    key={val.code}
                    onClick={() => changeSelected({ code: val.code })}
                  >
                    {val.name}
                  </El.Options>
                ))}
            </El.OptionWrapper>
          </El.DropdownWrapper>
        </El.Dropdown>
      </El.InputWrapper>

      <TextError message={order.courier?.error} color="danger" />
    </El.InputContainer>
  );
};

export default Select;
