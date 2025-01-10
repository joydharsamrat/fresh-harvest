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
    <Disclosure as="nav" className="bg-transparent px-2 sm:px-10 sm:py-9 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex gap-1 shrink-0 items-center">
            <Image
              alt="Fresh Harvests"
              width={32}
              height={32}
              src={logo}
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl">Fresh Harvests</span>
          </div>
          <div className="hidden  sm:block">
            <div className="flex space-x-4">
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

          <div className="flex items-center">
            <div className="  hidden sm:flex items-center static inset-auto ml-6">
              <FavoriteButton />
            </div>
            <div className="flex items-center pr-2 ">
              <CartButton />
            </div>
            <SignInButton />

            <div className=" flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <MenuButton />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
