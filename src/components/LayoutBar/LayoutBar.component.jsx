import React from "react";

import { Link } from "react-router-dom";

import logoIcon from '../../assets/logo-icon.webp';

import { Bar, AuthButtonsContainer, IconsContainer, Span } from "./LayoutBar.styles.jsx";

// 
function LayoutBar({ position, children, user, resetUser }) {

  const containerClass = position === 'header' ? 'social-bar-header' : 'social-bar-footer';

  const handleLogout = () => {
    console.log('Logout button clicked');
    resetUser();
  };

  return (
    <Bar className={`${containerClass}`}>
      {children}
      {position === 'header' && (
        <AuthButtonsContainer>
          {user?.logged_in ? (
            <Link to={'/'} onClick={handleLogout}>
              <Span className='login-link'>LOGOUT</Span>
            </Link>
          ) : (
            <>
              <Link to={'/signin'}>
                <Span className='login-link'>LOGIN</Span>
              </Link>
              <Link to={'/register'}>
                <Span className='login-link'>SIGNUP</Span>
              </Link>
            </>
          )}
        </AuthButtonsContainer>
      )}
      
      {position === 'footer' &&
      <>
        <img src={logoIcon} alt="logo" className="logo" width='55' height='52' />
        <IconsContainer>
          <a href="http://google.com" aria-label="Facebook">
            <img src="https://icongr.am/fontawesome/facebook-square.svg?size=24&color=ffffff" alt="icon Facebook"></img>
          </a>
          <a href="http://google.com" aria-label="Instagram">
            <img src="https://icongr.am/fontawesome/instagram.svg?size=24&color=ffffff" alt="icon Instagram"></img>
          </a>
          <a href="http://google.com" aria-label="YouTube">
            <img src="https://icongr.am/fontawesome/youtube.svg?size=24&color=ffffff" alt="icon YouTube"></img>
          </a>
          <a href="http://google.com" aria-label="Pinterest">
            <img src="https://icongr.am/fontawesome/pinterest-square.svg?size=24&color=ffffff" alt="icon Pinterest"></img>
          </a>
        </IconsContainer>
      </>
      }
      
    </Bar>
  );
}

export default LayoutBar;