export type TOrderListsUser = {
  ordersListUser: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      PaymentType: {
        id: string;
        name: string;
      };
    };
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    fraudStatus: string;
  }[];
};

export type TOrderListsUsers = {
  ordersListUsers: {
    id: string;
    CustomerDetail: {
      id: string;
      firstName: string;
      lastName: string;
    };
    transactionTime: number;
    transactionStatus: string;
    shippingStatus: string;
  }[];
};

export type TOrderListUserByAdmin = {
  ordersListUsers: {
    id: string;
    transactionTime: number;
    transactionStatus: string;
    shippingStatus: string;
  }[];
};
type TOrderPaymentInfo = {
  id: string;
  PaymentService: {
    id: string;
    name: string;
    icon: string;
    description: string;
    PaymentType?: {
      id: string;
      name: string;
      icon: string;
      description: string;
    };
  };
  grossAmount: number;
  currency: string;
  transactionTime: number;
  expirationTime: number;
  transactionStatus: string;
  fraudStatus: string;
  PaymentInfo: { name: string; value: string }[];
};
export type TGQLMutationOrder = {
  order: TOrderPaymentInfo;
};

type TGQLPaymentInfo = { name: string; value: string };

type TItemDetail = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type TCustomerDetail = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderId: string;
  ShippingAddress: TShippingAddress;
};

type TShippingAddress = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  countryCode: string;
  customerDetailId: string;
};

export type TCourierDetail = {
  service: string;
  description: string;
  cost: number;
  Courier: {
    code: string;
    name: string;
  };
};
export type TGQLPaymentService = {
  id: string;
  name: string;
  isEnabled: boolean;
  icon: string;
  description: string;
};

export type TGQLHowToPay = {
  howToPay: {
    name: string;
    stages: string[];
  }[];
};

export type TGQLOrderInfoSubscription = {
  orderInfo: {
    transactionTime: number;
    transactionStatus: string;
    fraudStatus: string;
  };
};

export type TGQLPaymentInfoQuery = {
  order: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      icon: string;
      description: string;
      PaymentType?: {
        id: string;
        name: string;
        icon: string;
        description: string;
      };
    };
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    fraudStatus: string;
    PaymentInfo: { name: string; value: string }[];
  };
};

export type TGQLOrderDetailByUserQuery = {
  order: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      icon: string;
      description: string;
      PaymentType?: {
        id: string;
        name: string;
        icon: string;
        description: string;
      };
    };
    ItemDetail?: TItemDetail[];
    CustomerDetail: TCustomerDetail;
    CourierDetail: TCourierDetail;
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    shippingStatus: string;
    receiptNumber?: string;
    fraudStatus: string;
  };
};
export type TGQLOrderDetailByAdminQuery = {
  order: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      icon: string;
      description: string;
      PaymentType?: {
        id: string;
        name: string;
        icon: string;
        description: string;
      };
    };
    ItemDetail?: TItemDetail[];
    CustomerDetail: TCustomerDetail;
    CourierDetail: TCourierDetail;
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    shippingStatus: string;
    receiptNumber?: string;
    fraudStatus: string;
  };
};

export type TGQLOrderDetailByAdminQuery = {
  order: {
    id: string;
    PaymentService: {
      id: string;
      name: string;
      icon: string;
      description: string;
      PaymentType?: {
        id: string;
        name: string;
        icon: string;
        description: string;
      };
    };
    ItemDetail?: TItemDetail[];
    CustomerDetail: TCustomerDetail;
    grossAmount: number;
    currency: string;
    transactionTime: number;
    expirationTime: number;
    transactionStatus: string;
    shippingStatus: string;
    receiptNumber?: string;
    fraudStatus: string;
  };
};

export type TFormChangeSS = {
  shippingStatus: string;
  receiptNumber: string;
};

export type TGQLOrderDetailInit = {
  order: {
    id: string;
    shippingStatus: string;
    receiptNumber: string;
  };
};
export type TGQLChangeShippingStatus = {
  changeShippingStatus: {
    message: string;
  };
};
