"use server";

import { envConfig } from "@/config";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  const res = await fetch(`${envConfig.base_url}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = res.json();

  return data;
};
export const logInUser = async (userData: FieldValues) => {
  const res = await fetch(`${envConfig.base_url}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (data.success) {
    (await cookies()).set("accessToken", data?.data?.token);
  }

  return data;
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};

export const getUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }
  return decodedToken;
};
