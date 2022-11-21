import { ApolloError } from "@apollo/client";
import { Dispatch } from "react";
import { TUser } from "./auth";
import { TOrderBook } from "./book";
import { TPaymentService, TPaymentType } from "./payment";
import { TRecipient } from "./recipient";
import { TCart } from "./shoppingCart";
import { TOrderPaymentInfo } from "./transaction";
import { TAuthUser, TNotification } from "./user";
import { TWishlist } from "./wishlist";

// AUTH CONTEXT
export type TAuthContext = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  user: TAuthUser;
  setUser: (user: TUser) => void;
  error: string;
  setError: (params: string) => void;
};

// SHOPPINGCART CONTEXT
type TSCartAction =
  | { type: "SET_SCART"; value: TCart[] }
  | { type: "SET_SCART_WEIGHT"; value: number }
  | { type: "CLEAR_SCART" }
  | { type: "SET_LOADING_SCART"; value: boolean }
  | { type: "CLEAR_LOADING_SCART" }
  | { type: "SET_ERROR_SCART"; value: ApolloError }
  | { type: "CLEAR_ERROR_SCART" };
export type TSCartRdcr = (
  state: TSCartState,
  action: TSCartAction
) => TSCartState;
type TSCartState = {
  data: TCart[];
  weight: number;
  loading: boolean;
  error: ApolloError;
};
export type TShoppingCartCtx = {
  shoppingCart: TSCartState;
  dispatch: Dispatch<TSCartAction>;
};

// APOLLO CLIENT CONTEXT
export type TApolloClientCtx = {
  isLoggin: boolean;
  setIsLoggin: (val: boolean) => void;
};

// ORDER CONTEXT
type TCourier = {
  code: string;
  name: string;
  cost: number;
  service: string;
  etd: string;
  description: string;
};

type TOrderType =
  | { type: "shoppingcart" }
  | {
      type: "buy-now";
      amount: number;
      book: TOrderBook;
      weight: number;
    };

export type TOrderState = {
  recipient: {
    selected: { id: string };
    data: { recipient: TRecipient; recipients: TRecipient[] };
    loading: boolean;
    error: string;
  };
  courier: {
    selected: { code: string; courier: TCourier };
    loading: boolean;
    error: string;
  };
  payment: {
    selected: { paymentTypeId: string; paymentServiceId: string };
    data: { paymentTypes: TPaymentType[]; paymentServices: TPaymentService[] };
    loading: boolean;
    error: string;
  };
  order: TOrderType & {
    recipientId: string;
    loading: boolean;
    error: string;
  };
};
type TOrderAction =
  | { type: "SET_ORDER_TYPE"; value: TOrderType }
  | { type: "SET_RECIPIENT_ID"; value: string }
  | { type: "SET_ORDER_LOADING"; value: boolean }
  | { type: "SET_RECIPIENTS"; value: TRecipient[] }
  | { type: "SET_RECIPIENT_LOADING"; value: boolean }
  | { type: "SET_COURIER_CODE"; value: string }
  | { type: "SET_COURIER_SERVICE"; value: TCourier }
  | { type: "SET_COURIER_LOADING"; value: boolean }
  | { type: "SET_COURIER_ERROR"; value: string }
  | { type: "SET_PAYMENT_TYPE_ID"; value: string }
  | { type: "SET_PAYMENT_SERVICE_ID"; value: string }
  | { type: "SET_PAYMENT_TYPES"; value: TPaymentType[] }
  | { type: "SET_PAYMENT_SERVICES"; value: TPaymentService[] }
  | { type: "SET_PAYMENT_LOADING"; value: boolean }
  | { type: "SET_PAYMENT_ERROR"; value: string }
  | { type: "CLEAR_ORDER" };

export type TOrderRdcr = (
  state: TOrderState,
  action: TOrderAction
) => TOrderState;

export type TOrderCtx = {
  order: TOrderState;
  dispatch: Dispatch<TOrderAction>;
};

type TMessage = {
  message: string;
  isShowed: boolean;
  color: "danger" | "success" | "warning";
};

// ADMIN NAV CONTEXT
type TUserDetailNav =
  | "CHANGE_DATA"
  | "CHANGE_ROLE"
  | "WISHLIST"
  | "SHOPPINGCART"
  | "ORDER"
  | "RECIPIENT";
type TAdminPopUpVal = {
  nested?: boolean;
} & (
  | { name: "BOOK_UPDATE"; bookId: string }
  | { name: "BOOK_DELETE"; bookId: string }
  | { name: "BOOK_DETAIL"; bookId: string }
  | { name: "CATEGORY_UPDATE"; categoryId: string }
  | { name: "CATEGORY_DELETE"; categoryId: string }
  | { name: "CATEGORY_DETAIL"; categoryId: string }
  | { name: "AUTHOR_UPDATE"; authorId: string }
  | { name: "AUTHOR_DELETE"; authorId: string }
  | { name: "AUTHOR_DETAIL"; authorId: string }
  | { name: "PUBLISHER_UPDATE"; publisherId: string }
  | { name: "PUBLISHER_DELETE"; publisherId: string }
  | { name: "PUBLISHER_DETAIL"; publisherId: string }
  | { name: "USER_DETAIL"; userId: string }
  | { name: "USER_DELETE"; userId: string }
  | { name: "USER_UPDATE"; userId: string }
  | { name: "ORDER_DETAIL"; orderId: string }
  | { name: "ADDRESS_DETAIL"; recipientId: string }
);

type TAdminPopUp = {
  backTo: TAdminPopUp;
} & TAdminPopUpVal;
export type TAdminNavState = {
  sidebar: boolean;
  popup: TAdminPopUp;
  globalMessage: TMessage;
  userDetailNav: TUserDetailNav;
};
type TAdminNavAction =
  | { type: "CHANGE_USER_DETAIL_NAV"; value: TUserDetailNav }
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "SIDEBAR_TOGGLER" }
  | { type: "SHOW_POPUP"; value: TAdminPopUpVal }
  | { type: "CLOSE_CURRENT_POPUP" }
  | { type: "CLOSE_ALL_POPUP" }
  | {
      type: "SHOW_GLOBAL_MESSAGE";
      value: {
        message: string;
        color: "danger" | "success" | "warning";
      };
    }
  | { type: "CLOSE_GLOBAL_MESSAGE" };

export type TAdminNavRdcr = (
  state: TAdminNavState,
  action: TAdminNavAction
) => TAdminNavState;

export type TAdminNavCtx = {
  adminNav: TAdminNavState;
  dispatch: Dispatch<TAdminNavAction>;
};

// USER NAV CONTEXT
type TUserPopUpVal =
  | {
      name: "CHANGE_RECIPIENT";
    }
  | {
      name: "ADD_RECIPIENT";
    }
  | {
      name: "UPDATE_RECIPIENT";
      recipientId?: string;
    }
  | {
      name: "AUTH_ERROR";
      value?: string;
    }
  | {
      name: "MESSAGE";
      message: string;
    }
  | {
      name: "ORDER_DETAIL";
      orderId: string;
    }
  | {
      name: "ORDER_PAYMENT_INFO";
      orderId: string;
    }
  | {
      name: "BOOK_DETAIL";
      bookId: string;
    }
  | {
      name: "CHANGE_PASSWORD";
    }
  | {
      name: "REGISTER_CONFIRM";
      email: string;
      fetchWaitTime?: number;
    }
  | {
      name: "ACTIVATE_ACCOUNT";
    }
  | {
      name: "RESET_PASSWORD";
    }
  | {
      name: "WISHLIST";
    };

type TUserPopUp = {
  backTo: TUserPopUp;
} & TUserPopUpVal;
type TUserMenu = "MENU" | "CART" | "NOTIF" | "SERVICES";

type TUserDropdown = "SERVICES";
type TUserNavAction =
  | { type: "SHOW_MENU"; value: TUserMenu }
  | { type: "CHANGE_NAV_MENU"; menu: string }
  | { type: "CLOSE_MENU" }
  | { type: "SHOW_POPUP"; value: TUserPopUpVal }
  | { type: "CLOSE_POPUP" }
  | {
      type: "SHOW_GLOBAL_MESSAGE";
      value: {
        message: string;
        color: "danger" | "success" | "warning";
      };
    }
  | { type: "CLOSE_GLOBAL_MESSAGE" };
export type TUserNavState = {
  menu: TUserMenu;
  popup: TUserPopUp;
  selectedNavMenu: string;
  globalMessage: TMessage;
};
export type TUserNavRdcr = (
  state: TUserNavState,
  action: TUserNavAction
) => TUserNavState;

export type TUserNavCtx = {
  userNav: TUserNavState;
  dispatch: Dispatch<TUserNavAction>;
};

export type TWishlistCtx = {
  wishlist: TWishlist;
  loading: boolean;
  error: ApolloError;
};

export type TNotificationCtx = {
  notification: TNotification[];
  loading: boolean;
  error: ApolloError;
  newNotif: boolean;
  setNewNotif: (p: boolean) => void;
};
