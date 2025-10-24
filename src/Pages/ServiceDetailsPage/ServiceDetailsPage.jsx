
import React from 'react';
import { NavLink } from 'react-router';

const ServiceDetailsPage = ({ card }) => {

    return (
        <div className="max-w-sm bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100 md:my-10 md:ml-150 my-5 ml-14">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={card.image}
                    alt={"service.serviceName"}
                    className="w-full h-56 object-cover"
                />
            </div>

            {/* Card Content */}
            <div className="p-5">
                {/* Service Name */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition">
                    {card.serviceName}
                </h2>

                {/* Rating & Price */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                        ⭐ <span className="text-gray-700 font-medium">{card.rating}</span>
                    </div>
                    <span className="text-orange-600 font-bold text-lg">${card.price}</span>
                </div>

                <div>
                    <p className='text-center pb-4 font-semibold'>
                        {card.description}
                    </p>
                </div>

                {/* Button */}
                <div >
                    {/* <NavLink to='/bookNow'>
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-medium transition-all duration-300 shadow-md">
                            Book Service
                        </button>
                    </NavLink> */}

                    <NavLink to='/bookNow'>
                        <button className=' btn btn-primary w-full rounded-2xl'>
                            Book Service
                        </button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetailsPage;



