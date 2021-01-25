import React, {useState, useRef} from 'react';
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Youtube,
} from 'react-bootstrap-icons';
import LogoutButton from './logout-button';
import AuthenticationButton from './auth-button';

const NavbarComponent = () => {
  const [error, setError] = useState('');
  const {currentUser, logout, isLogged} = useAuth();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      useHistory.pushState('/login');
    } catch {
      setError('Failed to log out.');
    }
  }
  console.log(isLogged);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='md'
        bg='primary'
        variant='dark'
        className='p-2 '
      >
        <Navbar.Brand href='/dashboard'>ACAnalyst</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav ' style={{display: 'flex'}}>
          {!currentUser && (
            <Nav className='mr-auto w-100'>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          )}
          {currentUser && (
            <Nav className='mr-auto w-100'>
              <Nav.Link href='/coins'>Coins</Nav.Link>
              <Nav.Link href='/cexes'>Cexes</Nav.Link>
              <Nav.Link href='/dexes'>Dexes</Nav.Link>
              <Nav.Link href='/defi'>Defi</Nav.Link>
            </Nav>
          )}
          <Nav className='mr-auto w-80 '></Nav>

          <Nav>
            <AuthenticationButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
