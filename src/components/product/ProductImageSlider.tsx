"use client";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ProductImageSlider = ({
  images,
  name,
}: {
  images: string[];
  name: string;
}) => {
  return (
    <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:mr-8 border border-theme-extend-colors-gray-light2 rounded-lg">
      <div className="w-full h-full flex justify-center items-center">
        <Swiper
          modules={[Pagination]}
          pagination={true}
          slidesPerView={1}
          spaceBetween={20}
        >
          {images?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[80%] aspect-square mx-auto ">
                <Image
                  fill
                  src={img}
                  alt={name}
                  className="object-contain object-center rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImageSlider;
