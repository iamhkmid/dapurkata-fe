import { TCart } from "./cart";

export type TUser = {
  id: string;
  username: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  userPicture: string;
};
export type TGqlSignin = {
  login: { jwt: string; user: TUser };
};

export type TGQLGoogleOauth2Verify = {
  googleOauth2Verify: { jwt: string; user: TUser };
};

export type TGqlCheckUser = {
  checkUser: TUser;
};

export type TGQLFormSignin = {
  username: string;
  password: string;
  rememberMe: boolean;
};
export type TGQLRegister = {
  register: {
    email: string;
    expirationTime: Date;
    message: string;
    fetchWaitTime: number;
  };
};

export type TGQLRegisterConfirm = {
  registerConfirmation: {
    user: TUser;
    message: string;
  };
};
export type TGQLResetPassword = {
  resetPassword: {
    message: string;
  };
};
export type TGQLResendConfirmCode = {
  resendConfirmCode: {
    type: string;
    email: string;
    expirationTime: number;
    fetchWaitTime: number;
    message: string;
  };
};
