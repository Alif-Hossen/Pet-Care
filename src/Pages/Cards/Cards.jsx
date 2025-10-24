import React from 'react';
import Card from '../Card/Card';
import { NavLink } from 'react-router';

const Cards = ({ petData }) => {
    return (
        <div>
            <h2 className='textStyle font-bold md:text-5xl text-3xl py-10 text-center'>
                Popular Winter Care Services
            </h2>

            <div className=' grid md:grid-cols-4 mb-10 gap-8 md:gap-0 md:ml-20 ml-14'>
                {
                    petData.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>

            <div className='text-center'>
                <NavLink to={'/service'} className="btn btn-primary hover:bg-secondary hover:border-none rounded-2xl mb-8">
                    View All Services
                </NavLink>

            </div>
        </div>
    );
};

export default Cards;