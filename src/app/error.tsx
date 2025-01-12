"use client";

import Link from "next/link";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center text-primary text-3xl">
      <h1>Something went wrong</h1>
      <Link href="/" className="text-center text-blue-600 underline text-xl">
        Home
      </Link>
    </div>
  );
};

export default Error;
