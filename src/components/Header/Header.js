import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import logo from '../../media/bytelion-logo.png';
import { setUsername } from '../../store/actions/setUsername.js';
import store from '../../store/index';

const googleSuccess = response => {
  store.dispatch(setUsername(response.profileObj.name));
};

const googleLogoutSuccess = () => {
  store.dispatch(setUsername(undefined));
};

const googleFailure = response => {
  // reeeeeeeee
  // eslint-disable-next-line
  console.log(response);
};

const Header = () => {
  const username = useSelector(state => state.username);
  const [loggedIn, setLoggedIn] = useState(username !== undefined);

  store.subscribe(() => {
    const state = store.getState();

    if (state.username) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={logo} />
        </div>
        <div className='header-googlelogin'>
          {loggedIn ? (
            <GoogleLogout
              clientId='700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com'
              onLogoutSuccess={googleLogoutSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
              buttonText='Log out'
              className='header-googlelogin--button'
            />
          ) : (
            <GoogleLogin
              clientId='700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com'
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
              buttonText='Sign in with Google'
              className='header-googlelogin--button'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
