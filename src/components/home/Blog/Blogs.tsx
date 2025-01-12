import Container from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import blog1 from "@/assets/images/blog/blog1.png";
import blog2 from "@/assets/images/blog/blog2.png";
import blog3 from "@/assets/images/blog/blog3.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import smallLeaf from "@/assets/images/SmallLeaf.png";

const BlogSection = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="relative">
          <div className="text-center mb-12 mx-auto flex flex-col items-center gap-4">
            <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit">
              Our Blog
            </p>
            <h2 className="text-3xl sm:text-5xl font-medium text-black">
              Fresh Harvest Blog
            </h2>
            <p className="text-xs sm:text-sm sm:w-[40%] text-gray-600 mt-2">
              Welcome to the Fresh Harvest Blog, your go-to resource for all
              things related to fresh produce, healthy eating, and culinary
              inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="">
              <Image
                src={blog1}
                alt="Exploring Seasonal Delights"
                width={400}
                height={300}
                className="rounded-t-lg"
              />
              <p className="text-lg text-gray-500 mt-4">May 23, 2024</p>
              <Link
                href="#"
                className="block text-lg font-medium text-black mt-2"
              >
                Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right
                Now
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-primary mt-4"
              >
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>

            <div className=" ">
              <Image
                src={blog2}
                alt="Mastering Salad Creations"
                width={400}
                height={300}
                className="rounded-t-lg"
              />
              <p className="text-lg text-gray-500 mt-4">May 23, 2024</p>

              <Link
                href="#"
                className="block text-lg font-medium text-black mt-2"
              >
                Mastering Salad Creations: Tips and Tricks for Building
                Delicious and Nutritious Salads
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-primary mt-4"
              >
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>

            <div className="">
              <Image
                src={blog3}
                alt="The Art of Meal Prepping"
                width={400}
                height={300}
                className="rounded-t-lg"
              />
              <p className="text-lg text-gray-500 mt-4">May 23, 2024</p>

              <Link
                href="#"
                className="block text-lg font-medium text-black mt-2"
              >
                The Art of Meal Prepping: How to Save Time and Eat Healthy
                Throughout the Week
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-primary mt-4"
              >
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block absolute top-0 right-0 sm:top-10 sm:right-10 z-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
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

export default BlogSection;
