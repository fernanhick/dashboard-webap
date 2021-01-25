// src/components/authentication-button.js

import React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

const AuthenticationButton = () => {
  const {currentUser} = useAuth();

  return currentUser ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
