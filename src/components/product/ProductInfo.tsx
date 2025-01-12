import { TCategory, TProduct } from "@/types";
import ProductQuantityButtons from "./ProductQuantityButtons";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { getCategoryById } from "@/actions/products";
import { questrial } from "@/app/fonts";

const ProductInfo = async ({ product }: { product: TProduct }) => {
  const categoryData = await getCategoryById(product?.categoryId);
  const category: TCategory = categoryData.data;
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
      <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit mb-2">
        {category.categoryName}
      </p>
      <h1 className="text-5xl font-bold text-primary-700 mb-4">
        {product.productName}
      </h1>
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-500 gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <span className="ml-2 text-theme-extend-colors-gray text-sm">
          <span className="text-lg font-medium mr-1 ml-2">5.0</span>
          <span className="text-xs font-medium">(1 review)</span>
        </span>
      </div>
      <p className="text-3xl font-semibold text-primary mb-4">
        ${product.price.toFixed(2)}/kg
      </p>
      <p
        className={`text-theme-extend-colors-gray text-lg mb-8 ${questrial.className}`}
      >
        {product.description}
      </p>

      {/* Quantity Controls */}
      <ProductQuantityButtons stock={product.stock} />

      {/* Add to Cart Button */}
      <div className="mt-8 text-center flex flex-col sm:flex-row items-center gap-5">
        <button
          disabled={product.stock === 0}
          className="w-full bg-theme-extend-colors-gray-light2  font-semibold py-3 px-6 rounded-md  disabled:bg-neutral-500 flex items-center justify-center gap-2"
        >
          <span className="text-theme-extend-colors-gray-light3">
            <FaHeart />
          </span>
          Save As Favorites
        </button>
        <button
          disabled={product.stock === 0}
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md  disabled:bg-neutral-500 flex items-center justify-center gap-2"
        >
          <span>
            <FaCartShopping />
          </span>{" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
