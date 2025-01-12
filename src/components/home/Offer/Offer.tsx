import React from "react";
import Image from "next/image";
import { CountdownTimer } from "./CountdownTimer";
import Container from "@/components/shared/Container";
import styles from "@/styles/home/offer.module.css";
import fruits from "@/assets/images/offer.png";
import veggies from "@/assets/images/light-vegetables.png";
import smallLeaf from "@/assets/images/SmallLeaf.png";
import rightLeaf from "@/assets/images/heroRightLeaf.png";
import blurImg from "@/assets/images/blurIcon.png";

const Offer = () => {
  return (
    <section className={`${styles.offer} my-32`}>
      <div className="absolute top-0 right-0 transform  z-0 rotate-180 h-60 w-60 sm:w-80 sm:h-80">
        <Image
          src={veggies}
          alt="Vegetables Top Right "
          className="h-full w-full"
        />
      </div>

      <div className="absolute bottom-0 left-0 transform  z-0 h-60 w-60 sm:w-80 sm:h-80">
        <Image
          src={veggies}
          alt="Vegetables Bottom Left"
          className="h-full w-full"
        />
      </div>
      <Container>
        <div className="flex flex-col items-center sm:items-start p-4 md:p-8 relative text-center">
          <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit">
            Special Offer
          </p>
          <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-2">
            Seasonal Fruit Bundle
          </h2>
          <p className="text-3xl sm:text-5xl  mb-4">
            Discount up to{" "}
            <span className="text-primary block sm:inline">80% Off!</span>
          </p>

          <div className=" rounded-lg mb-4 w-full md:w-1/2 lg:w-1/3">
            <CountdownTimer />
          </div>
          <p className="text-xl sm:text-3xl font-semibold bg-green py-1 px-3 w-fit text-white rounded-full">
            CODE: <span className="font-bold text-yellow-400">FRUIT28</span>
          </p>
          <div className="hidden sm:block absolute  w-full md:w-1/2 lg:w-1/3 mb-4 right-0 bottom-1/2 translate-y-1/2">
            <Image
              src={fruits}
              alt="Seasonal Fruit Bundle"
              layout="responsive"
              width={300}
              height={200}
            />
          </div>
          <Image
            src={smallLeaf}
            alt="leaf icon"
            width={50}
            height={50}
            className="absolute top-2 right-2 sm:right-1/3 -rotate-90"
          />
        </div>
      </Container>
      <div className="absolute bottom-5 right-0 h-12 w-12 sm:h-20 sm:w-20">
        <Image src={rightLeaf} alt="leaf icon" fill />
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-20 sm:h-40 sm:w-40">
        <Image src={blurImg} alt="leaf icon" fill />
      </div>
    </section>
  );
};

export default Offer;
