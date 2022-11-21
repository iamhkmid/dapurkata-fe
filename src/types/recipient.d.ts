export type TRecipient = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  City: {
    id: string;
    name: string;
    postalCode: string;
    Province: {
      id: string;
      name: string;
    };
  };
  address: string;
};

export type TCreateRcptVar = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cityId: string;
    address: string;
  };
};

export type TUpdateRcptVar = {
  data: {
    recipientId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cityId: string;
    address: string;
  };
};

type TGQLRecipient = {
  recipient: TRecipient;
};

type TGQLCreateRecipient = {
  createRecipient: TRecipient;
};

type TGQLDelRecipient = {
  deleteRecipient: { message: String };
};

type TGQLUpdateRecipient = {
  updateRecipient: TRecipient;
};

type TUpdateRcptDefVal = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: { id: string; value: string };
  city: { id: string; value: string };
  address: string;
};

type TRecipients = {
  recipients: TRecipient[];
};

type TAddressListByAdmin = {
  recipients: {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
  }[];
};
