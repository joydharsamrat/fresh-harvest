"use client";
import { logout } from "@/actions/authentication";
import { useModalContext } from "@/context/modalStateProvider";
import { useUser } from "@/context/userProvider";
import { usePathname } from "next/navigation";

export default function SignInButton() {
  const pathname = usePathname();
  const buttonColor =
    pathname === "/" ? "text-white border-white" : "text-black border-black";

  const { openSignIn } = useModalContext();

  const { user, setIsLoading: userLoading } = useUser();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("accessToken");
    userLoading(true);
  };

  return (
    <>
      {!user ? (
        <button
          onClick={openSignIn}
          className={`w-full sm:w-auto text-sm font-semibold ${buttonColor} px-6 py-3 border  rounded bg-transparent`}
        >
          Sign In
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className={`w-full sm:w-auto text-sm font-semibold bg-primary px-6 py-3 rounded text-white`}
        >
          Sign Out
        </button>
      )}
    </>
  );
}
