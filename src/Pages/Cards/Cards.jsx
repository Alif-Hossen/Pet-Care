import React from 'react';
import Card from '../Card/Card';
import { NavLink } from 'react-router';

const Cards = ({ petData }) => {
    return (
        <div>
            <h2 className='textStyle font-bold text-5xl py-10 text-center'>
                Popular Winter Care Services
            </h2>

            <div className='grid grid-cols-3 mb-10'>
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