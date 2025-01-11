"use client";

import ProductCard from "@/components/product/ProductCard";
import { useProductState } from "@/context/productStateContext";
import { TProduct } from "@/types";

const ProductList = ({ products }: { products: TProduct[] }) => {
  const { selectedCategory, showAll, setShowAll } = useProductState();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.categoryId === selectedCategory);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 justify-between">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 text-center">
        {filteredProducts.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-700"
          >
            {showAll ? "Show Less Products" : "Show All Products"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
