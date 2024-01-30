import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export interface SignUpRequest {
  email: string;
  name: string;
  phone: string,
  password: string,
}

export async function signUp({ email, name, phone, password }: SignUpRequest) {
  const response = await api.post("/auth/register", { email, name, phone, password });
  Cookies.set("auth::token", response.data.token);
}
