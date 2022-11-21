export type TCart = {
  id: string;
  Book: {
    id: string;
    title: string;
    price: number;
    weight: number;
    discount: number;
    Author: {
      id: string;
      name: string;
    };
    coverURL: string;
  };
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};
type TShoppingCartMutation = {
  id: string;
  message: string;
};
export type TGQLShoppingCart = { shoppingCart: TCart[] };
export type TGQLCreateShoppingCart = {
  createShoppingCart: TCart;
};
export type TGQLUpdateShoppingCart = {
  updateShoppingCart: TCart;
};
export type TGQLDeleteShoppingCart = {
  deletehoppingCart: TShoppingCartMutation;
};
