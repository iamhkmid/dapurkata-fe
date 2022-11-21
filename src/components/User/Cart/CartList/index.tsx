import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import Button from "../../../otherComps/Buttons/Button";
import ImageFixed from "../../../otherComps/ImageFixed";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import DeleteCart from "../DeleteCart";
import UpdateCartInput from "../UpdateCartInput";
import * as El from "./CartListElement";

const CartList = () => {
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [amountPrice, setAmountPrice] = useState(0);
  const { dispatch } = useContext(UserNavCtx);
  const { push } = useRouter();
  useEffect(() => {
    const amount = shoppingCart.data.reduce(
      (acc, curr) =>
        acc +
        (curr.Book.price - (curr.Book.price * curr.Book.discount) / 100) *
          curr.amount,
      0
    );
    setAmountPrice(amount);
  }, [shoppingCart]);
  return (
    <El.Main>
      <div>
        <El.list>
          <El.TableInfo>
            <thead>
              <tr>
                <th>Produk</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>
                      <El.Product>
                        <El.CoverWrapper>
                          <div>
                            <ImageFixed
                              src={val.Book.coverURL}
                              alt={val.Book.title}
                              height={75}
                              width={50}
                              quality={75}
                              defaultIcon="dapurkata"
                            />
                          </div>
                        </El.CoverWrapper>
                        <El.Info>
                          <h1>{val.Book.title}</h1>
                          <h1>{val.Book.Author.name}</h1>
                        </El.Info>
                      </El.Product>
                    </td>
                    <td>
                      <El.Price>
                        <NumberFormat
                          prefix="Rp"
                          value={
                            val.Book.price -
                            (val.Book.price * val.Book.discount) / 100
                          }
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                        />
                      </El.Price>
                    </td>
                    <td>
                      <El.ActionBtn>
                        <UpdateCartInput
                          cartProps={{
                            cartId: val.id,
                            amount: val.amount,
                          }}
                        />
                      </El.ActionBtn>
                    </td>
                    <td>
                      <El.ActionBtn>
                        <DeleteCart cartId={val.id} />
                      </El.ActionBtn>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </El.TableInfo>
          {shoppingCart.data.length === 0 && (
            <El.EmptyCart>Keranjang Kosong</El.EmptyCart>
          )}
        </El.list>
        <El.Footer>
          <El.AmountPrice>
            <h1>Total Harga</h1>
            <h1>
              <NumberFormat
                prefix="Rp"
                value={amountPrice}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
              />
            </h1>
          </El.AmountPrice>
          <El.BtnWrapper>
            <Button
              name="PESAN"
              type="button"
              disabled={shoppingCart.data.length === 0}
              onClick={() => {
                push({
                  pathname: "/u/order",
                  query: { type: "shoppingcart" },
                });
                dispatch({ type: "CLOSE_MENU" });
              }}
            />
          </El.BtnWrapper>
        </El.Footer>
      </div>
    </El.Main>
  );
};

export default CartList;
