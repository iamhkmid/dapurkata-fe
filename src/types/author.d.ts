export type TAuthor = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TGQLAuthor = {
  author: TAuthor;
};

export type TGQLAuthors = {
  authors: TAuthor[];
};

export type TGQLCreateAuthor = {
  createAuthor: TAuthor;
};
export type TGQLUpdateAuthor = {
  updateAuthor: TAuthor;
};
export type TGQLDeleteAuthor = {
  deleteAuthor: TAuthor;
};

export type TFormCreateAuthor = {
  name: string;
};

export type TFormUpdateAuthor = {
  name: string;
};
export type TValCreateAuthor = { name: string };
export type TValUpdateAuthor = {
  authorId: string;
  name: string;
};
