/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/config";

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${envConfig.base_url}/products`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${envConfig.base_url}/category`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(`${envConfig.base_url}/products/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getCategoryById = async (id: string) => {
  try {
    const res = await fetch(`${envConfig.base_url}/category/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
