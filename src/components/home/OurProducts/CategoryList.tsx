"use client";

import { useProductState } from "@/context/productStateContext";
import { TCategory } from "@/types";

const CategoryList = ({ categories }: { categories: TCategory[] }) => {
  const { selectedCategory, setSelectedCategory } = useProductState();

  return (
    <div className="flex gap-4">
      <button
        className={`px-4 py-2 rounded ${
          selectedCategory === "All"
            ? "bg-secondary text-white"
            : "border text-theme-extend-colors-gray"
        }`}
        onClick={() => setSelectedCategory("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded ${
            selectedCategory === category.id
              ? "bg-secondary text-white"
              : "border text-theme-extend-colors-gray"
          }`}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
