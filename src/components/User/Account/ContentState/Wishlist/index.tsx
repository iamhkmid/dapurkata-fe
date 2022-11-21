import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { WishlistCtx } from "../../../../../contexts/WishlistCtx";
import Button from "../../../../otherComps/Buttons/Button";
import ImageFixed from "../../../../otherComps/ImageFixed";
import ImageResponsive from "../../../../otherComps/ImageResponsive";
import { useGQLDeleteWishlist } from "./useGQL";
import * as El from "./WishlistElement";
type TDelWL = {
  loading: boolean;
  bookId: string;
};
const Wishlist = () => {
  const { wishlist } = useContext(WishlistCtx);
  const initialLoad = { bookId: null, loading: false };
  const { deleteWishlist, loading: loadingDW } = useGQLDeleteWishlist();
  const [loading, setLoading] = useState<TDelWL>(initialLoad);

  const deleteHandler = ({ bookId }: { bookId: string }) => {
    setLoading({ bookId, loading: true });
    deleteWishlist({ bookId });
  };

  useEffect(() => {
    if (!loading) {
      setLoading(initialLoad);
    }
  }, [loadingDW]);
  return (
    <El.Main>
      {(!wishlist || wishlist?.Book?.length === 0) && (
        <div className="empty-list">Wishlist Kosong</div>
      )}
      {wishlist?.Book.map((val) => (
        <El.ItemWrapper key={val.id}>
          <El.CoverWrapper>
            <div>
              <ImageFixed
                src={val.coverURL}
                alt={val.title}
                height={75}
                width={50}
                quality={75}
                defaultIcon="dapurkata"
              />
            </div>
          </El.CoverWrapper>
          <El.InfoWrapper>
            <div className="info">
              <h1 className="title">{val.title}</h1>
              <h1 className="author">{val.Author.name}</h1>
            </div>
            <div className="button-wrapper">
              <Button
                type="button"
                name="Hapus"
                color="danger"
                isLoading={loading.bookId === val.id}
                disabled={loadingDW}
                onClick={() => deleteHandler({ bookId: val.id })}
              />
            </div>
          </El.InfoWrapper>
        </El.ItemWrapper>
      ))}
    </El.Main>
  );
};

export default Wishlist;
