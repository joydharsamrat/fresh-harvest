"use client";
import { usePathname } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

export default function CartButton() {
  const pathname = usePathname();

  return (
    <button
      type="button"
      className={`relative p-1 flex gap-2 ${
        pathname === "/" ? "text-white" : "text-black sm:text-secondary"
      }`}
    >
      <div className="relative">
        <FaCartShopping aria-hidden="true" className="size-6" />
        <span
          className={`absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-900 text-[10px] font-bold text-white bg-[#EE4536] border-2  ${
            pathname === "/"
              ? "border-secondary"
              : "border-theme-extend-colors-gray-light1"
          }`}
        >
          4
        </span>
      </div>
      <span
        className={`text-sm hidden sm:block ${
          pathname === "/" ? "text-white" : "text-black"
        }`}
      >
        Cart
      </span>
    </button>
  );
}
