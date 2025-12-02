import React from "react";
import toast, { Toaster } from "react-hot-toast";

const BookNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Submitted! ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">

      <Toaster position="top-right" reverseOrder={false} />

      <div
        className="
          w-full max-w-md 
          bg-white shadow-xl
          rounded-2xl p-8 
          animate-[zoomIn_0.4s_ease]
          border border-gray-200
        "
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div className="group">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="
                input w-full mt-1 
                bg-gray-100 border-gray-300 
                focus:border-black focus:ring-1
                transition-all duration-300
              "
            />
          </div>

          {/* Password */}
          <div className="group">
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="
                input w-full mt-1 
                bg-gray-100 border-gray-300 
                focus:border-black focus:ring-1
                transition-all duration-300
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              btn w-full mt-4 font-bold 
              bg-black text-white 
              hover:bg-gray-900 
              rounded-xl
              shadow-lg hover:shadow-xl
              transition-transform duration-300 
              hover:scale-[1.04]
              active:scale-[0.96]
            "
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
