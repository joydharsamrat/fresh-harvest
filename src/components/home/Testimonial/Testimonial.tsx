import Container from "@/components/shared/Container";
import TestimonialSlides from "./TestimonialSlides";
import Image from "next/image";
import smallLeaf from "@/assets/images/SmallLeaf.png";

const Testimonial = () => {
  return (
    <section>
      <Container>
        <div className="relative">
          <div className="text-center mb-12  mx-auto flex flex-col items-center gap-4">
            <p className="text-sm sm:text-lg font-medium text-secondary bg-secondary bg-opacity-5 p-1 rounded-lg w-fit ">
              Testimonial
            </p>
            <h2 className="text-3xl sm:text-5xl font-medium text-black">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm sm:w-[40%] text-theme-extend-colors-gray mt-2">
              Don&apos;t just take our word for it—here&apos;s what some of our
              customers have to say about their experience with Fresh Harvest:
            </p>
          </div>
          <div className="sm:px-40">
            <TestimonialSlides />
          </div>
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

export default Testimonial;
