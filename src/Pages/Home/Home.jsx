import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router';
import Vets from '../Vets/Vets';

const Home = () => {
    // const petData = useLoaderData();
    const { services, vets } = useLoaderData();

    // console.log(petData);
    return (
        <div>
            <Banner></Banner>
            <Cards petData={services}></Cards>
            <Vets vetData={vets}></Vets>
        </div>
    );
};

export default Home;