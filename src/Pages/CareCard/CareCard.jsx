import React from 'react';

const CareCard = ({ care }) => {
    const { title, tip, image, category, colorClass } = care;

    return (
        <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-shadow duration-500 hover:shadow-2xl">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-2xl font-bold text-yellow-300">{title}</h3>
                <p className="text-sm text-green-100 mt-2">{tip}</p>

                <span
                    className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}
                >
                    {category}
                </span>
            </div>
        </div>
    );
};

export default CareCard;
