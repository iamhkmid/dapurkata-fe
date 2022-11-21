import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { FC } from "react";
import { TGQLBookCards, TGQLBooks } from "../../../../types/book";
import * as El from "./BooksPaginationElement";
import Button from "./Button";

type TProps = {
  hasPrev: boolean;
  hasNext: boolean;
  skip: number;
  take: number;
  currentPage: number;
  numberOfPages: number;
  changePage: (p: { skip: number; take: number }) => void;
};
const BooksPagination: FC<TProps> = (props) => {
  const {
    changePage,
    currentPage,
    hasNext,
    hasPrev,
    numberOfPages,
    skip,
    take,
  } = props;
  return (
    <El.Main>
      <El.PageInfo>{`Halaman ${currentPage} dari ${numberOfPages}`}</El.PageInfo>
      <El.Pagination>
        <Button
          name="Prev"
          disabled={!hasPrev}
          onClick={() => changePage({ skip: skip - 1, take })}
          buttonFor="next_or_prev"
        />
        <El.Pages>
          {Array.from(Array(numberOfPages).keys()).map(
            (val, index) =>
              (val === 0 /*first page*/ ||
                val + 1 === numberOfPages /*last page*/ ||
                (val <= currentPage + (currentPage === 1 ? 2 : 1) &&
                  val >= currentPage - 1) /*after first page*/ ||
                (currentPage > numberOfPages - 3 &&
                  val > numberOfPages - 5)) /*before last page*/ && (
                <div key={val}>
                  <Button
                    name={(val + 1).toString()}
                    onClick={() => changePage({ skip: val, take })}
                    buttonFor="page_number"
                    active={val + 1 === currentPage}
                  />
                </div>
              )
          )}
        </El.Pages>
        <Button
          name="Next"
          disabled={!hasNext}
          onClick={() => changePage({ skip: skip + 1, take })}
          buttonFor="next_or_prev"
        />
      </El.Pagination>
    </El.Main>
  );
};

export default BooksPagination;
