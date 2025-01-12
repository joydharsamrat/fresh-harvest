import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Logo.png";
import Container from "./Container";
import { FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import visa from "@/assets/images/payment/Visa.png";
import paypal from "@/assets/images/payment/Paypal.png";
import applePay from "@/assets/images/payment/ApplePay.png";

import appStoreLogo from "@/assets/images/appstore.png";
import googlePlayLogo from "@/assets/images/googleplay.png";
import { questrial } from "@/app/fonts";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-theme-extend-colors-gray-light2 py-8">
      <Container>
        {/* Logo and Quick Links Section */}
        <div className="sm:grid grid-cols-4 gap-4">
          {/* Logo Section */}
          <div className="col-span-1 mb-5 md:mb-0">
            <div className="flex items-center gap-2">
              <Image alt="Fresh Harvests" width={32} height={32} src={logo} />
              <span className="font-bold text-xl leading-none">
                Fresh Harvests
              </span>
            </div>
          </div>

          {/* Quick Links and Contact Section */}
          <div className="col-span-3 flex justify-between  sm:gap-5">
            {/* Quick Links 1 */}
            <div>
              <h3 className="text-xs sm:text-lg font-medium mb-2">
                Quick Links 1
              </h3>
              <ul
                className={`space-y-1 text-xs sm:text-sm ${questrial.className}`}
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/blog/detail">Detail Blog</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div>
              <h3 className="text-xs sm:text-lg font-medium mb-2">
                Quick Links 2
              </h3>
              <ul
                className={`space-y-1 text-xs sm:text-sm ${questrial.className}`}
              >
                <li>
                  <Link href="/favorites">Favorites</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/signin">Sign In</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xs sm:text-lg font-medium mb-2">
                Contact Us
              </h3>
              <div className={`space-y-2 ${questrial.className} text-sm`}>
                <p className="flex items-center gap-2">
                  <span className="text-secondary">
                    <MdOutlinePhone />
                  </span>
                  <span>1234 5678 90</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-secondary">
                    <CiMail />
                  </span>
                  <span>Freshharvests@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <span className="text-secondary">
                    <CiLocationOn />
                  </span>
                  <span>Tanjung Sari Street, Pontianak, Indonesia</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download and Payment Methods */}
        <div className="flex flex-col-reverse md:flex-row justify-between  mt-8 gap-4">
          {/* Download Section */}
          <div>
            <h3 className={`${questrial.className}  text-sm`}>Download App:</h3>
            <div className="flex gap-2 mt-2">
              <div className="relative h-10 w-[140px]">
                <Image
                  src={appStoreLogo}
                  fill
                  alt="Fresh Salad"
                  className="rounded-lg"
                />
              </div>
              <div className="relative h-10 w-[140px]">
                <Image
                  src={googlePlayLogo}
                  fill
                  alt="Fresh Salad"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="w-fit text-left">
            <h3 className="text-xs font-medium mb-2">
              Accepted Payment Methods
            </h3>
            <ul className="flex gap-2">
              <li>
                <div className="relative h-12 w-20">
                  <Image
                    src={visa}
                    fill
                    alt="Fresh Salad"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li>
                <div className="relative h-12 w-20">
                  <Image
                    src={paypal}
                    fill
                    alt="Fresh Salad"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li>
                <div className="relative h-12 w-20">
                  <Image
                    src={applePay}
                    fill
                    alt="Fresh Salad"
                    className="rounded-lg"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border border-theme-extend-colors-gray-light1 my-5" />

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-5 items-center">
          <div className="w-fit text-xs">
            <p>© Copyright 2024, All Rights Reserved by Banana Studio</p>
          </div>
          <div className="w-fit">
            <div className="flex space-x-4 text-white">
              <Link
                href="https://twitter.com"
                className="bg-black p-1 text-xl rounded-full"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://facebook.com"
                className="bg-black p-1 text-xl rounded-full"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-black p-1 text-xl rounded-full"
              >
                <FaSquareInstagram />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
