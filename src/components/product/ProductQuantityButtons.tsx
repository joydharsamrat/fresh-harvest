"use client";

import { useState } from "react";

const ProductQuantityButtons = ({ stock }: { stock: number }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex items-center mt-4">
      <p className="mr-2 text-lg font-medium">Quantity</p>
      <button
        disabled={quantity === 1}
        onClick={handleQuantityDecrease}
        className="border font-bold w-12 h-12 grid place-content-center rounded-l "
      >
        -
      </button>
      <span className=" border-y w-12 h-12 grid place-content-center">
        {quantity}
      </span>
      <button
        disabled={stock <= quantity}
        onClick={handleQuantityIncrease}
        className="border font-bold w-12 h-12 grid place-content-center rounded-r "
      >
        +
      </button>
      <p className="ml-2">/kg</p>
    </div>
  );
};

export default ProductQuantityButtons;
