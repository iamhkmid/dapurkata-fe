export type TWishlist = {
  id: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
  Book: {
    id: string;
    title: string;
    coverURL: string;
    Author: {
      id: string;
      name: string;
    };
  }[];
};

export type TGQLWishlistQuery = {
  wishlist: TWishlist;
};

export type TGQLAddWishlist = {
  addWishlist: {
    message: string;
  };
};

export type TGQLDeleteWishlist = {
  deleteWishlist: {
    message: string;
  };
};
