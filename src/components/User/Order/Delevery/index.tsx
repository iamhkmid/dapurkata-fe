import { FC, useContext, useEffect, useState } from "react";
import { OrderCtx } from "../../../../contexts/OrderCtx";
import IconsControl from "../../../IconsControl";
import Destination from "./Destination";
import ShippingMethod from "./ShippingMethod";
import * as El from "./DeleveryElement";
import Payment from "./Payment";
import LoadingPopup2 from "../../../otherComps/Loading/LoadingPopup2";

type TContent = {
  name: string;
  ContentComp?: FC;
  disabled?: boolean;
};
const Content: FC<TContent> = (Props) => {
  const { name, ContentComp, disabled } = Props;
  const [isShowed, setIsShowed] = useState<boolean>(!disabled);

  useEffect(() => {
    setIsShowed(!disabled);
  }, [disabled]);
  return (
    <El.Content>
      <El.ContentHeader
        onClick={() => !disabled && setIsShowed(!isShowed)}
        disabled={disabled}
      >
        <El.ContentTitle>{name}</El.ContentTitle>
        <El.DropdownIconWrapper isShowed={isShowed} disabled={disabled}>
          {IconsControl("chevron-up-outline")}
        </El.DropdownIconWrapper>
      </El.ContentHeader>
      <El.ContentBody isShowed={isShowed}>
        {ContentComp && <ContentComp />}
      </El.ContentBody>
    </El.Content>
  );
};

type TProps = {
  isEmpty: boolean;
  isLoading: boolean;
};

const Delevery: FC<TProps> = ({ isEmpty, isLoading }) => {
  const { order } = useContext(OrderCtx);

  return (
    <El.Main>
      {isLoading && <LoadingPopup2 />}
      {isEmpty && <El.EmptyCart>Keranjang Kosong</El.EmptyCart>}
      {!isEmpty && !isLoading && (
        <div>
          <Content
            name="Tujuan Pengiriman"
            ContentComp={Destination}
            disabled={false}
          ></Content>
          <Content
            name="Metode Pengiriman"
            ContentComp={ShippingMethod}
            disabled={!order.recipient.data.recipient}
          ></Content>
          <Content
            name="Pembayaran"
            ContentComp={Payment}
            disabled={
              !order.recipient.data.recipient ||
              !order.courier.selected.courier ||
              !!order.courier?.error
            }
          ></Content>
        </div>
      )}
    </El.Main>
  );
};

export default Delevery;
