import React from 'react';
import VetsCard from '../VetsCard/VetsCard';

const Vets = ({ vetData }) => {
    // console.log(vetData);
    return (
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="textStyle md:text-5xl text-3xl text-center pb-20 font-bold">
                Meet Our Expert Vets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    Array.isArray(vetData) && vetData.map(vet => (
                        <VetsCard key={vet.id} vet={vet} />
                    ))
                }
            </div>
        </div>
    );
};

export default Vets;
