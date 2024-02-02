import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export async function Purshase(purchaseData: any) {
  const authToken = Cookies.get("auth::token");

  const response = await api.post(`/product/buy-products`, purchaseData, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  console.log(response.data)
}
