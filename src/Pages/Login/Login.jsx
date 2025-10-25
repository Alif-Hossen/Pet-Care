// import React, { use, useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Login = () => {
//     const [error, setError] = useState()
//     const {signIn} = use(AuthContext);
//     const location = useLocation();

//     const navigate = useNavigate();

//     console.log(location);

//     const handleLogIn = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(`${location.state? location.state : "/"}`)
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 setError(errorCode);
//             })
//     }

//     return (

//             <div className="hero bg-base-200 min-h-screen">
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <h2 className='text-center font-bold text-2xl py-6'>Login Your Account</h2>

//                     <form onSubmit={handleLogIn} className="card-body">
//                         <fieldset className="fieldset">

//                             {/* EMAIL */}
//                             <label className="label">Email</label>
                            
//                             <input name='email' type="email" required className="input" placeholder="Email" />

//                             {/* PASSWORD */}
//                             <label className="label">Password</label>

//                             <input name='password' type="password" className="input" placeholder="Password" required />

//                             <div className='pt-2'><a className="link link-hover font-semibold ">Forgot password?</a></div>

//                             {
//                                 error && <p className='text-red-800 text-center py-2'>{error}</p>
//                             }

//                             <button type='submit' className="btn btn-neutral mt-4">Login</button>

//                             <p className='font-semibold text-center pt-4'>Don't Have An Account?  <NavLink className="text-blue-700 font-bold" to="/register">Register</NavLink> </p>


//                         </fieldset>
//                     </form>
//                 </div>
//             </div>
        

//     );
// };

// export default Login;



import React, { use, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState();
    const [showPass, setShowPass] = useState(false); // 👈 Password toggle state
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("");

        // ✅ Password Validation Here
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one Uppercase letter!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one Lowercase letter!");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-center font-bold text-2xl py-6'>Login Your Account</h2>

                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">

                        {/* EMAIL */}
                        <label className="label">Email</label>
                        <input name='email' type="email" required className="input" placeholder="Email" />

                        {/* PASSWORD */}
                        <label className="label">Password</label>
                        <div className="relative">
                            <input
                                name='password'
                                type={showPass ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Password"
                                required
                            />

                            {/* 👁 Eye Icon */}
                            <span
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-3 top-3 text-xl cursor-pointer"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className='pt-2'><a className="link link-hover font-semibold">Forgot password?</a></div>

                        {/* ⚠ Error Message */}
                        {error && <p className='text-red-800 text-center py-2'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='font-semibold text-center pt-4'>
                            Don't Have An Account?
                            <NavLink className="text-blue-700 font-bold" to="/register"> Register</NavLink>
                        </p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
