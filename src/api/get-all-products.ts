import { useQuery } from "react-query";
import { api } from "@/lib/axios";

export function useGetProducts(type = "all", filter = "null") {
  const queryKey = [type, filter];

  const queryFn = async () => {
    const endpoint =
      type === "highlighted"
        ? "/product?idEmphasis=true"
        : type === "all"
        ? "/product"
        : `/product?search=${filter}`;

    try {
      const response = await api.get(endpoint);
      return response.data.products;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  };

  return useQuery(queryKey, queryFn);
}
