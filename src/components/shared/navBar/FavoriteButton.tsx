"use client";
import { usePathname } from "next/navigation";
import { FaHeart } from "react-icons/fa";

export default function FavoriteButton() {
  const pathname = usePathname();

  return (
    <button
      type="button"
      className={`relative p-1 flex gap-2 ${
        pathname === "/" ? "text-white" : "text-secondary"
      }`}
    >
      <FaHeart aria-hidden="true" className="size-6" />
      <span
        className={`text-sm ${pathname === "/" ? "text-white" : "text-black"}`}
      >
        Favorites
      </span>
    </button>
  );
}
