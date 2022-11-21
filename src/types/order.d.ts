type TPaymentInfo = { name: string; value: string };

export type TGQLOrder = {
  order: {
    id: string;
    currency: string;
    grossAmount: number;
    transactionTime: Date;
    expirationTime: Date;
    paymentId: string;
    paymentType: string;
    PaymentInfo: TPaymentInfo[];
  };
};
