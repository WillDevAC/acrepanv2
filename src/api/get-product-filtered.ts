import { ProductList } from "@/@types/product";
import { api } from "@/lib/axios";
import Cookies from "js-cookie";

interface GetFilteredProductParams {
  searchItem: string;
}

export async function GetFilteredProduct(params: GetFilteredProductParams) {
  const authToken = Cookies.get("auth::token");

  const response = await api.get<ProductList>("/product", {
    params: {
      search: params.searchItem,
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data.products;
}
