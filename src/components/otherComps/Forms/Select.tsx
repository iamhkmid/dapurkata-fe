import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import TextError from "./TextMessage";
import * as El from "./SelectElement";
import IconsControl from "../../IconsControl";
import { TSelect, TForm } from "../../../types/TFormControl";
import { AnimatePresence } from "framer-motion";
import EllipsisLoading from "../Loading/EllipsisLoading";
import TextLoading from "../Loading/TextLoading";
import Loading2 from "../Loading/Loading2";
import { useMutationObservable } from "../../../services/useMutationObservable";
import { useCallback } from "react";

type props = TSelect & TForm;

const Select = forwardRef<any, props>((props, ref) => {
  const {
    label,
    name,
    error,
    message,
    options,
    isLoading,
    clearError,
    register,
    disabled,
  } = props;

  const [filter, setFilter] = useState<string>("");
  const [selected, setSelected] = useState<string>();
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusFilter, setIsFocusFilter] = useState(false);
  const inputFilterRef = useRef<HTMLInputElement>();
  const inputWrapperRef = useRef<HTMLDivElement>();
  const selectRef = useRef<HTMLSelectElement>();

  type TSelected = {
    value: string;
  };
  const changeSelected = ({ value }: TSelected) => {
    clearError(name);
    setIsFocus(false);
    inputWrapperRef.current.blur();
    const opts = Array.from(selectRef.current.options);
    const optIndex = opts.findIndex((val) => val.value === value);
    opts[optIndex].selected = true;
  };

  const close = () => {
    setIsFocus(false);
    setIsFocusFilter(false);
    inputWrapperRef.current.blur();
    inputFilterRef.current.blur();
  };

  useEffect(() => {
    if (options && selectRef.current && !isLoading) {
      setSelected(selectRef.current.selectedOptions[0]?.value);
    }
  }, [selectRef.current?.selectedIndex, options, isLoading, disabled]);

  return (
    <El.InputContainer>
      <El.Label htmlFor={name}>{label}</El.Label>
      <El.InputWrapper
        ref={inputWrapperRef}
        tabIndex={0}
        onFocus={() => {
          if (!disabled) {
            setIsFocus(true);
          } else {
            inputWrapperRef.current.blur();
          }
        }}
        onClick={() => {
          if (!disabled) {
            inputFilterRef.current.value = "";
            setFilter("");
          }
        }}
        onBlur={() => setIsFocus(false)}
      >
        <El.SelectStyled
          isError={error}
          isFocus={isFocus || isFocusFilter}
          disabled={disabled}
          isLoading={isLoading}
        >
          <El.CloseWrapper
            isShowed={isFocus || isFocusFilter}
            onClick={() => close()}
          />
          {!isLoading && (
            <El.Text>
              {!isLoading && options?.find((val) => val.id === selected)?.value}
            </El.Text>
          )}
          {isLoading && (
            <El.LoadingWrapper2>
              <Loading2 />
            </El.LoadingWrapper2>
          )}
          <El.DropdownIconWrapper
            isFocus={isFocus || isFocusFilter}
            disabled={disabled}
          >
            {IconsControl("chevron-up-outline")}
          </El.DropdownIconWrapper>
        </El.SelectStyled>
        <El.Dropdown
          isFocus={isFocus || isFocusFilter}
          onClick={(e) => e.stopPropagation()}
        >
          <El.DropdownWrapper>
            {isLoading && (
              <El.LoadingWrapper>
                <TextLoading text="Loading" />
              </El.LoadingWrapper>
            )}
            <El.InputFilter
              isShowed={!isLoading && options?.length > 5}
              ref={inputFilterRef}
              onFocus={() => setIsFocusFilter(true)}
              onBlur={() => setIsFocusFilter(false)}
              onChange={(e) => setFilter(e.target.value.toLowerCase())}
            />

            <El.NoOption isShowed={!options && !isLoading}>
              no option
            </El.NoOption>

            <El.OptionWrapper isShowed={!!options && !isLoading}>
              {options &&
                options.map((val, index) => (
                  <El.Options
                    isShowed={val.value.toLowerCase().includes(filter)}
                    key={val.id}
                    onClick={() => changeSelected({ value: val.id })}
                  >
                    {val.value}
                  </El.Options>
                ))}
            </El.OptionWrapper>
          </El.DropdownWrapper>
        </El.Dropdown>
      </El.InputWrapper>

      <El.HiddenSelect>
        <select
          name={name}
          defaultValue=""
          ref={(ref) => {
            register(ref);
            selectRef.current = ref;
          }}
        >
          <option disabled />
          {options?.map((val) => (
            <option key={val.id} value={val.id} />
          ))}
        </select>
      </El.HiddenSelect>
      <TextError message={message} color="danger" />
    </El.InputContainer>
  );
});

export default Select;
