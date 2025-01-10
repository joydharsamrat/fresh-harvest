"use server";

import { envConfig } from "@/config";
import { FieldValues } from "react-hook-form";

export const registerUser = async () => {
  const userData = {
    fullName: "test",
    email: "test@test.com",
    password: "123456",
  };

  const res = await fetch(`${envConfig.base_url}/users/register`, {
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
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = res.json();

  return data;
};
