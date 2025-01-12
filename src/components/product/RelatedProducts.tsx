import { getAllProducts } from "@/actions/products";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types";

const RelatedProducts = async () => {
  const data = await getAllProducts();
  const products: TProduct[] = data.data.slice(0, 4);
  return (
    <section className="my-32">
      <div className="text-center mb-12 sm:w-[40%] mx-auto flex flex-col items-center gap-4">
        <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit ">
          Our Products
        </p>
        <h2 className="text-3xl sm:text-5xl font-medium text-black">
          Related products
        </h2>
        <p className="text-xs sm:text-sm text-theme-extend-colors-gray mt-2">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 justify-between border">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
