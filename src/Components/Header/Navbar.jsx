import React, { use } from 'react';
import navIcon from '../../assets/cat-8553498_1280.jpg'
import { NavLink } from 'react-router';
import { FaUserSecret } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOUt } = use(AuthContext)

    const handleLogOut = () => {
        console.log('User wanna die');
        logOUt()
            .then(() => {
                alert("TUT TUT...")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='flex justify-between  my-4 max-w-[1350px] mx-auto'>
            <div className='flex items-center gap-2'>
                <img className='h-[70px] w-[70px] rounded-full' src={navIcon} alt="" />
                <h3 className='text-lg font-semibold text-green-700'>Pet Care</h3>
            </div>

            <div className='text-center pt-5'>
                {user && user.email}
            </div>
            <div className='flex gap-10 items-center'>
                <NavLink className="font-bold text-blue-700  ">Home</NavLink>
                <NavLink to={"/service"} className="font-bold text-blue-700  ">Services</NavLink>
            </div>

            <div className='flex gap-5 items-center'>

                <div className=''>
                    <FaUserSecret size={32} style={{}} />
                </div>
                {
                    user ? <button onClick={handleLogOut} className="font-bold text-blue-700">Logout</button> :
                        <NavLink to={"/login"} className="font-bold text-blue-700">Login</NavLink>
                }

            </div>

        </div>
    );
};

export default Navbar;