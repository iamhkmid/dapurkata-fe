import { TUserNavRdcr, TUserNavState } from "../types/context";

export const reducer: TUserNavRdcr = (state, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        menu: action.value === state.menu ? null : action.value,
      };
    case "CLOSE_MENU":
      return { ...state, menu: null };
    case "SHOW_POPUP": {
      if (!!state.popup.name) {
        return {
          ...state,
          popup: {
            ...action.value,
            backTo: state.popup,
          },
        };
      } else {
        return { ...state, popup: { ...action.value, backTo: null } };
      }
    }
    case "CLOSE_POPUP": {
      if (!!state.popup.backTo) {
        return { ...state, popup: state.popup.backTo };
      } else {
        return { ...state, popup: { name: null, value: null, backTo: null } };
      }
    }
    case "SHOW_GLOBAL_MESSAGE":
      return {
        ...state,
        globalMessage: {
          isShowed: true,
          message: action.value.message,
          color: action.value.color,
        },
      };
    case "CLOSE_GLOBAL_MESSAGE":
      return {
        ...state,
        globalMessage: { color: null, message: null, isShowed: false },
      };
    case "CHANGE_NAV_MENU":
      return {
        ...state,
        selectedNavMenu: action.menu,
      };

    default:
      return state;
  }
};

export const initialValue: TUserNavState = {
  menu: null,
  popup: { name: null, backTo: null },
  globalMessage: { color: null, message: null, isShowed: false },
  selectedNavMenu: null,
};
