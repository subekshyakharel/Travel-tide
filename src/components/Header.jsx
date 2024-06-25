import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Head/Login';
import Favorites from '../Head/Favorites';
import Home from '../Pages/Home';
import Something from './Something';
import logo from '../assets/logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className="head">
        <div className="container">
          <div className='flex'>
            <div className="logo">
              <Link to={`/`}>
                <img width={100} src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="login">
              <ul>
                <li>
                  <Link to={`/favorites`}>
                    <i className="bi bi-heart-fill"></i> <span>Favorites</span>
                  </Link>
                </li>
                
                {isAuthenticated ? (
                  <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    <span>Logout</span>
                  </li>
                ) : (
                  <li onClick={() => loginWithRedirect()}>
                    <i className="bi bi-person-circle"></i> <span>Login</span>
                  </li>
                )}
                
                
                
              </ul>
              <Link to={`/join`}>
                <button className='btn-j'>Join Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/something' element={<Something />} />
      </Routes>
    </>
  );
};

export default Header;
