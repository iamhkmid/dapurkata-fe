import * as El from "./RadioButtonElement";
import { useContext, useEffect, useRef } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { useState } from "react";
import Loading from "./Loading";
import Image from "next/image";
import { useWindowSize } from "react-use";

type TImgSize = { h: number; w: number };

const RadioButton = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const { loading, error } = order.payment;
  const initialImgSize = { h: 50, w: 50 };
  const [imgSize, setImgSize] = useState<TImgSize>(initialImgSize);
  const { width } = useWindowSize();
  useEffect(() => {
    width > 540 && setImgSize(initialImgSize);
    width <= 540 && setImgSize({ h: 50, w: 50 });
  }, [width]);
  type TCS = { id: string };
  const changeSelected = ({ id }: TCS) => {
    dispatch({ type: "SET_PAYMENT_SERVICE_ID", value: id });
  };
  useEffect(() => {
    const paymentServices = order.payment.data.paymentServices;
    const paymentServiceId = order.payment.selected.paymentServiceId;

    if (paymentServices.length > 0 && !paymentServiceId) {
      dispatch({
        type: "SET_PAYMENT_SERVICE_ID",
        value: paymentServices[0].id,
      });
    } else if (!!paymentServiceId) {
    }
  }, [
    order.payment.data.paymentServices,
    order.payment.selected.paymentServiceId,
  ]);

  return (
    <El.Main>
      {loading && <Loading />}
      {!loading &&
        !order.payment.error &&
        order.payment.data.paymentServices?.map((val) => (
          <El.InputRadio
            key={val.id}
            isSelected={order.payment.selected.paymentServiceId === val.id}
            onClick={() => changeSelected({ id: val.id })}
          >
            <El.Detail>
              <El.ImgWrapper>
                <Image
                  src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${val.icon}`}
                  height={imgSize.h}
                  width={imgSize.w}
                  alt={val.name}
                  layout="fixed"
                />
              </El.ImgWrapper>
              <El.TextInfo
                isSelected={order.payment.selected.paymentServiceId === val.id}
              >
                <h1>{val.name}</h1>
                <h1>{val.description}</h1>
              </El.TextInfo>
            </El.Detail>
          </El.InputRadio>
        ))}
    </El.Main>
  );
};

export default RadioButton;
