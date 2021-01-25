import React from 'react';
import {Container} from 'react-bootstrap';
import Signup from './Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import NavbarComponent from './Navbar/Navbar';
import PrivateRoute from './Routers/PrivateRoute';
import Profile from './Profile';
function App() {
  return (
    <>
      <NavbarComponent />
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: '100vh'}}
      >
        <div className='w-100' style={{maxWidth: '400px'}}>
          <Router>
            <Switch>
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/' component={Profile} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
