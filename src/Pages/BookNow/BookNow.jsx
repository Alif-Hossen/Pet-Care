import React from 'react';

const BookNow = () => {
    const handleSUbmit = () =>{
        alert ("Submitted")
    }
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSUbmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button type='submit'  className="btn btn-neutral mt-4">Book Now</button>
                        </fieldset>
                    </form>
                </div>
             </div>
         </div>
    );
};

export default BookNow;