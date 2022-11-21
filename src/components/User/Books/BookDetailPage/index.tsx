import Router, { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { TCart } from "../../../../types/shoppingCart";
import Button from "../../../otherComps/Buttons/Button";
import PopUpHeader from "../../../otherComps/PopUpHeader/PopUpHeaderUser";
import AddCartInput from "../../Cart/AddCartInput";
import DeleteCart from "../../Cart/DeleteCart";
import UpdateCartInput from "../../Cart/UpdateCartInput";
import * as El from "./BookDetailElement";
import {
  useGQLAddWishlist,
  useGQLCreateSC,
  useGQLDeleteWishlist,
  useGQLGetbook,
} from "./useGQL";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import IconsControl from "../../../IconsControl";
import { WishlistCtx } from "../../../../contexts/WishlistCtx";
import Loading2 from "../../../otherComps/Loading/Loading2";
import LoadingBookDetail from "./LoadingBookDetail";

type TBookDetail = {
  bookId: string;
};

const BookDetailPage: FC<TBookDetail> = ({ bookId }) => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { wishlist } = useContext(WishlistCtx);
  const { push, pathname } = useRouter();
  const [coverURL, setCoverURL] = useState<string>(null);
  const [amount, setAmount] = useState<number>(1);
  const [currCart, setCurrCart] = useState<TCart>(null);
  const [readMore, setReadMore] = useState<boolean>(false);

  const { dataGB, loadGB, errorGB } = useGQLGetbook({ bookId });
  const { createShoppingCart, data, error, loading } = useGQLCreateSC();
  const { addWishlist, data: dataWL, loading: loadingWL } = useGQLAddWishlist();
  const {
    deleteWishlist,
    data: dataDWL,
    loading: loadingDWL,
  } = useGQLDeleteWishlist();

  type TwishlistHandler = { bookId: string };
  const wishlistHandler = ({ bookId }: TwishlistHandler) => {
    if (!user) {
      push(`/auth/login?next=${pathname}`);
      dispatch({ type: "CLOSE_POPUP" });
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Anda harus login terlebih dahulu",
          color: "warning",
        },
      });
    } else if (!!wishlist?.Book?.find((val) => val.id === dataGB.id)) {
      deleteWishlist({ bookId: dataGB.id });
    } else {
      addWishlist({ bookId: dataGB.id });
    }
  };
  type TbuyNowHandler = { amount: number; bookId: string; stock: number };
  const buyNowHandler = (props: TbuyNowHandler) => {
    const { amount, bookId, stock } = props;
    if (!user) {
      push(`/auth/login?next=${pathname}`);
      dispatch({ type: "CLOSE_POPUP" });
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Anda harus login terlebih dahulu",
          color: "warning",
        },
      });
    } else if (amount > stock) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Stok barang tidak mencukupi",
          color: "warning",
        },
      });
    } else {
      dispatch({ type: "CLOSE_POPUP" });
      push({
        pathname: "/u/order",
        query: { type: "buy-now", "book-id": bookId, amount },
      });
    }
  };

  useEffect(() => {
    if (dataGB) {
      const cover = dataGB.BookPicture.filter((img) => img.type === "COVER");
      setCoverURL(cover.length > 0 && cover[0].url);
    }
  }, [dataGB]);

  useEffect(() => {
    const findCart =
      shoppingCart.data.find((val) => val.Book.id === bookId) || null;
    setCurrCart(findCart);
  }, [shoppingCart]);

  return (
    <El.Main>
      {loadGB && <LoadingBookDetail />}
      {dataGB && !loadGB && (
        <El.ContentWrapper>
          <El.IconWrapper onClick={() => Router.push("/books")}>
            {IconsControl("chevron-back-outline")} <p>Kembali</p>
          </El.IconWrapper>
          <El.Content>
            <El.Images>
              <El.CoverWrapper>
                <div>
                  <ImageResponsive
                    src={coverURL}
                    alt={dataGB.title}
                    height={220}
                    width={150}
                    quality={75}
                  />
                </div>
              </El.CoverWrapper>
            </El.Images>
            <El.InfoWrapper>
              <El.MainInfo>
                <h1 className="title">{dataGB.title}</h1>
                <h1 className="author">{dataGB.Author.name}</h1>
                <div className="cover-type">
                  <h1>{dataGB.coverType}</h1>
                </div>
                {dataGB.stock === 0 && (
                  <div className="empty-stock">
                    <h1>STOK HABIS</h1>
                  </div>
                )}
              </El.MainInfo>
              <El.OrderInfo>
                <div className="price">
                  {dataGB.discount > 0 && (
                    <div className="normal-price-wrapper">
                      <div className="normal-price">
                        <NumberFormat
                          prefix="Rp"
                          value={dataGB.price}
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                        />
                      </div>
                      <h1 className="discount">{`${dataGB.discount}% OFF`}</h1>
                    </div>
                  )}
                  <h1 className="discount-price">
                    <NumberFormat
                      prefix="Rp"
                      value={
                        dataGB.price - (dataGB.price * dataGB.discount) / 100
                      }
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                    />
                  </h1>
                </div>
                {!currCart && (
                  <AddCartInput amount={amount} setAmount={setAmount} />
                )}
                {currCart && (
                  <El.CartBtn>
                    <UpdateCartInput
                      cartProps={{
                        cartId: currCart.id,
                        amount: currCart.amount,
                      }}
                    />
                    <DeleteCart cartId={currCart.id} />
                  </El.CartBtn>
                )}
                <El.OrderButtons>
                  <Button
                    type="button"
                    name="Keranjang"
                    icon="BAG-OUTLINE"
                    color="primary"
                    isLoading={loading}
                    disabled={
                      shoppingCart.loading ||
                      loadGB ||
                      (user && user.role !== "USER") ||
                      !!currCart ||
                      dataGB.stock === 0
                    }
                    onClick={() =>
                      createShoppingCart({
                        bookId: dataGB.id,
                        weight: dataGB.weight,
                        amount,
                      })
                    }
                  />
                  <Button
                    type="button"
                    name="Beli Sekarang"
                    color="section"
                    onClick={() =>
                      buyNowHandler({
                        amount,
                        bookId: dataGB.id,
                        stock: dataGB.stock,
                      })
                    }
                    disabled={
                      loading ||
                      shoppingCart.loading ||
                      loadGB ||
                      (user && user.role !== "USER") ||
                      dataGB.stock === 0
                    }
                  />
                  <El.Button
                    type="button"
                    active={
                      !!wishlist?.Book?.find((val) => val.id === dataGB.id)
                    }
                    onClick={() => wishlistHandler({ bookId: dataGB.id })}
                    disabled={
                      (user && user.role !== "USER") || loadingWL || loadingDWL
                    }
                  >
                    {IconsControl("HEART-OUTLINE")}
                    Wishlist
                    {(loadingWL || loadingDWL) && (
                      <El.LoadingWrapper>
                        <Loading2 />
                      </El.LoadingWrapper>
                    )}
                  </El.Button>
                </El.OrderButtons>
              </El.OrderInfo>
            </El.InfoWrapper>
          </El.Content>
          <El.Content2>
            <El.Categories>
              <h1 className="section-name">Kategori</h1>
              <div className="category">
                {dataGB.Category.map((val) => (
                  <div key={val.id}>{val.name}</div>
                ))}
              </div>
            </El.Categories>
            <El.BookDescription>
              <h1 className="section-name">Deskripsi Buku</h1>
              <div className="desc-wrapper">
                <p className="description">
                  {readMore
                    ? dataGB.description
                    : dataGB.description.slice(0, 350)}
                  {!readMore && dataGB.description.length > 350 && (
                    <span>{`... `}</span>
                  )}
                </p>
                {dataGB.description.length > 350 && (
                  <div className="read-more-wrapper">
                    <div
                      className="read-more"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Ringkas Deskripsi" : "Baca Selengkapnya"}
                    </div>
                  </div>
                )}
              </div>
            </El.BookDescription>
            <El.AdditionalInfo>
              <h1 className="section-name">Detail</h1>
              <div className="info-wrapper">
                <div className="ai-group">
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Kondisi</h1>
                    <h1 className="ai-value capitalize">{dataGB.condition}</h1>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Panjang</h1>
                    <h1 className="ai-value">{`${dataGB.length} cm`}</h1>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Lebar</h1>
                    <h1 className="ai-value">{`${dataGB.width} cm`}</h1>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Berat</h1>
                    <h1 className="ai-value">{`${dataGB.weight} gram`}</h1>
                  </div>
                </div>
                <div className="ai-group">
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Jumlah Halaman</h1>
                    <h1 className="ai-value">{dataGB.numberOfPages}</h1>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Tahun Terbit</h1>
                    <h1 className="ai-value">{dataGB.releaseYear}</h1>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Bahasa</h1>
                    <h1 className="ai-value">{dataGB.language}</h1>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">ISBN</h1>
                    <h1 className="ai-value">{dataGB.isbn}</h1>
                  </div>
                </div>
                <div className="ai-group">
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Penerbit</h1>
                    <div className="publisher">
                      <h1>{dataGB.Publisher.name}</h1>
                    </div>
                  </div>
                  <div className="ai-wrapper">
                    <h1 className="ai-name">Stok</h1>
                    <h1 className="ai-value">
                      {dataGB.stock > 0 ? dataGB.stock : "Habis"}
                    </h1>
                  </div>
                  {dataGB.edition && (
                    <div className="ai-wrapper">
                      <h1 className="ai-name">Edisi</h1>
                      <h1 className="ai-value">{dataGB.edition}</h1>
                    </div>
                  )}
                  {dataGB.series && (
                    <div className="ai-wrapper">
                      <h1 className="ai-name">Seri</h1>
                      <h1 className="ai-value">{dataGB.series}</h1>
                    </div>
                  )}
                </div>
              </div>
            </El.AdditionalInfo>
          </El.Content2>
        </El.ContentWrapper>
      )}
    </El.Main>
  );
};

export default BookDetailPage;
