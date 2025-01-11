import Image from "next/image";
import React from "react";
import specialOfferImage from "@/assets/images/special-offer-img.png";
import specialOfferArrow from "@/assets/images/special-offer-arrow.svg";
import styles from "@/styles/home/hero/hero.module.css";

const Description = () => {
  return (
    <div className="sm:w-1/2 ">
      <div className="flex flex-col gap-6">
        <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit">
          Welcome to Fresh Harvest
        </p>

        <h1 className="text-[44px] lg:text-7xl font-extrabold text-black leading-tight">
          Fresh Fruits and Vegetables
        </h1>

        <p className="text-xs sm:text-lg text-theme-extend-colors-gray">
          At Fresh Harvest, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables.
        </p>

        <button className="px-8 py-4 text-sm sm:text-lg font-semibold bg-primary text-white rounded-lg w-fit">
          Shop Now
        </button>
      </div>
      <div className="flex sm:justify-end sm:gap-5">
        <div className="hidden sm:block">
          <Image
            alt="arrow sign"
            width={100}
            height={100}
            src={specialOfferArrow}
          />
        </div>
        <div className=" mt-8  bg-theme-extend-colors-gray-light1 border rounded-lg flex items-center  w-fit">
          <div className="p-2 sm:p-6 flex flex-col gap-1 sm:gap-2">
            <p className="text-[8px] sm:text-sm font-medium text-secondary">
              Special Offer
            </p>
            <h2 className="sm:text-3xl font-medium text-black">Fresh Salad</h2>
            <p className="space-x-1">
              <span className="text-[9px] sm:text-base text-secondary font-medium">
                Up to
              </span>{" "}
              <span className={`${styles.specialOffer} text-xs sm:text-2xl`}>
                70%
              </span>
              <span className="text-[9px] sm:text-base font-medium">off</span>
            </p>
            <p className="text-[8px] sm:text-sm bg-secondary py-1 px-2 w-fit text-white rounded-xl">
              CODE: <span className="font-bold text-yellow-400">FRESH25</span>
            </p>
          </div>
          <div className="relative h-20 w-20 sm:h-40 sm:w-40">
            <Image
              src={specialOfferImage}
              fill
              alt="Fresh Salad"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
