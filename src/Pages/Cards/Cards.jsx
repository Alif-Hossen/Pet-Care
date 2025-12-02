import React from 'react';
import Card from '../Card/Card';
import { NavLink } from 'react-router';

const Cards = ({ petData }) => {
    return (
        <div>
            <h2 className='textStyle font-bold md:text-5xl text-3xl py-16 text-center '>
                Popular Winter Care Services
            </h2>

            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:max-w-[1700px] xl:ml-26 xl:mx-auto lg:max-w-[1100px] lg:mx-auto sm:max-w-[700px] sm:mx-auto '>
                {
                    petData.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>

            <div className='text-center mt-16'>
                <NavLink to={'/service'} className="btn btn-primary hover:bg-secondary hover:border-none rounded-2xl mb-8">
                    View All Services
                </NavLink>

            </div>
        </div>
    );
};

export default Cards;