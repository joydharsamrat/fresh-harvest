import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import styles from "@/styles/navBar.module.css";
import { questrial } from "@/app/fonts";
import MenuButton from "./MenuButton";
import SignInButton from "./SigninButton";
import CartButton from "./CartButton";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-[100] w-full bg-transparent sm:py-4"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/" className="flex gap-1 shrink-0 items-center">
            <Image alt="Fresh Harvests" width={32} height={32} src={logo} />
            <span className="font-bold text-xl">Fresh Harvests</span>
          </Link>
          <div className="hidden  sm:block">
            <div className="flex space-x-16">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current ? `${styles.activeOption} relative ` : "",
                    `rounded-md text-gray text-sm ${questrial.className}`
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="  hidden sm:flex items-center static inset-auto ml-6">
              <FavoriteButton />
            </div>
            <div className="flex items-center pr-2 ">
              <CartButton />
            </div>
            <div className="hidden sm:block">
              <SignInButton />
            </div>

            <div className=" flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <MenuButton />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden ">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-white">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current ? "bg-secondary text-white" : "text-secondary",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton as="div">
            <SignInButton />
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
