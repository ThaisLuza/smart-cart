import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.com";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
  });
};

export const useCategories = () => {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/products/categories`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: async () => {
      const url = category === "all" 
        ? `${API_URL}/products` 
        : `${API_URL}/products/category/${category}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
  });
};