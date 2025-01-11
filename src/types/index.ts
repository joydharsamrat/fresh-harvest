export type TUserAuth = {
  _id: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
};

export type TProduct = {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TCategory = {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};
