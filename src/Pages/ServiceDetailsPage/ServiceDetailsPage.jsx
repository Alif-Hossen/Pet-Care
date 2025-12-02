
import React from 'react';
import { NavLink } from 'react-router';

const ServiceDetailsPage = ({ card }) => {

    return (
        <div className="max-w-[600px] md:mx-auto mx-6 md:my-12 my-8 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100   ">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={card.image}
                    alt={"service.serviceName"}
                    className="w-full h-56 object-cover"
                />
            </div>

            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition">
                    {card.serviceName}
                </h2>

                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                        ⭐ <span className="text-gray-700 font-medium">{card.rating}</span>
                    </div>
                    <span className="text-orange-600 font-bold text-lg">${card.price}</span>
                </div>

                <div className='font-bold flex justify-between'>

                    <div>
                        <h1 className='text-blue-500'>providerName</h1>
                        <h2>{card.providerName}</h2>
                    </div>
                    <div>
                        <h1 className='text-blue-500'>provider Email</h1>
                        <h2>{card.providerEmail}</h2>
                    </div>
                    
                </div>

               

                <div className='py-8'>
                    <p className='text-center pb-4 font-semibold'>
                        {card.description}
                    </p>
                </div>

                <div className='mb-4 btn bg-green-700 w-50% rounded-2xl font-bold text-white'>
                    Category: {card.category}
                </div>

                <div >

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



