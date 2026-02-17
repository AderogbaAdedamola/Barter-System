import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [error, setError] = useState("");

  const validatePassword = (value) => {
    if (!value) return setError("");

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    setError(
      regex.test(value)
        ? ""
        : "Password must be at least 8 characters and include letters, numbers and special characters."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FEF4F4] via-[#FFF8F8] to-white flex flex-col items-center px-4 py-14">
      {/* Header */}
      <div className="text-center mb-8 max-w-xl">
        <Link to="/" className="flex items-center justify-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-green-500 flex items-center justify-center text-white shadow-sm text-[25px]">
              👤
            </div>
            <span className="text-[28px] font-extrabold text-lg text-gray-900">Barter System</span>
          </Link>

        <h1 className="text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-gray-900">
          Welcome Back
        </h1>
        <p className="text-gray-500 mt-2 text-base">
          Log in to continue trading skills
        </p>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.10)] px-8 py-9 sm:px-10 sm:py-10 border border-black/5">
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                ✉️
              </span>
              <input
                type="email"
                placeholder="adewale@example.com"
                className="w-full h-12 border border-gray-200 rounded-xl pl-10 pr-4 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                🔒
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 border border-gray-200 rounded-xl pl-10 pr-4 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
                onChange={(e) => validatePassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 accent-red-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100 transition"
              />
              Remember me
            </label>

            <button type="button" className="text-red-500 font-medium hover:underline cursor-pointer">
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-red-500 via-orange-500 to-green-500 shadow-md hover:opacity-95 active:opacity-90 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100 transition"
          >
            Log In
          </button>

          {/* Link to Signup */}
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-red-500 font-medium">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
