import { useState } from "react";
import IconsControl from "../../IconsControl";
import { options } from "../../../data/table";
import * as El from "./SelectSizeElement";

const SelectSize = ({ setPageSize, pageSize }) => {
  const [isFocus, setIsFocus] = useState(false);

  const changeFocus = (value) => {
    setIsFocus(value);
  };

  return (
    <El.PageSizeContainer>
      <El.InputWrapper
        tabIndex={0}
        onClick={() => changeFocus(isFocus ? false : true)}
        onBlur={() => {
          changeFocus(false);
        }}
      >
        <El.SelectStyled>
          {pageSize}
          <El.DropdownIconWrapper active={isFocus ? true : false}>
            {IconsControl("chevron-up-outline")}
          </El.DropdownIconWrapper>
        </El.SelectStyled>
        <El.BorderBottom />
        <El.DropdownContainer>
          {isFocus && (
            <El.Dropdown>
              <>
                {options && options.length === 0 && (
                  <El.NoOption>no option</El.NoOption>
                )}
                {options.map((value, index) => (
                  <El.Options
                    key={value}
                    onClick={() => {
                      setPageSize(value);
                    }}
                  >
                    {value}
                  </El.Options>
                ))}
              </>
            </El.Dropdown>
          )}
        </El.DropdownContainer>
      </El.InputWrapper>
    </El.PageSizeContainer>
  );
};

export default SelectSize;
