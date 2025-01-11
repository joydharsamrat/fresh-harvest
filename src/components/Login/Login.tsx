"use client";

import { useModalContext } from "@/context/modalStateProvider";
import { Dialog } from "@headlessui/react";
import FHForm from "../shared/Form/FHForm";
import FHInput from "../shared/Form/FHInput";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { logInUser } from "@/actions/authentication";
import { useUser } from "@/context/userProvider";
import Divider from "../shared/Divider";
import SocialLogin from "../shared/SocialLogin";
import { FaTimes } from "react-icons/fa";

export default function Login() {
  const { closeModals, isSignInOpen, openRegister } = useModalContext();
  const { setIsLoading } = useUser();

  const onSubmit = async (data: FieldValues) => {
    const loadingToast = toast.loading("loading...");
    try {
      const res = await logInUser(data);
      if (res.error) {
        throw res.error;
      }
      localStorage.setItem("accessToken", res.data.token);
      setIsLoading(true);
      toast.success("Login successful!", { id: loadingToast });
      closeModals();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message || "Login failed. Please try again.", {
        id: loadingToast,
      });
      console.log(error);
    }
  };

  return (
    <>
      <Dialog
        open={isSignInOpen}
        as="div"
        className="relative z-[999] focus:outline-none "
        onClose={closeModals}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-theme-extend-colors-gray bg-opacity-50">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg relative">
              <div>
                <h2 className="text-3xl font-bold text-center text-primary-700">
                  Login
                </h2>
              </div>
              <FHForm onsubmit={onSubmit}>
                <FHInput
                  label="Email"
                  name="email"
                  required={true}
                  type="email"
                />
                <FHInput
                  label="Password"
                  name="password"
                  required={true}
                  type="password"
                />

                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      className="w-4 h-4  bg-white border border-theme-extend-colors-gray-light1 text-primary rounded appearance-none cursor-pointer  checked:border-primary focus:outline-none  checked:text-primary"
                    />

                    <label
                      htmlFor="rememberMe"
                      className="text-xs text-theme-extend-colors-gray cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => console.log("Forgot Password Clicked")}
                    className="text-xs text-theme-extend-colors-gray underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-white bg-primary rounded-lg hover:bg-primary-700"
                >
                  Login
                </button>
              </FHForm>

              <Divider text="Or Sign In With" />

              <SocialLogin />

              <p className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <button
                  onClick={openRegister}
                  className="text-primary-900 hover:underline"
                >
                  Register
                </button>
              </p>
              <button onClick={closeModals} className="absolute top-0 right-5">
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
