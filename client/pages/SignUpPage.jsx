import React from "react";

export default function SignUpPage(){

    return(
    <>
    <body id='signup-page' style={{height: '100vh'}}>
      <div id='sign_up_card'>
        <form id='signup_form'>
            <p for="Email">Email</p>
            <input type="text" id="username" placeholder="example@mail.com"/>
            <p for="password">Password</p>
            <input type="text" id="password" placeholder="··················"/>
        </form>
          </div>
      </body>
    </>
    )
};