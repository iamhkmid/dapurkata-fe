import { FC, useContext, useRef } from "react";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import IconsControl from "../../../IconsControl";
import * as El from "./AddCartInputElement";

type TAddCartInput = {
  setAmount: (val: number) => void;
  amount: number;
};

const AddCartInput: FC<TAddCartInput> = ({ setAmount, amount }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { shoppingCart } = useContext(ShoppingCartCtx);

  const changeAmount = (val: string) => {
    const numVal = Math.floor(Number(val));
    const sliceVal = val.slice(0, 1);
    const setValue = (val: number) => {
      setAmount(val);
      inputRef.current.value = String(val);
    };

    if (sliceVal === "0") {
      setValue(1);
    } else if (numVal > 100) {
      setValue(100);
    } else if (numVal < 1) {
      setValue(1);
    } else {
      setValue(numVal);
    }
  };
  return (
    <El.Main>
      <El.InputWrapper>
        <El.AmountBtn
          onClick={() =>
            changeAmount(String(Number(inputRef.current.value) - 1))
          }
          disabled={amount === 1 || shoppingCart.loading}
        >
          {IconsControl("Minus")}
        </El.AmountBtn>
        <El.Input
          type="number"
          defaultValue={amount}
          ref={inputRef}
          onChange={(e) => changeAmount(e.target.value)}
        />
        <El.AmountBtn
          onClick={() =>
            changeAmount(String(Number(inputRef.current.value) + 1))
          }
          disabled={amount === 100 || shoppingCart.loading}
        >
          {IconsControl("Plus")}
        </El.AmountBtn>
      </El.InputWrapper>
    </El.Main>
  );
};

export default AddCartInput;
