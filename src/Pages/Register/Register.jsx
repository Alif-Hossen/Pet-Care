import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-center font-bold text-2xl py-6'>Register Your Account</h2>

                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">

                            {/* Name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" required />

                            {/* EMAIL */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />

                            {/* PASSWORD */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required />

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>

                            <p className='font-semibold text-center pt-4'>Already Have An Account?  <NavLink className="text-blue-700 font-bold" to="/login">Login</NavLink> </p>
                        </fieldset>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;