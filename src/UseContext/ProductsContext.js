import { createContext } from "react";

export const ProductsContext = createContext({ products: [], setProducts: () => {} });
export const CategoryContext = createContext({ categories: [], setCategory: () => {} });


