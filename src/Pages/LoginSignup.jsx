// import React from "react";
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//     return (
//         <div className="loginsignup">
//             <div className="loginsignup-container">
//                 <h1>Sign Up</h1>
//                 <div className="loginsignup-fields">
//                     <input type="text" placeholder="Your Name"/>
//                     <input type="email" placeholder="Email Address"/>
//                     <input type="password" placeholder="Password"/>
//                 </div>
//                 <button>Continue</button>
//                 <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
//                 <div className="loginsup-agree">
//                     <input type="checkbox" name='' id=''/>
//                     <p>By continuing, I agree to the terms of use & privacy policy</p>
//                 </div>
//         </div>
//         </div>
//     )
// }

// export default LoginSignup;

import React, { useState } from "react";
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{isSignup ? "Sign Up" : "Login"}</h1>
                <form className="loginsignup-form">
                    {isSignup && (
                        <div className="loginsignup-fields">
                            <input type="text" placeholder="Your Name" required />
                    </div>
                    )}
                    <div className="loginsignup-fields">
                        <input type="email" placeholder="Email Address" required />
                        <input type="password" placeholder="Password" required />
                    </div>
                    {isSignup && (
                        <div className="loginsup-agree">
                            <input type="checkbox" id="agree" required />
                            <label htmlFor="agree">
                                By continuing, I agree to the terms of use & privacy policy
                            </label>
                        </div>
                    )}
                    <button type="submit">{isSignup ? "Continue" : "Login"}</button>
                </form>
                <p className="loginsignup-toggle">
                    {isSignup ? "Already have an account?" : "Don't have an account?"} 
                    <span onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? "Login here" : "Sign up here"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginSignup;
