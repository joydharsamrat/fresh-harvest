import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="flex gap-4">
      {/* Google Login */}
      <button
        className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
        onClick={() => console.log("Google login clicked")}
      >
        <FcGoogle className="text-lg " />
        Google
      </button>

      {/* Facebook Login */}
      <button
        className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
        onClick={() => console.log("Facebook login clicked")}
      >
        <FaFacebook className="text-lg text-blue-600" />
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
