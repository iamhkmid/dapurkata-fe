export type TGetBook = {
  id: string;
  title: string;
  description;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  length: number;
  width: number;
  weight: number;
  stock: number;
  price: number;
  condition: string;
  discount: number;
  coverType: string;
  language: string;
  isbn: string;
  pictureDir: string;
  Category: {
    id: string;
    name: string;
  }[];
  Author: {
    id: string;
    name: string;
  };
  Publisher: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

type TGQLGetBook = {
  book: TGetBook;
};
export type TOrderBook = {
  id: string;
  title: string;
  price: number;
  weight: number;
  discount: number;
  Author: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
};
type TGQLGetOrderBook = {
  book: TOrderBook;
};

type TGQLGetFormBookInit = {
  book: {
    id: string;
    title: string;
    description;
    edition: string;
    series: string;
    releaseYear: string;
    numberOfPages: number;
    length: number;
    width: number;
    weight: number;
    stock: number;
    price: number;
    condition: string;
    discount: number;
    coverType: string;
    language: string;
    isbn: string;
    Category: {
      id: string;
      name: string;
      group: string;
    }[];
    Author: {
      id: string;
      name: string;
    };
    Publisher: {
      id: string;
      name: string;
    };
  };
};

type TGQLGetBookDel = {
  book: {
    id: string;
    title: string;
  };
};

type TGQLBooks = {
  books: {
    id: string;
    title: string;
    price: number;
    stock: string;
    isbn: string;
    Author: {
      id: string;
      name: string;
    };
    createdAt: number;
    updatedAt: number;
  }[];
};

type TGQLCreateBook = {
  createBook: {
    id: string;
    title: string;
    price: number;
    stock: string;
    Category: {
      id: string;
      name: string;
      group: string;
    };
    Author: {
      id: string;
      name: string;
    };
    createdAt: Date;
    updatedAt: Date;
  };
};

type TGQLUpdateBook = {
  updateBook: {
    id: string;
    title: string;
    price: number;
    stock: string;
    Category: {
      id: string;
      name: string;
      group: string;
    };
    Author: {
      id: string;
      name: string;
    };
    createdAt: Date;
    updatedAt: Date;
  };
};

type TBookDetail = {
  id: string;
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  weight: number;
  length: number;
  width: number;
  stock: number;
  price: number;
  condition: string;
  discount: number;
  coverType: string;
  language: string;
  isbn: string;
  Category: {
    id: string;
    name: string;
  }[];
  Author: {
    id: string;
    name: string;
  };
  Publisher: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
};

type TGQLBookDetail = {
  book: TBookDetail;
};
type TGQLGetBooksATC = {
  book: TBookDetail[];
};

export type TGQLBookCards = {
  booksWithFilter: {
    hasPrev: boolean;
    hasNext: boolean;
    skip: number;
    take: number;
    currentPage: number;
    numberOfPages: number;
    numberOfBooks: number;
    data: TBookCard[];
  };
};

export type TBookCard = {
  id: string;
  title: string;
  price: number;
  stock: number;
  discount: number;
  coverType: string;
  coverURL: string;
  authorName: string;
};

type TGQLGetFormBook = {
  authors: {
    id: string;
    name: string;
  }[];
  publishers: {
    id: string;
    name: string;
  }[];
  categories: {
    id: string;
    name: string;
    group: string;
  }[];
};

export type TStoreFilter = {
  search?: string;
  categoryId: string;
  skip: number;
  take: number;
};
