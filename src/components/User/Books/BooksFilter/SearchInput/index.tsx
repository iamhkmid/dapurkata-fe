import { FC, useRef } from "react";
import IconsControl from "../../../../IconsControl";
import * as El from "./SearchInputElement";

type TProps = {
  changeSearchInput: (p: string) => void;
  search: string;
};

const SearchInput: FC<TProps> = (props) => {
  const { changeSearchInput, search } = props;
  const inputRef = useRef<HTMLInputElement>();
  return (
    <El.InputWrapper>
      <El.Input
        type="text"
        ref={inputRef}
        placeholder="Cari berdasarkan judul/penulis"
        onChange={(e) => changeSearchInput(e.target.value)}
      />
      <El.SearchIcon className="search-icon">
        {IconsControl("search")}
      </El.SearchIcon>
      <El.CloseIcon
        className="close-icon"
        isShowed={!!search}
        onClick={() => {
          inputRef.current.value = "";
          changeSearchInput("");
        }}
      >
        {IconsControl("close-outline")}
      </El.CloseIcon>
    </El.InputWrapper>
  );
};

export default SearchInput;
