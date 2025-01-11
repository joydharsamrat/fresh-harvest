/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser } from "@/actions/authentication";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import FHForm from "../shared/Form/FHForm";
import FHInput from "../shared/Form/FHInput";
import { useModalContext } from "@/context/modalStateProvider";
import { Dialog } from "@headlessui/react";
import Divider from "../shared/Divider";
import SocialLogin from "../shared/SocialLogin";
import { FaTimes } from "react-icons/fa";

export default function Register() {
  const { openSignIn, isRegisterOpen, closeModals } = useModalContext();

  const onSubmit = async (data: FieldValues) => {
    const loadingToast = toast.loading("loading...");
    try {
      const res = await registerUser(data);
      if (res.error) {
        throw res.error;
      }

      toast.success("Sign up successful!", { id: loadingToast });

      openSignIn();
    } catch (error: any) {
      toast.error(error?.data?.message || "Sign up failed. Please try again.", {
        id: loadingToast,
      });
      console.log(error);
    }
  };
  return (
    <Dialog
      open={isRegisterOpen}
      as="div"
      className="relative z-[999] focus:outline-none "
      onClose={closeModals}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-theme-extend-colors-gray bg-opacity-50">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg relative">
            <div>
              <h2 className="text-3xl font-bold text-center text-primary-700">
                Register
              </h2>
            </div>
            <FHForm onsubmit={onSubmit}>
              <FHInput
                label="Full Name"
                name="fullName"
                required={true}
                type="text"
              />
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

              <button
                type="submit"
                className="w-full py-3 text-white bg-primary rounded-lg hover:bg-primary-700"
              >
                Register
              </button>
            </FHForm>

            <Divider text="Or Sign Up With" />

            <SocialLogin />

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <button
                onClick={openSignIn}
                className="text-primary-900 hover:underline"
              >
                Login
              </button>
            </p>
            <button onClick={closeModals} className="absolute top-0 right-5">
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
