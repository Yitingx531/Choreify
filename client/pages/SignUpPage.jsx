import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from "../redux/slices/usersSlice";

export default function SignUpPage(){

  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (!isClicked) {
      // Simulate asynchronous API call
      const newUser = {
        id: Math.floor(Math.random() * 1000000000),
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      };

      // Dispatch action to update state
      dispatch(addNewUser(newUser));

      // Simulate API call to post new user to the database
      try {
        const response = await fetch('api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (!response.ok) {
          throw new Error('Failed to post new user to the database');
        }
        console.log('User successfully added to the database');
      } catch (error) {
        console.error(error.message);
      }
      setIsClicked(true);
    }
  };

  console.log('isClicked', isClicked);
    return(
    <>
    <body id='signup-page' style={{height: '100vh'}}>
      <div id='sign_up_card'>
        <form id='signup_form'>
            <p htmlFor="Email">Email</p>
            <input type="Email" id="username" placeholder="example@mail.com"/>
            <p htmlFor="password">Password</p>
            <input type="password"  id="password" placeholder="··················"/>
        </form>
        <button id='sign_up_button' onClick={handleClick} > Sign Up </button>
          </div>
      </body>
    </>
    )
};