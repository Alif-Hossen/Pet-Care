import React from 'react';
import { useLoaderData } from 'react-router';
import AllService from '../AllService/AllService';

const Service = () => {
    const AllData = useLoaderData();
    // console.log(AllData);
    return (
        <div>
            <h1 className='textStyle font-bold text-5xl text-center py-5'>Popular Winter Care Services</h1>
            
            <div className='grid md:grid-cols-4   gap-x-8 mx-auto my-10 md:ml-40 ml-14'> 
                {
                    AllData.map(data => <AllService key={data.id} data={data}></AllService>)
                }
            </div>
            
        </div>
    );
};

export default Service;