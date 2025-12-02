import React from 'react';
import { NavLink } from 'react-router-dom';

const AllService = ({ data }) => {
    const { id, image, serviceName, rating, price } = data;

    return (
        <div className="group relative w-[350px] md:mx-0 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 mb-10">

            <img
                src={image}
                alt={serviceName}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h2 className="text-2xl  font-bold drop-shadow-md">{serviceName}</h2>

                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                        ⭐ <span className="font-medium">{rating}</span>
                    </div>
                    <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                        ${price}
                    </span>
                </div>

                <NavLink to={`/cardDetails/${id}`}>
                    <button className="w-full mt-4 bg-white/20 hover:bg-orange-500 backdrop-blur-md text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-lg">
                        View Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default AllService;
