


import React, { useContext } from 'react';
import navIcon from '../../assets/cat-8553498_1280.jpg';
import { NavLink, useNavigate } from 'react-router';
import { FaUser, FaUserSecret } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { IoHome } from 'react-icons/io5';
import { MdMiscellaneousServices } from "react-icons/md";
import { CgComment } from 'react-icons/cg';
import { GrServicePlay } from 'react-icons/gr';


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
        <div className="flex flex-col md:flex-row justify-between items-center my-4 max-w-[1700px] xl:mx-auto px-4 mx-6 bg-orange-500 rounded-2xl py-2  ">
            <div className="flex items-center gap-2">
                <img className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] rounded-full" src={navIcon} alt="" />
                <h3 className="text-lg md:text-xl font-semibold text-white">Pet Care</h3>
            </div>

            <div className="flex gap-4 md:gap-10 items-center mt-4 md:mt-0">
                <NavLink to="/" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-black underline' : 'text-white')}>
                    <IoHome />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/service" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-black underline' : 'text-white')}>
                    <GrServicePlay />
                    <span>Services</span>
                </NavLink>

                {
                    user && (
                        <NavLink to="/myProfile" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-black underline' : 'text-white')}>
                    <FaUser />
                    <span>My Profile</span>
                </NavLink>
                    )
                }

                <NavLink to="/aboutUs" className={({ isActive }) => 'flex gap-2 items-center font-bold ' + (isActive ? 'text-black underline' : 'text-white')}>
                    <CgComment />
                    <span>About Us</span>
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
                    <NavLink to="/login" className="font-bold text-white">
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
