import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router';
import Vets from '../Vets/Vets';
import Care from '../Care/Care';

const Home = () => {
    const { services, vets, care } = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Cards petData={services}></Cards>
            <Care careData={care}></Care>
            <Vets vetData={vets}></Vets>
            
        </div>
    );
};

export default Home;