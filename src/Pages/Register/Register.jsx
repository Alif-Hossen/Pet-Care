
import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);

    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // ✅ Name Validation
        if (name.length < 5) {
            setNameError("Name should be at least 5 characters long!");
            return;
        } else {
            setNameError("");
        }

        // ✅ Password Validation
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one Uppercase letter!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one Lowercase letter!");
            return;
        }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long!");
            return;
        } else {
            setPasswordError("");
        }

        // ✅ Firebase register + update profile
        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch(error => {
                console.log(error.code, error.message);
                setPasswordError(error.code);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-center font-bold text-2xl py-6'>Register Your Account</h2>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {nameError && <p className='text-xs text-error'>{nameError}</p>}

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* Password + Eye toggle */}
                        <label className="label">Password</label>
                        <div className="relative">
                            <input
                                name='password'
                                type={showPass ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Password"
                                required
                            />
                            <span
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-3 top-3 text-xl cursor-pointer"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {passwordError && <p className='text-xs text-error'>{passwordError}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='font-semibold text-center pt-4'>
                            Already have an account?{" "}
                            <NavLink className="text-blue-700 font-bold" to="/login">
                                Login
                            </NavLink>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
