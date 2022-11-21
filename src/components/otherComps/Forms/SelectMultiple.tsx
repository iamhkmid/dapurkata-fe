import {
  ChangeEvent,
  forwardRef,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as El from "./SelectMultipleElement";
import TextError from "./TextMessage";
import IconsControl from "../../IconsControl";
import { TForm, TSelectMultiple } from "../../../types/TFormControl";
import TextLoading from "../Loading/TextLoading";
import Loading2 from "../Loading/Loading2";

type props = TSelectMultiple & TForm;

const SelectMultiple = forwardRef<any, props>((props, ref) => {
  const {
    label,
    name,
    error,
    message,
    options,
    clearError,
    register,
    isLoading,
    disabled,
  } = props;

  const [selected, setSelected] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusFilter, setIsFocusFilter] = useState(false);
  const inputFilterRef = useRef<HTMLInputElement>();
  const inputWrapperRef = useRef<HTMLDivElement>();
  const selectRef = useRef<HTMLSelectElement>();

  type TSelected = {
    selected: boolean;
    value: string;
  };
  const changeSelected = ({ value, selected }: TSelected) => {
    clearError(name);
    const opts = Array.from(selectRef.current.options);
    const optIndex = opts.findIndex((val) => val.value === value);
    opts[optIndex].selected = selected;
  };

  const close = () => {
    setIsFocus(false);
    setIsFocusFilter(false);
    inputWrapperRef.current.blur();
    inputFilterRef.current.blur();
  };

  useEffect(() => {
    if (options && selectRef.current) {
      const opts = Array.from(selectRef.current.selectedOptions);
      const optionsselected = opts.reduce(
        (acc, curr) => [...acc, curr.value],
        []
      );
      setSelected(optionsselected);
    }
  }, [selectRef.current?.selectedOptions.length, options]);

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
          {!isLoading &&
            options?.map((val, index) => {
              return (
                <El.Selected
                  isShowed={selected.includes(val.id)}
                  key={val.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeSelected({ selected: false, value: val.id });
                  }}
                >
                  {val.value}
                </El.Selected>
              );
            })}
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
            <El.NoOption
              isShowed={
                (!options || selected.length === options.length) && !isLoading
              }
            >
              no option
            </El.NoOption>
            <El.OptionWrapper
              isShowed={
                !!options && !isLoading && selected.length !== options.length
              }
            >
              {options &&
                options.map((val, index) => (
                  <El.Options
                    isShowed={
                      val.value.toLowerCase().includes(filter) &&
                      !selected.includes(val.id)
                    }
                    key={val.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeSelected({ selected: true, value: val.id });
                    }}
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
          name={`${name}[]`}
          ref={(ref) => {
            selectRef.current = ref;
            register(ref);
          }}
          multiple
        >
          {options?.map((val) => (
            <option key={val.id} value={val.id} />
          ))}
        </select>
      </El.HiddenSelect>
      <TextError message={message} color="danger" />
    </El.InputContainer>
  );
});

export default SelectMultiple;
