import React from 'react';
import { useLoaderData } from 'react-router';
import AllService from '../AllService/AllService';

const Service = () => {
    const AllData = useLoaderData();
    // console.log(AllData);
    return (
        <div>
            <h1 className='textStyle font-bold text-5xl text-center py-5'>Popular Winter Care Services</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:max-w-[1700px] xl:mx-auto lg:max-w-[1100px] lg:mx-auto sm:max-w-[800px] sm:mx-auto  my-20'> 
                {
                    AllData.map(data => <AllService key={data.id} data={data}></AllService>)
                }
            </div>
            
        </div>
    );
};

export default Service;