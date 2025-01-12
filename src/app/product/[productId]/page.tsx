import { getProductById } from "@/actions/products";
import ProductDescriptionAndReviews from "@/components/product/ProductDescriptionAndReview";
import ProductImageSlider from "@/components/product/ProductImageSlider";
import ProductInfo from "@/components/product/ProductInfo";
import Container from "@/components/shared/Container";
import { TProduct } from "@/types";
import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const productData = await getProductById(productId);
  const product: TProduct = productData.data || {};
  return (
    <div className="py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch ">
          <ProductImageSlider
            images={product.images}
            name={product.productName}
          />

          <ProductInfo product={product} />
        </div>
        <ProductDescriptionAndReviews description={product.description} />
      </Container>
    </div>
  );
};

export default ProductDetails;
