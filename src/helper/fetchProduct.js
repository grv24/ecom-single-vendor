export const fetchProducts = async (params) => {
    const queryString = new URLSearchParams(params).toString();
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${baseURL}/product/search?${queryString}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };