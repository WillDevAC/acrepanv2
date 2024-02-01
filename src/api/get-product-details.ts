import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export async function GetProductDetails(id: string) {
  const authToken = Cookies.get("auth::token");

  const response = await api.get(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
}
