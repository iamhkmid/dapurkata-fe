import { useState } from "react";
import { BOOKS_WITH_FILTER } from "../../../graphql/book/queries";
import { TGQLBookCards, TStoreFilter } from "../../../types/book";
import * as El from "./BooksElement";
import { useQuery } from "@apollo/client";
import BookCards from "./BookCards";
import BooksFilter from "./BooksFilter";
import BooksPagination from "./BooksPagination";

const Books = () => {
  const initialFilter = { skip: 0, take: 12, categoryId: "all" };
  const [filter, setFilter] = useState<TStoreFilter>(initialFilter);
  const { data, error, loading, refetch } = useQuery<TGQLBookCards>(
    BOOKS_WITH_FILTER,
    {
      variables: { filter },
      errorPolicy: "all",
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    }
  );

  const changeSearchInput = (search: string) => {
    setFilter({ ...initialFilter, search });
  };
  const changeCategory = (categoryId: string) => {
    setFilter({ skip: 0, take: 12, categoryId, search: filter.search });
  };

  const changePage = (p: { skip: number; take: number }) => {
    const { skip, take } = p;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setFilter({
      skip,
      take,
      search: filter.search,
      categoryId: filter.categoryId,
    });
  };

  return (
    <El.Main>
      <El.Section>
        <BooksFilter
          changeSearchInput={changeSearchInput}
          changeCategory={changeCategory}
          filter={filter}
          numberOfBooks={data?.booksWithFilter?.numberOfBooks || 0}
        />
        <BookCards data={data?.booksWithFilter?.data} isLoading={loading} />
        <BooksPagination
          changePage={changePage}
          hasPrev={data?.booksWithFilter?.hasPrev}
          hasNext={data?.booksWithFilter?.hasNext}
          currentPage={data?.booksWithFilter?.currentPage || 0}
          numberOfPages={data?.booksWithFilter?.numberOfPages || 0}
          skip={data?.booksWithFilter?.skip}
          take={data?.booksWithFilter?.take}
        />
      </El.Section>
    </El.Main>
  );
};

export default Books;
