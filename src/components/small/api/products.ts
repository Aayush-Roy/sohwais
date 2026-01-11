// import axios from "axios";
// import { Product } from "../types/product";

// interface ProductResponse {
//   products: Product[];
//   page: number;
//   pages: number;
//   total: number;
// }

// export const fetchProducts = async (): Promise<ProductResponse> => {
//   // const res = await axios.get<ProductResponse>(
//   //   "http://localhost:5000/api/products"
//   // );
//   const res = fetch("http://localhost:5000/api/products");
//   return res.data;
// };

import { Product } from "../types/product";

interface ProductResponse {
  products: Product[];
  page: number;
  pages: number;
  total: number;
}

export const fetchProducts = async (): Promise<ProductResponse> => {
  const res = await fetch("http://localhost:5000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductResponse = await res.json();
  return data;
};
