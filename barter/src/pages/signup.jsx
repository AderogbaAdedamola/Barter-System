import { useState } from "react";
function SignUp() {
  const [passwordError, setPasswordError] = useState("");
  const validatePassword = (value) => {
  if (!value) {
    setPasswordError("");
    return;
  }
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!regex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters and include letters, numbers and special characters."
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FEF4F4] via-[#FFF8F8] to-white flex flex-col items-center px-4 py-14">
      
      {/* Signup Header */}
        <div className="text-center mb-8 max-w-xl">
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-18 h-18 rounded-full bg-gradient-to-r from-red-500 to-green-500 flex items-center justify-center text-white shadow-sm">
              👤
            </div>
            <span className="text-[28px] font-extrabold text-lg text-gray-900">Barter System</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-gray-900">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-2 text-base">
            Join the community and start trading skills today
          </p>
        </div>


      {/* Signup Card */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.10)] px-8 py-9 sm:px-10 sm:py-10 border border-black/5">
        <form className="space-y-5">

          {/* Signup Form */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
               👤
              </span>
            <input
              autoFocus
              type="text"
              placeholder="Adewale Johnson"
              className="w-full h-12 border border-gray-200 rounded-xl pl-10 pr-4 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
             />
            </div>
          </div>

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
                />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
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
                  />
              </div>
              {passwordError && (
              <p className="text-red-500 text-sm mt-1">
              {passwordError}
              </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                  🔒
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 border border-gray-200 rounded-xl pl-10 pr-4 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
                  />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                📍
              </span>
              <input
                type="text"
                placeholder="Ibadan"
                className="w-full h-12 border border-gray-200 rounded-xl pl-10 pr-4 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills You Can Offer *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-4 text-gray-400 text-base">
                🏷️
              </span>
              <textarea
              rows="3"
              placeholder="e.g., Graphic Design, Logo Design"
              className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Separate multiple skills with commas
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills You Need *
            </label>
            <div className="relative">
            <span className="absolute left-3 top-4 text-gray-400 text-base">
              🏷️
            </span>
            <textarea
              rows="3"
              placeholder="e.g., Graphic Design, Logo Design"
              className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-300 transition"
            />
          </div>
            <p className="text-xs text-gray-500 mt-1">
              Separate multiple skills with commas
            </p>
          </div>

       
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 hover:border-red-300 active:scale-[0.99] transition" />
            <p>
              I agree to the{" "}
              <span className="text-red-500 font-medium">Terms of Service</span>{" "}
              and{" "}
              <span className="text-red-500 font-medium">Privacy Policy</span>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-red-500 via-orange-500 to-green-500 shadow-md
            hover:opacity-95 active:opacity-90 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100 transition">
            Create Account
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span className="text-red-500 font-medium">Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
