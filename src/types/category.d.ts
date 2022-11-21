export type TCategory = {
  id: string;
  name: string;
  group: string;
  createdAt: Date;
  updatedAt: Date;
  numberOfBooks: number;
};
export type TGQLCategory = {
  category: TCategory;
};

export type TGQLCategories = {
  categories: TCategory[];
};

export type TGQLCreateCategory = {
  createCategory: TCategory;
};
export type TGQLUpdateCategory = {
  updateCategory: TCategory;
};
export type TGQLDeleteCategory = {
  deleteCategory: TCategory;
};

export type TFormCreateCategory = {
  name: string;
  group: string;
};

export type TFormUpdateCategory = {
  name: string;
  group: string;
};
export type TValCreateCategory = { name: string; group: string };
export type TValUpdateCategory = {
  categoryId: string;
  name: string;
  group: string;
};
