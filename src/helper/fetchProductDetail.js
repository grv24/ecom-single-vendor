export const fetchProductDetail = async (productId, slug) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const response = await fetch(`${baseURL}/product/${productId}/${slug}`);

  if (!response.ok) {
    throw new Error("Network  response was not ok");
  }
  return response.json();
};
