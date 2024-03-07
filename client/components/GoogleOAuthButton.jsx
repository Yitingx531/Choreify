import React from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleButton from 'react-google-button'

export default function GoogleOAuthButton() {
  const clientId = '1046983712196-lt9kniehbbavberjafatgcss6cp9hlkt.apps.googleusercontent.com';

  const onLogInSuccess = (res) => {
    console.log('Login success', res.profileObj);
  };
  const onFailure = (res) => {
    console.log('Login failed! res:', res);
  };

  const onLogOutSuccess = () => {
    console.log('Log out successfull');
  }

  return (
    <div id="google_oAuth">
    <div >
      <GoogleLogin
      clientId={clientId}
      render={renderProps => (
        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Sign in with Google
          </GoogleButton>
      )}
      onSuccess={onLogInSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      />
    </div>
    {/* <div>
      <GoogleLogout
      clientId={clientId}
      buttonText = 'Log Out'
      onLogoutSuccess={onLogOutSuccess}
      />
    </div> */}
    </div>
  );
}
