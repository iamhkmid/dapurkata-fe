import { createContext, FC, ReactNode, useEffect, useReducer } from "react";
import { TOrderCtx } from "../types/context";
import { reducer, initialValue } from "../reducer/order";

export const OrderCtx = createContext<TOrderCtx | undefined>(undefined);

const OrderCtxProvider: FC<ReactNode> = ({ children }) => {
  const [order, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const paymentTypeId = order.payment.selected.paymentTypeId;
    const paymentTypes = order.payment.data.paymentTypes;
    if (paymentTypes.length > 0 && !!paymentTypeId) {
      dispatch({
        type: "SET_PAYMENT_SERVICES",
        value:
          paymentTypes.find((val) => val.id === paymentTypeId)
            ?.PaymentService || [],
      });
    }
  }, [order.payment.selected.paymentTypeId, order.payment.data.paymentTypes]);

  return (
    <OrderCtx.Provider value={{ order, dispatch }}>
      {children}
    </OrderCtx.Provider>
  );
};

export default OrderCtxProvider;
