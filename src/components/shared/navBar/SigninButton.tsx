"use client";
import { usePathname } from "next/navigation";

export default function SignInButton() {
  const pathname = usePathname();
  const buttonColor =
    pathname === "/" ? "text-white border-white" : "text-black border-black";

  return (
    <button
      className={`hidden sm:block text-sm font-semibold ${buttonColor} px-6 py-3 border  rounded bg-transparent`}
    >
      Sign In
    </button>
  );
}
