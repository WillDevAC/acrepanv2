import { api } from "@/lib/axios";
import Cookies from "js-cookie";

interface UpdateAddressProfileRequest {
  cep: string;
  address: string;
  city: string;
  complement: string;
  number: string;
}

export async function updateProfileAddress({
  cep,
  address,
  city,
  complement,
  number,
}: UpdateAddressProfileRequest) {
  const authToken = Cookies.get("auth::token");

  const response = await api.put(
    "/user/me",
    {
      cep,
      address,
      city,
      complement,
      number,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
}
