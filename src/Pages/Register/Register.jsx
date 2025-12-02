import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be at least 5 characters long!");
      return;
    } else {
      setNameError("");
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one Uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one Lowercase letter!");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long!");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        setPasswordError(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">

      {/* White Animated Card */}
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
          Register Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div>
            <label className="font-semibold text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              required
              className="
                input w-full mt-1 
                bg-gray-100 border-gray-300 
                focus:border-black focus:ring-1
                transition-all duration-300
              "
              placeholder="Enter your name"
            />
            {nameError && (
              <p className="text-red-600 text-xs mt-1">{nameError}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="font-semibold text-gray-700">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="
                input w-full mt-1 
                bg-gray-100 border-gray-300 
                focus:border-black focus:ring-1
                transition-all duration-300
              "
              placeholder="Your photo URL"
            />
          </div>

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

            {passwordError && (
              <p className="text-red-600 text-xs mt-1">{passwordError}</p>
            )}
          </div>

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
            Register
          </button>

          {/* Link */}
          <p className="text-center pt-3 font-semibold text-gray-700">
            Already have an account?
            <NavLink to="/login" className="text-blue-700 font-bold pl-1">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
