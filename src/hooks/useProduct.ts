import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com";

export const useProduct = (id: string | undefined) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/products/${id}`);
      if (!response.ok) throw new Error("Failed to fetch product");
      return response.json();
    },
    enabled: !!id,
  });
};