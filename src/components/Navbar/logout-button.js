import React from 'react';
import {Button, Nav, NavDropdown} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';

const LogoutButton = () => {
  const {logout, currentUser} = useAuth();
  return (
    <Nav>
      <NavDropdown title={currentUser.email} id='basic-nav-dropdown'>
        <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
        <NavDropdown.Item href='/update-profile'>Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => logout()} href='/login'>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default LogoutButton;
