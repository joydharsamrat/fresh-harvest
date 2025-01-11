"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ProductState = {
  selectedCategory: string;
  showAll: boolean;
  setSelectedCategory: (category: string) => void;
  setShowAll: (showAll: boolean) => void;
};

const ProductStateContext = createContext<ProductState | undefined>(undefined);

export const ProductStateProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  return (
    <ProductStateContext.Provider
      value={{ selectedCategory, showAll, setSelectedCategory, setShowAll }}
    >
      {children}
    </ProductStateContext.Provider>
  );
};

export const useProductState = () => {
  const context = useContext(ProductStateContext);
  if (!context) {
    throw new Error(
      "useProductState must be used within a ProductStateProvider"
    );
  }
  return context;
};
