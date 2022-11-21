import { FC } from "react";
import { TStoreFilter } from "../../../../types/book";
import * as El from "./BooksFilterElement";
import SearchInput from "./SearchInput";
import SelectCategory from "./SelectCategory";

type TProps = {
  changeSearchInput: (p: string) => void;
  changeCategory: (p: string) => void;
  filter: TStoreFilter;
  numberOfBooks?: number;
};

const BooksFilter: FC<TProps> = (props) => {
  const { changeSearchInput, filter, numberOfBooks, changeCategory } = props;
  return (
    <El.Main>
      <El.FilterOption>
        <SearchInput
          changeSearchInput={changeSearchInput}
          search={filter.search}
        />
        <SelectCategory
          changeCategory={changeCategory}
          selected={filter.categoryId}
        />
      </El.FilterOption>
      <El.BookInfo>
        <El.BookCount
          isShowed={
            (!filter.search || filter.search?.length < 1) && !!numberOfBooks
          }
        >{`Total buku : ${numberOfBooks || "-"}`}</El.BookCount>

        <El.BookCount
          isShowed={filter.search?.length > 0 && !!numberOfBooks}
        >{`Ditemukan ${numberOfBooks || "-"} buku`}</El.BookCount>
      </El.BookInfo>
    </El.Main>
  );
};

export default BooksFilter;
