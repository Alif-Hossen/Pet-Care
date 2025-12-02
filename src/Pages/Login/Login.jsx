import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signIn } = React.useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    signIn(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">

      {/* Animated White Card */}
      <div
        className="
          w-full max-w-md 
          bg-white shadow-xl 
          rounded-2xl p-8 
          border border-gray-200 
          animate-[zoomIn_0.4s_ease]
        "
      >
        <h2 className="text-center font-bold text-2xl text-gray-800 mb-6">
          Login Your Account
        </h2>

        <form onSubmit={handleLogIn} className="space-y-5">

          {/* Email */}
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="
                input w-full mt-1 
                bg-gray-100 border-gray-300 
                focus:border-black focus:ring-1
                transition-all duration-300
              "
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold text-gray-700">Password</label>

            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                required
                className="
                  input w-full mt-1 
                  bg-gray-100 border-gray-300 
                  pr-12
                  focus:border-black focus:ring-1
                  transition-all duration-300
                "
                placeholder="Enter your password"
              />

              {/* Eye Icon */}
              <span
                onClick={() => setShowPass(!showPass)}
                className="
                  absolute right-4 top-[50%] -translate-y-1/2 
                  text-xl text-gray-600 cursor-pointer
                "
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="pt-1">
            <button
              type="button"
              className="text-blue-600 font-semibold hover:underline"
              onClick={() =>
                navigate("/forgot-password", {
                  state: {
                    email: document.querySelector("input[name='email']").value,
                  },
                })
              }
            >
              Forgot password?
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-center font-semibold">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="
              btn bg-black text-white w-full font-bold 
              rounded-xl shadow-lg 
              hover:bg-gray-900 
              hover:shadow-xl 
              transition-transform duration-300 
              hover:scale-[1.04] active:scale-[0.96]
            "
          >
            Login
          </button>

          {/* Register Redirect */}
          <p className="text-center pt-3 font-semibold text-gray-700">
            Don't Have An Account?
            <NavLink to="/register" className="text-blue-700 font-bold pl-1">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
