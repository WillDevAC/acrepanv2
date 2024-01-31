export interface Product {
  id: string;
  title: string;
  description: string;
  priceVarejo: number;
  priceAtacado: number;
  categoryId: string;
  isActive: boolean;
  imgId: string;
  countSellers: number;
  isEmphasis: boolean;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    createdAt: string;
    title: string;
    updatedAt: string;
  };
  img: {
    id: string;
    key: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ProductList {
  products: Product[];
}
