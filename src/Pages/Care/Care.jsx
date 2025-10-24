import React from 'react';
import CareCard from '../CareCard/CareCard';

const Care = ({ careData }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="textStyle md:text-5xl text-3xl text-center font-bold mb-16">
                Winter Care Tips for Pets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {Array.isArray(careData) &&
                    careData.map(care => <CareCard key={care.id} care={care} />)}
            </div>
        </div>
    );
};

export default Care;
