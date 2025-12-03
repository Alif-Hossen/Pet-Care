import React from 'react';

const VetsCard = ({ vet }) => {
    const { name, imageUrl, title, specialty, bioSummary, experience } = vet || {};

    return (
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 cursor-pointer">

            <img
                src={imageUrl}
                alt={name}
                className=" object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 p-5 text-white">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-sm font-medium">{title}</p>

                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-green-600/70 rounded-full">
                    {specialty}
                </span>

                <p className="mt-2 text-xs italic">{bioSummary}</p>

                <button className="mt-3 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-1 rounded-full transition-colors duration-300">
                    {experience} Experience
                </button>
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </div>
    );
};

export default VetsCard;
