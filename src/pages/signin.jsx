import "../css/signin.css";
import React from "react";

function Signin(){
    return(
        <div className="cnn-login-container">
            <div className="cnn-login-box">
                <h1 className="cnn-login-title">Sign in to your account</h1>
                <p className="cnn-signup-text">Don't have an account? <a href="#" className="cnn-signup-link">Sign up</a></p>
                <form className="cnn-login-form">
                    <div className="cnn-form-group">
                        <label htmlFor="email" className="cnn-input-label">Email address</label>
                        <input type="email" id="email" className="cnn-input-field"placeholder="Enter your email"/>
                    </div>
                <div className="cnn-form-group">
                    <label htmlFor="password" className="cnn-input-label">Password</label>
                    <input  type="password"  id="password" className="cnn-input-field" placeholder="Enter your password"/>
                    <a href="#" className="cnn-forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="cnn-signin-button">Sign in</button>
                </form>
                <p className="cnn-terms-text">By signing up or signing in, you agree to our <a href="#" className="cnn-terms-link">Terms of Use</a> and have read our <a href="#" className="cnn-terms-link">Privacy Policy</a>. Chat and its affiliates may use your email address to send updates, ads, and offers. <a href="#" className="cnn-terms-link">Get out via Privacy Policy</a>.</p>
                <div className="cnn-social-login">
                    <button className="cnn-social-button google">Continue with Google</button>
                    <button className="cnn-social-button apple">Continue with Apple</button>
                </div>
            </div>
        </div>
    )
}
export default Signin;