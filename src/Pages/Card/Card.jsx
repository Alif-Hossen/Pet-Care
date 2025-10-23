import React from 'react';

const Card = ({ data }) => {
    const { image, serviceName, rating, price } = data
    return (
        <div>
            <div className="max-w-sm bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100">
                {/* Image Section */}
                <div className="relative">
                    <img
                        src={image}
                        alt={"service.serviceName"}
                        className="w-full h-56 object-cover"
                    />
                    {/* <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {service.category}
        </span> */}
                </div>

                {/* Card Content */}
                <div className="p-5">
                    {/* Service Name */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition">
                        {serviceName}
                    </h2>

                    {/* Rating & Price */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                            ⭐ <span className="text-gray-700 font-medium">{rating}</span>
                        </div>
                        <span className="text-orange-600 font-bold text-lg">${price}</span>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-medium transition-all duration-300 shadow-md">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;