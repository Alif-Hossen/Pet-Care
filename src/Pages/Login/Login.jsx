import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    return (

        <>
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-center font-bold text-2xl py-6'>Login Your Account</h2>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div className='pt-2'><a className="link link-hover font-semibold ">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>

                            <p className='font-semibold text-center pt-4'>Don't Have An Account?  <NavLink className="text-blue-700 font-bold" to="/register">Register</NavLink> </p>


                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
            

        </>

    );
};

export default Login;