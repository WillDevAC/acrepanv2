import { User } from "@/@types/user";
import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export async function getUserDetails() {
  const authToken = Cookies.get("auth::token");

  const response = await api.get<User>("/user/me", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}
