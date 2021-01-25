// src/components/login-button.js

import React, {useRef, useState} from 'react';
import {Button, Form, FormControl, InputGroup, Nav} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

const LoginButton = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/profile');
    } catch {
      setError('Failed to Log In');
    }
    setLoading(false);
  }
  return (
    <>
      <InputGroup>
        <FormControl placeholder='Email' type='email' ref={emailRef} required />
        <FormControl
          placeholder='Password'
          type='password'
          ref={passwordRef}
          required
        />
        <InputGroup.Append>
          <Button
            disabled={loading}
            variant='secondary'
            className='w-40'
            type='submit'
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default LoginButton;
