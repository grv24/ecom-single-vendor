import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../helper/fetchProduct";

export function useProducts(params) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });
}
