import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
    const { user } = use(AuthContext)
    return (
        <div className='items-center text-center'>
            <h2>Aita So Hard I Hoy</h2>
            <h2>Name: {user && user.name}</h2>
            <p>Email: {user && user.email}</p>
            <div className='flex'>
                {/* <p>image: </p> */}
                <img src={user && user.image} alt="" />
            </div>
        </div>
    );
};

export default MyProfile;