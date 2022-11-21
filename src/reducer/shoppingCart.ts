import { TSCartRdcr, TSCartState } from "../types/context";

export const initialValue: TSCartState = {
  data: [],
  error: null,
  weight: 0,
  loading: false,
};
export const reducer: TSCartRdcr = (state, action) => {
  switch (action.type) {
    case "SET_SCART":
      return { ...state, data: action.value };
    case "SET_SCART_WEIGHT":
      return { ...state, weight: action.value };
    case "CLEAR_SCART":
      return initialValue;
    case "SET_LOADING_SCART":
      return { ...state, loading: action.value };
    case "CLEAR_LOADING_SCART":
      return { ...state, loading: false };
    case "SET_ERROR_SCART":
      return { ...state, error: action.value };
    case "CLEAR_ERROR_SCART":
      return { ...state, error: null };
    default:
      return state;
  }
};
