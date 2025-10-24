import React from 'react';
import petShop from '../../assets/care1.jpg'
import { IoLogoGoogle } from 'react-icons/io';
import { FaGithubAlt } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
            <aside>
                <img className='rounded-2xl h-[200px] w-[200px] md:ml-20' src={petShop} alt="" />

            </aside>
            <nav>
                <h6 className="textStyle text-xl">contact info</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="textStyle text-xl">privacy policy</h6>
                <a className="link link-hover">Purpose of Use</a>
                <a className="link link-hover">Data Security</a>
                <a className="link link-hover">Cookies and Tracking</a>
                <a className="link link-hover">User Rights</a>
            </nav>
            <nav>
                <h6 className="textStyle text-xl">Social links</h6>

                <button className="btn bg-white text-black border-[#e5e5e5]">
                    <AiTwotoneMail />
                    Login with Email
                </button>

                {/* GitHub */}
                <button className="btn bg-black text-white border-black">
                    <FaGithubAlt />
                    Login with GitHub
                </button>

                {/* Google */}
                <button className="btn bg-[#FF9900] text-black border-[#e17d00]">
                    <IoLogoGoogle />
                    Login with Google
                </button>


            </nav>
        </footer>
    );
};

export default Footer;