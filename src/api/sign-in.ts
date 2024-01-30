import { api } from "@/lib/axios";

import Cookies from "js-cookie";

export interface SignInRequest {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInRequest) {
  const response = await api.post("/auth/login", { email, password });
  Cookies.set("auth::token", response.data.token);
}
