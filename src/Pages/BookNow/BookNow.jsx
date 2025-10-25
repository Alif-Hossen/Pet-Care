
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const BookNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Submitted! ✅");
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <label className="label">Email</label>
          <input type="email" className="input input-bordered w-full" placeholder="Email" required />

          <label className="label">Password</label>
          <input type="password" className="input input-bordered w-full" placeholder="Password" required />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;




