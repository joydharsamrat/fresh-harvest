import React from "react";
import Image from "next/image";
import { TProduct } from "@/types";
import { questrial } from "@/app/fonts";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { productName, price, images, id } = product;
  return (
    <Link href={`/product/${id}`}>
      <div className=" p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
        {/* Product Image */}
        <div className="bg-theme-extend-colors-gray-light2 rounded-lg p-2  mb-4">
          <div className="relative w-full h-20 sm:h-40 ">
            <Image
              src={images[0]}
              alt={productName}
              fill
              objectFit="contain"
              className="rounded"
            />
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-medium text-black text-center">
          {productName}
        </h3>

        {/* Product Price */}
        <p
          className={`text-lg text-theme-extend-colors-gray text-center ${questrial.className}`}
        >
          ${price}
        </p>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full py-2 border  rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
