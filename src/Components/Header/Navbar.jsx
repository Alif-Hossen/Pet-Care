


import React, { useContext } from 'react';
import navIcon from '../../assets/cat-8553498_1280.jpg';
import { NavLink, useNavigate } from 'react-router';
import { FaUserSecret } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { IoHome } from 'react-icons/io5';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/"); 
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center my-4 max-w-[1350px] mx-auto px-4">
            <div className="flex items-center gap-2">
                <img className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] rounded-full" src={navIcon} alt="" />
                <h3 className="text-lg md:text-xl font-semibold text-green-700">Pet Care</h3>
            </div>

            <div className="flex gap-4 md:gap-10 items-center mt-4 md:mt-0">
                <NavLink to="/" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-green-800 underline' : 'text-green-700')}>
                    <IoHome />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/service" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-green-800 underline' : 'text-green-700')}>
                    <IoHome />
                    <span>Services</span>
                </NavLink>
                <NavLink to="/myProfile" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-green-800 underline' : 'text-green-700')}>
                    <IoHome />
                    <span>My Profile</span>
                </NavLink>
            </div>

            <div className="flex gap-4 items-center mt-4 md:mt-0">
                <div>
                    {user ? (
                        <img className="md:w-12 md:h-12 w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User" />
                    ) : (
                        <FaUserSecret size={32} />
                    )}
                </div>
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-primary font-bold text-white px-4 py-1">
                        Logout
                    </button>
                ) : (
                    <NavLink to="/login" className="font-bold text-green-700">
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
