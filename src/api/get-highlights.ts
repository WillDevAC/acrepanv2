import { ProductList } from "@/@types/product";
import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export async function GetHighlights() {
  const authToken = Cookies.get("auth::token");

  const response = await api.get<ProductList>("/product?isEmphasis=true", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data.products;
}
