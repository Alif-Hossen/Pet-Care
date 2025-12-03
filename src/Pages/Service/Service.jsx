

import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllService from '../AllService/AllService';

const Service = () => {
    const AllData = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredData = selectedCategory === 'All'
        ? AllData
        : AllData.filter(data => data.category === selectedCategory);

    return (
        <div>
            <h1 className='textStyle font-bold text-5xl text-center py-5'>Popular Winter Care Services</h1>

            <div className='ml-30 mt-10'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl font-bold">Search By Category</legend>
                    <select
                        className="select"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                    >
                        <option value="All">All Categories</option>
                        <option value="Grooming">Grooming</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Training">Training</option>
                        <option value="Comfort">Comfort</option>
                        <option value="Health">Health</option>
                        <option value="Equipment">Equipment</option>
                    </select>
                </fieldset>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:max-w-[1800px] xl:ml-24 xl:mx-auto lg:max-w-[1100px] lg:mx-auto sm:max-w-[700px] sm:mx-auto my-20'>
                {
                    filteredData.map(data => <AllService key={data.id} data={data}></AllService>)
                }
            </div>

        </div>
    );
};

export default Service;


