import Image from "next/image";
import aboutImage from "@/assets/images/about-section.png";
import logo from "@/assets/images/Logo.png";
import mushroom from "@/assets/images/mushroom.png";
import { questrial } from "@/app/fonts";
import Container from "@/components/shared/Container";
import lineIcon from "@/assets/images/lineIcon.png";
import smallLeaf from "@/assets/images/SmallLeaf.png";

const About = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-5 bg-white">
          <div className="flex-1 h-auto w-full ">
            <div className="relative ">
              <div className="relative h-[400px] sm:h-[550px] rounded-b-full overflow-hidden">
                <Image
                  src={aboutImage}
                  alt="Person holding a crate of vegetables"
                  fill
                  className="rounded-lg "
                />
              </div>
              <div className="absolute bottom-[33%] right-1/4 bg-white p-2 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="relative h-5 w-5 sm:h-8 sm:w-8  mr-2">
                    <Image src={logo} alt="Fresh Harvests Logo" fill />
                  </div>
                  <span className="text-[10px] sm:text-sm font-bold text-black">
                    Fresh Harvests
                  </span>
                </div>
              </div>
              <div className=" p-2 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow absolute bottom-0 right-[20%]">
                <div className="relative">
                  <div className="absolute w-8 sm:w-10 h-8 sm:h-10 right-0 top-0 -translate-y-full translate-x-full ">
                    <Image
                      src={lineIcon}
                      objectPosition="center"
                      fill
                      alt="#"
                    />
                  </div>
                  {/* Product Image */}
                  <div className="bg-theme-extend-colors-gray-light2 rounded-lg p-2  mb-2">
                    <div className="relative h-8 w-12 sm:w-24 sm:h-16 ">
                      <Image
                        src={mushroom}
                        alt="Mushroom"
                        fill
                        objectFit="contain"
                        className="rounded"
                      />
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-[8px] sm:text-xs font-medium text-black text-center">
                    Mushroom
                  </h3>

                  {/* Product Price */}
                  <p
                    className={`text-[8px] sm:text-xs text-theme-extend-colors-gray text-center ${questrial.className}`}
                  >
                    $40
                  </p>

                  {/* Add to Cart Button */}
                  <p className="mt-2 w-full py-1 text-center text-[8px] sm:text-xs border  rounded-lg font-semibold  transition-colors">
                    Add to cart
                  </p>
                </div>
              </div>
              <Image
                src={smallLeaf}
                alt="leaf icon"
                width={50}
                height={50}
                className="absolute top-10 right-5 sm:top-20 sm:right-20"
              />
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-10 py-1 px-2 rounded-lg w-fit">
              About us
            </p>
            <h2 className=" text-3xl sm:text-5xl font-bold text-black mt-4">
              About Fresh Harvest
            </h2>
            <p
              className={`text-xs sm:text-sm mt-4 text-theme-extend-colors-gray ${questrial.className} `}
            >
              Welcome to Fresh Harvest, your premier destination for
              high-quality and fresh produce. We are passionate about providing
              you with the finest fruits, vegetables, and salad ingredients to
              nourish your body and delight your taste buds. With a commitment
              to excellence, sustainability, and customer satisfaction, Fresh
              Harvest is here to revolutionize your grocery shopping experience.
            </p>
            <button className="mt-4 px-6 py-2 border border-primary text-primary rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
