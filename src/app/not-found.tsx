import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-primary  mb-4">404</h1>
      <p className="text-xl mb-8 ">
        Oops! The page you are looking for does not exist.
      </p>

      <Link href="/" passHref>
        <button className="bg-secondary text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none ">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
