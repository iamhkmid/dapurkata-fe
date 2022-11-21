import { TAdminNavRdcr, TAdminNavState } from "../types/context";

export const reducer: TAdminNavRdcr = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER_DETAIL_NAV":
      return { ...state, userDetailNav: action.value };
    case "OPEN_SIDEBAR":
      return { ...state, sidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, sidebar: false };
    case "SIDEBAR_TOGGLER":
      return { ...state, sidebar: !state.sidebar };
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
    case "CLOSE_CURRENT_POPUP": {
      if (!!state.popup.backTo) {
        return { ...state, popup: state.popup.backTo };
      } else {
        return { ...state, popup: initialValue.popup };
      }
    }
    case "CLOSE_ALL_POPUP": {
      return { ...state, popup: initialValue.popup };
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

    default:
      return state;
  }
};

export const initialValue: TAdminNavState = {
  sidebar: true,
  popup: {
    name: null,
    userId: null,
    bookId: null,
    authorId: null,
    categoryId: null,
    publisherId: null,
    backTo: null,
  },
  globalMessage: { color: null, message: null, isShowed: false },
  userDetailNav: "CHANGE_DATA",
};
