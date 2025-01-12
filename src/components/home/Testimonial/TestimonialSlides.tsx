"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import customer1 from "@/assets/images/customers/customer1.jpg";
import customer2 from "@/assets/images/customers/customer2.jpg";
import customer3 from "@/assets/images/customers/customer3.jpg";
import Image from "next/image";
import lineIcon from "@/assets/images/lineIcon.png";

export default function TestimonialSlides() {
  return (
    <div className="">
      <Swiper
        modules={[Pagination]}
        pagination={true}
        slidesPerView={1}
        spaceBetween={20}
        style={{
          padding: "50px 0",
        }}
        className="w-full "
      >
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center justify-center cursor-grab">
            <div className="sm:w-1/3 px-5 mb-12 sm:mb-0">
              <div className="relative h-80 w-52 rounded-full ">
                <div className="absolute w-8 sm:w-12 h-8 sm:h-12 z-10 right-0 top-0 -translate-y-full translate-x-1/2">
                  <Image src={lineIcon} objectPosition="center" fill alt="#" />
                </div>
                <Image
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  src={customer1}
                  alt="person"
                  className="scale-110 rounded-full"
                />
              </div>
            </div>
            <div className="sm:w-2/3 bg-theme-extend-colors-gray-light1 p-5 rounded-3xl">
              <p className="text-theme-extend-colors-gray text-sm sm:text-xl mb-4">
                {" "}
                &quot;I absolutely love Fresh Harvest! The quality of their
                produce is outstanding. It&apos;s always fresh, flavorful, and
                delicious. The convenience of ordering online and having it
                delivered to my doorstep saves me so much time. Fresh Harvest
                has become my go-to for all my fruit and vegetable needs.&quot;
              </p>

              <p className="text-black">
                <span className="font-semibold">Jane Doe</span> - Professional
                chef
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center justify-center cursor-grab">
            <div className="sm:w-1/3  px-5 mb-12 sm:mb-0">
              <div className="relative h-80 w-52 rounded-full ">
                <div className="absolute w-8 sm:w-12 h-8 sm:h-12 z-10 right-0 top-0 -translate-y-full translate-x-1/2">
                  <Image src={lineIcon} objectPosition="center" fill alt="#" />
                </div>
                <Image
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  src={customer2}
                  alt="person"
                  className="scale-110 rounded-full"
                />
              </div>
            </div>
            <div className="sm:w-2/3 bg-theme-extend-colors-gray-light1 p-5 rounded-3xl">
              <p className="text-theme-extend-colors-gray text-sm sm:text-xl mb-4">
                &quot;As a chef, quality ingredients are a must, and Fresh
                Harvest never disappoints. Their produce is fresh, vibrant, and
                packed with flavor. The online platform is easy to use, and the
                timely deliveries ensure my kitchen is always stocked with the
                best.&quot;
              </p>
              <p className="text-secondary-700">
                <span className="font-semibold">Mark Johnson</span> -
                Professional Chef
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center justify-center cursor-grab">
            <div className="sm:w-1/3  px-5 mb-12 sm:mb-0">
              <div className="relative h-80 w-52 rounded-full ">
                <div className="absolute w-8 sm:w-12 h-8 sm:h-12 z-10 right-0 top-0 -translate-y-full translate-x-1/2">
                  <Image src={lineIcon} objectPosition="center" fill alt="#" />
                </div>
                <Image
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  src={customer3}
                  alt="person"
                  className="scale-110 rounded-full"
                />
              </div>
            </div>
            <div className="sm:w-2/3 bg-theme-extend-colors-gray-light1 p-5 rounded-3xl">
              <p className="text-theme-extend-colors-gray text-sm sm:text-xl mb-4">
                &quot;Fresh Harvest has completely transformed the way I shop
                for produce. Their fruits and vegetables are always top-notch,
                and I love how eco-conscious their packaging is. The customer
                service is fantastic too! I can always trust them to deliver the
                best quality right to my home.&quot;
              </p>
              <p className="text-secondary-700">
                <span className="font-semibold">Emily Carter</span> -
                Nutritionist
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
