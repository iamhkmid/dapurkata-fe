import { FC, useEffect } from "react";
import { useContext, useRef, useState } from "react";
import IconsControl from "../../../../IconsControl";
import TextError from "../../../../otherComps/Forms/TextMessage";
import Loading2 from "../../../../otherComps/Loading/Loading2";
import TextLoading from "../../../../otherComps/Loading/TextLoading";
import * as El from "./SelectCategoryElement";
import { useGQLCategories } from "./useGQL";

type TProps = {
  changeCategory: (p: string) => void;
  selected: string;
};

const SelectCategory: FC<TProps> = (props) => {
  const { changeCategory, selected } = props;
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState(false);
  const selectRef = useRef<HTMLDivElement>();

  const { data, loading, error } = useGQLCategories();

  const close = () => {
    setIsFocus(false);
    selectRef.current.blur();
  };
  const changeSelected = (value: string) => {
    changeCategory(value);
    close();
  };

  return (
    <El.InputContainer>
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
          isError={!!error?.message}
          isFocus={isFocus}
          disabled={disabled}
          isLoading={false}
        >
          <El.CloseWrapper isShowed={isFocus} onClick={() => close()} />
          {!loading && (
            <El.Text>
              {data?.find((val) => val.id === selected)?.name || "Semua"}
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
            error={!!error?.message}
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
              <El.Options
                isShowed={true}
                isSelected={selected === "all"}
                onClick={() => changeSelected("all")}
              >
                <h1>Semua</h1>
              </El.Options>
              {data &&
                data.map((val, index) => (
                  <El.Options
                    isShowed={true}
                    isSelected={val.id === selected}
                    key={val.id}
                    onClick={() => changeSelected(val.id)}
                  >
                    <h1>{val.name}</h1>
                  </El.Options>
                ))}
            </El.OptionWrapper>
          </El.DropdownWrapper>
        </El.Dropdown>
      </El.InputWrapper>

      <TextError message={error?.message} color="danger" />
    </El.InputContainer>
  );
};
export default SelectCategory;
