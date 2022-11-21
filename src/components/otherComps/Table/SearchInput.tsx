import { useRef } from "react";
import IconsControl from "../../IconsControl";
import * as El from "./SearchInputElement";
const SearchInput = ({ filter, setFilter }) => {
  const iconRef = useRef<HTMLDivElement>();
  return (
    <El.InputContainer>
      <El.InputWrapper>
        <El.IconWrapper ref={iconRef}>{IconsControl("search")}</El.IconWrapper>
        <El.InputElement
          name="search"
          type="text"
          autoComplete="off"
          value={filter || ""}
          onFocus={() => iconRef.current.classList.add("focus")}
          onBlur={() => iconRef.current.classList.remove("focus")}
          onChange={(e) => setFilter(e.target.value)}
        />
        <El.BorderBottom />
      </El.InputWrapper>
    </El.InputContainer>
  );
};

export default SearchInput;
