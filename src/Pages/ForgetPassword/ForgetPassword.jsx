import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || "");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const { resetPassword } = React.useContext(AuthContext);

    const handleReset = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            await resetPassword(email);
            setMessage("Password reset email sent! Check your inbox.");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
                <h2 className="text-center text-2xl font-bold py-6">Forgot Password</h2>
                <form onSubmit={handleReset} className="card-body">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit" className="btn btn-neutral mt-4">Reset Password</button>

                    {message && <p className="text-green-700 text-center py-2">{message}</p>}
                    {error && <p className="text-red-700 text-center py-2">{error}</p>}

                    <p
                        className="text-center text-blue-700 cursor-pointer mt-2"
                        onClick={() => navigate("/login")}
                    >
                        Back to Login
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
