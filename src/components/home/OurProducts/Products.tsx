import { getAllCategories, getAllProducts } from "@/actions/products";
import Container from "@/components/shared/Container";
import ProductList from "./ProductsList";
import CategoryList from "./CategoryList";
import Image from "next/image";
import smallLeaf from "@/assets/images/SmallLeaf.png";

const Products = async () => {
  const categoryData = await getAllCategories();
  const data = await getAllProducts();
  return (
    <section className="my-12 sm:my-36 ">
      <Container>
        <div className="relative">
          <div className="text-center mb-12 sm:w-[40%] mx-auto flex flex-col items-center gap-4">
            <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit ">
              Our Products
            </p>
            <h2 className="text-3xl sm:text-5xl font-medium text-black">
              Our Fresh Products
            </h2>
            <p className="text-xs sm:text-sm text-theme-extend-colors-gray mt-2">
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
            <CategoryList categories={categoryData.data} />
          </div>

          <ProductList products={data.data} />

          <div className="absolute top-0 right-0 sm:top-10 sm:right-10 z-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              src={smallLeaf}
              alt="leaf icon"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-0 left-0 sm:top-24 sm:left-10 z-20 rotate-45 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              src={smallLeaf}
              alt="leaf icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
