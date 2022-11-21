export type TFooterPhone = {
  id: string;
  type: string;
  phone: string;
};
export type TFooterAddress = {
  id: string;
  type: string;
  address: string;
};
export type TFooterMessage = {
  id: string;
  type: string;
  message: string;
};
export type TFooterSocialMedia = {
  id: string;
  type: string;
  name: string;
  url: string;
  isEnabled: boolean;
};

export type TGQLFooterInfoByUser = {
  footerPhone: TFooterPhone;
  footerAddress: TFooterAddress;
  footerMessage: TFooterMessage;
  footerSocialMedia: TFooterSocialMedia[];
};

export type TGQLFooterPhone = {
  footerPhone: TFooterPhone;
};

export type TGQLFooterAddress = {
  footerAddress: TFooterAddress;
};
export type TGQLFooterMessage = {
  footerMessage: TFooterMessage;
};
export type TGQLFooterSocialMedia = {
  footerSocialMedia: TFooterSocialMedia[];
};

export type TGQLUpdateFooterPhone = {
  updateFooterPhone: TFooterPhone;
};
export type TGQLUpdateFooterAddress = {
  updateFooterAddress: TFooterAddress;
};
export type TGQLUpdateFooterMessage = {
  updateFooterMessage: TFooterMessage;
};
export type TGQLUpdateFooterSocialMedia = {
  updateFooterSocialMedia: TFooterSocialMedia;
};
