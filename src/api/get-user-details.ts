import { User } from "@/@types/user";
import { api } from "@/lib/axios";


export async function getUserDetails() {
  const response = await api.get<User>("/user/me");
  return response.data;
}
