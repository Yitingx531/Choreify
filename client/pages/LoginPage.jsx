import React from "react";
import GoogleOAuthButton from "../components/GoogleOAuthButton.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {

  return (
    <body id='login-page' style={{height: '100vh'}}>
      <div id='log_in_card'>
        <form id='login_form'>
            <p for="username">Username</p>
            <input type="text" id="username" placeholder="username or email"/>
            <p for="password">Password</p>
            <input type="text" id="password" placeholder="··················"/>
        </form>
     
        <div id='signIn_signUp'>
        <Link to='/home' id='signIn_btn'><span>Sign In</span></Link>
        <Link to='/' id='signUp_btn'><span>Sign Up</span></Link>
        </div>

        <a id='forgot_password' href="https://www.w3schools.com">Forgot password?</a>
            <GoogleOAuthButton/>
      </div>
      </body>
  );
}


