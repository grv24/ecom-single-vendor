import { useQuery } from "@tanstack/react-query";


export function useProductDetail(productId, slug) {
  return useQuery({
    queryKey: ["product", productId, slug],
    queryFn: () => fetchProductDetail(productId, slug),
    enabled: !!productId && !!slug, // Only run query if both productId and slug exist
  });
}
