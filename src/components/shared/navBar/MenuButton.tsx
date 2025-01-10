"use client";
import { DisclosureButton } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuButton() {
  const pathname = usePathname();
  const buttonColor = pathname === "/" ? "text-white" : "text-black";

  return (
    <DisclosureButton
      className={`group relative inline-flex items-center justify-center rounded-md p-2 ${buttonColor}`}
    >
      <FaBars aria-hidden="true" className="block size-6" />
      <FaTimes aria-hidden="true" className="hidden size-6" />
    </DisclosureButton>
  );
}
