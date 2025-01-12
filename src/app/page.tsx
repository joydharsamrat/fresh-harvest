import About from "@/components/home/AboutUs/About";
import Blogs from "@/components/home/Blog/Blogs";
import Hero from "@/components/home/hero/Hero";
import Offer from "@/components/home/Offer/Offer";
import Products from "@/components/home/OurProducts/Products";
import Testimonial from "@/components/home/Testimonial/Testimonial";
import Loader from "@/components/shared/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
      <About />
      <Offer />
      <Testimonial />
      <Blogs />
    </>
  );
}
