export interface Category {
  id: string;
  createdAt: string;
  title: string;
  updatedAt: string;
}

export interface CategoryList {
  categorys: Category[];
  count: number;
}
