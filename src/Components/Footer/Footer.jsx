import React from 'react';
import petShop from '../../assets/care1.jpg'
import { IoLogoGoogle } from 'react-icons/io';
import { FaGithubAlt } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-16">
            <div className=" xl:mx-auto xl:pl-4 px-4 grid grid-cols-1 md:grid-cols-4 gap-10 xl:max-w-[1700px] bg-gray-300 xl:h-[300px] items-center rounded-2xl py-4 ml-2 mr-2">

                <div className="flex flex-col items-center md:items-start">
                    <img
                        className="rounded-2xl h-40 w-40 object-cover shadow-lg mb-4"
                        src={petShop}
                        alt="Pet Shop Logo"
                    />
                    <p className="text-center md:text-left text-gray-600 text-sm">
                        Providing loving care for your pets since 2025.
                    </p>
                </div>

                <div>
                    <h6 className="textStyle text-lg font-semibold mb-4">Contact Info</h6>
                    <ul className="space-y-2">
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">About Us</a></li>
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">Contact</a></li>
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">Jobs</a></li>
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">Advertisement</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="textStyle text-lg font-semibold mb-4">Privacy Policy</h6>
                    <ul className="space-y-2">
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">Purpose of Use</a></li>
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">Data Security</a></li>
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">Cookies & Tracking</a></li>
                        <li><a className="link link-hover text-gray-600 hover:text-purple-600 transition">User Rights</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h6 className="textStyle text-lg font-semibold mb-4">Social Links</h6>
                    <button className="flex items-center justify-center gap-2 w-full bg-white text-black border border-gray-300 rounded-xl py-2 hover:bg-purple-50 transition">
                        <AiTwotoneMail /> Login with Email
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full bg-black text-white border border-black rounded-xl py-2 hover:bg-gray-900 transition">
                        <FaGithubAlt /> Login with GitHub
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full bg-[#FF9900] text-black border-[#e17d00] rounded-xl py-2 hover:bg-[#ffb84d] transition">
                        <IoLogoGoogle /> Login with Google
                    </button>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
                &copy; 2025 PetCare. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;