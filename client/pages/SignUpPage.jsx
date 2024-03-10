import React from "react";
import { createUser } from "../redux/slices/usersSlice";
import { useDispatch, useSelector } from 'react-redux';

export default function SignUpPage(){
   const { isClicked } = useSelector(state => state.createUser || { isClicked: false });
   const dispatch = useDispatch();
   console.log('signupbutton is clicked', isClicked);
    return(
    <>
    <body id='signup-page' style={{height: '100vh'}}>
      <div id='sign_up_card'>
        <form id='signup_form'>
            <p htmlFor="Email">Email</p>
            <input type="text" id="username" placeholder="example@mail.com"/>
            <p htmlFor="password">Password</p>
            <input type="text" id="password" placeholder="··················"/>
        </form>
        <button id='sign_up_button' onClick={() => isClicked && dispatch(createUser())}> Sign Up </button>
          </div>
      </body>
    </>
    )
};