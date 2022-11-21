import { TCourier, TOrderRdcr, TOrderState } from "../types/context";
import { TRecipient } from "../types/recipient";

export const initialValue: TOrderState = {
  recipient: {
    selected: { id: null },
    data: { recipient: null, recipients: [] },
    loading: false,
    error: null,
  },
  courier: {
    selected: { code: null, courier: null },
    loading: false,
    error: null,
  },
  payment: {
    selected: { paymentTypeId: null, paymentServiceId: null },
    data: { paymentTypes: [], paymentServices: [] },
    loading: false,
    error: null,
  },
  order: {
    type: null,
    recipientId: null,
    loading: false,
    error: null,
  },
};

export const reducer: TOrderRdcr = (state, action) => {
  const { courier, recipient, payment, order } = state;
  switch (action.type) {
    case "SET_ORDER_TYPE": {
      if (action.value.type === "buy-now") {
        const weight: number = action.value.book.weight * action.value.amount;
        return {
          ...state,
          order: {
            ...order,
            type: action.value.type,
            book: action.value.book,
            amount: action.value.amount,
            weight,
          },
        };
      } else {
        return {
          ...state,
          order: {
            ...order,
            type: action.value.type,
          },
        };
      }
    }
    case "SET_ORDER_LOADING": {
      return {
        ...state,
        order: { ...order, loading: action.value },
      };
    }
    case "SET_RECIPIENT_ID": {
      const { data } = recipient;
      if (data.recipients.length > 0 && !!action.value) {
        const findRcpt = data.recipients.find((val) => val.id === action.value);
        if (!!findRcpt) {
          return {
            ...state,
            recipient: {
              ...recipient,
              selected: { id: action.value },
              data: { ...data, recipient: findRcpt },
            },
          };
        } else {
          return {
            ...state,
            recipient: {
              ...recipient,
              selected: { id: action.value },
            },
          };
        }
      } else {
        return {
          ...state,
          recipient: {
            ...recipient,
            selected: { id: action.value },
            data: { ...recipient.data, recipient: null },
          },
        };
      }
    }
    case "SET_RECIPIENTS": {
      return {
        ...state,
        recipient: {
          ...recipient,
          data: { ...recipient.data, recipients: action.value },
        },
      };
    }
    case "SET_RECIPIENT_LOADING": {
      return {
        ...state,
        recipient: { ...recipient, loading: action.value },
      };
    }
    case "SET_COURIER_CODE": {
      const { selected } = courier;
      return {
        ...state,
        courier: {
          ...courier,
          selected: { ...selected, code: action.value },
        },
      };
    }
    case "SET_COURIER_SERVICE": {
      const { selected } = courier;
      let data: TCourier;
      if (action.value) {
        const etd = action.value.etd.toLowerCase().replace("hari", "");
        data = { ...action.value, etd: `${etd} Hari` };
        return {
          ...state,
          courier: {
            ...courier,
            selected: {
              ...selected,
              courier: data,
            },
          },
        };
      }
      return {
        ...state,
        courier: {
          ...courier,
          selected: {
            ...selected,
            courier: action.value,
          },
        },
      };
    }
    case "SET_COURIER_LOADING": {
      return {
        ...state,
        courier: {
          ...courier,
          loading: action.value,
        },
      };
    }
    case "SET_COURIER_ERROR": {
      return {
        ...state,
        courier: {
          ...courier,
          error: action.value,
        },
      };
    }
    case "SET_PAYMENT_TYPE_ID": {
      return {
        ...state,
        payment: {
          ...payment,
          selected: { ...payment.selected, paymentTypeId: action.value },
        },
      };
    }
    case "SET_PAYMENT_SERVICE_ID": {
      return {
        ...state,
        payment: {
          ...payment,
          selected: { ...payment.selected, paymentServiceId: action.value },
        },
      };
    }
    case "SET_PAYMENT_TYPES": {
      return {
        ...state,
        payment: {
          ...payment,
          data: { ...payment.data, paymentTypes: action.value },
        },
      };
    }
    case "SET_PAYMENT_SERVICES": {
      return {
        ...state,
        payment: {
          ...payment,
          data: { ...payment.data, paymentServices: action.value },
        },
      };
    }
    case "SET_PAYMENT_LOADING": {
      return {
        ...state,
        payment: {
          ...payment,
          loading: action.value,
        },
      };
    }
    case "SET_PAYMENT_ERROR": {
      return {
        ...state,
        payment: {
          ...payment,
          error: action.value,
        },
      };
    }
    case "CLEAR_ORDER": {
      return initialValue;
    }
    default:
      return state;
  }
};
