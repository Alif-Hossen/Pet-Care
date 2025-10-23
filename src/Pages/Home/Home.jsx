import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const petData = useLoaderData();
    console.log(petData);
    return (
        <div>
            <Banner></Banner>
            <Cards petData={petData}></Cards>
        </div>
    );
};

export default Home;