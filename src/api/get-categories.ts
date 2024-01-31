import { CategoryList } from "@/@types/category";
import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export async function GetCategorys() {
  const authToken = Cookies.get("auth::token");

  const response = await api.get<CategoryList>("/category", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data.categorys;
}
