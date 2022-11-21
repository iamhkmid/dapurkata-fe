export type TPaymentService = {
  id: string;
  name: string;
  icon: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TPaymentType = {
  id: string;
  name: string;
  icon: string;
  PaymentService: TPaymentService[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TGQLPaymentType = {
  paymentType: TPaymentType[];
};
