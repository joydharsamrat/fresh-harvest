"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FHInput = ({
  label,
  type,
  name,
  required,
}: {
  label: string;
  type: string;
  name: string;
  required: boolean;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          {...register(name, { required: required })}
          type={inputType}
          id={name}
          step={type === "number" ? "0.01" : undefined}
          className={`w-full p-2 mt-1 border rounded shadow-inner shadow-primary-700 ${
            errors[name] && "border-red-500 shadow-secondary-700"
          }`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-xs text-red-500 mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FHInput;
