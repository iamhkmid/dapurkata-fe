import { capitalize } from "lodash";
import Router, { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { WishlistCtx } from "../../../../contexts/WishlistCtx";
import { TBookCard } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import * as El from "./BookCardsElement";
import BookCardsLoading from "./BookCardsLoading";

type TProps = {
  data: TBookCard[];
  isLoading: boolean;
};

const BookCards: FC<TProps> = ({ data, isLoading }) => {
  const { user } = useContext(AuthContext);
  const { query } = useRouter();
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { wishlist } = useContext(WishlistCtx);
  const { dispatch } = useContext(UserNavCtx);

  return (
    <El.Main>
      {isLoading && <BookCardsLoading />}
      {!isLoading && data?.length === 0 && (
        <El.NoBook>Buku tidak ditemukan</El.NoBook>
      )}
      {!isLoading && (
        <El.Cards initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {data?.map((book, index) => {
            const inCart = shoppingCart.data.find(
              (val) => val.Book.id === book.id
            );
            const price = book.price;
            const priceWithDiscount =
              book.discount > 0
                ? book.price - (book.price * book.discount) / 100
                : book.price;
            return (
              <El.Card
                key={book.id}
                onClick={() =>Router.push(`/books/${book.id}`)
                  // dispatch({
                  //   type: "SHOW_POPUP",
                  //   value: { name: "BOOK_DETAIL", bookId: book.id },
                  // })
                }
              >
                <El.CoverWrapper>
                  {book.stock === 0 && (
                    <div className="empty-cover">
                      <h1>Habis</h1>
                    </div>
                  )}
                  <ImageResponsive
                    src={book.coverURL}
                    alt={book.title}
                    height={290}
                    width={200}
                    quality={75}
                  />
                </El.CoverWrapper>
                <El.BookInfo>
                  <div className="info1">
                    <h1 className="title">{book.title}</h1>
                    <h1 className="author">{book.authorName}</h1>
                  </div>
                  <div className="info2">
                    <div className="price-wrapper">
                      <h1 className="discount-price">
                        <NumberFormat
                          prefix="Rp"
                          value={priceWithDiscount}
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                        />
                      </h1>
                      {book.discount > 0 && (
                        <h1 className="normal-price">
                          <NumberFormat
                            prefix="Rp"
                            value={price}
                            displayType={"text"}
                            thousandSeparator={"."}
                            decimalSeparator={","}
                          />
                        </h1>
                      )}
                    </div>
                    <div className="additional-info">
                      {book.discount > 0 && (
                        <div className="discount">{`${book.discount}% OFF`}</div>
                      )}
                      <div className="text">{capitalize(book.coverType)}</div>
                      {!!wishlist?.Book.find((val) => val.id === book.id) && (
                        <div className="wishlist">{IconsControl("HEART")}</div>
                      )}
                    </div>
                  </div>
                </El.BookInfo>
              </El.Card>
            );
          })}
        </El.Cards>
      )}
    </El.Main>
  );
};

export default BookCards;
