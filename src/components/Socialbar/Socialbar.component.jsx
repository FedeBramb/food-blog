import React from "react";
import { Link } from "react-router-dom";

import logoIcon from '../../assets/logo-icon.webp';

import { HeadBar, IconsContainer } from "./Socialbar.styles.jsx";

function SocialBar({ position, children, user, resetUser }) {
  const containerClass = position === 'header' ? 'social-bar-header' : 'social-bar-footer';
  const handleLogout = () => {
    console.log('Logout button clicked');
    resetUser();
  };
  return (
    <HeadBar className={`${containerClass}`}>
      {children}
      { position === 'header' &&
        (user?.logged_in ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={'/signin'}>Login</Link>
        ))}
      
      {position === 'footer' &&
      <>
        <img src={logoIcon} alt="logo" className="logo" width='55' height='52' />
        <IconsContainer>
          <a href="http://google.com" className="social-icon" aria-label="Facebook"><img src="https://icongr.am/fontawesome/facebook-square.svg?size=31&color=1f1f1f" alt="icon Facebook"></img></a>
          <a href="http://google.com" className="social-icon" aria-label="Instagram"><img src="https://icongr.am/fontawesome/instagram.svg?size=31&color=1f1f1f" alt="icon Instagram"></img></a>
          <a href="http://google.com" className="social-icon" aria-label="Whatsapp"><img src="https://icongr.am/fontawesome/whatsapp.svg?size=31&color=1f1f1f" alt="icon Whatsapp"></img></a>
          <a href="http://google.com" className="social-icon" aria-label="Linkedin"><img src="https://icongr.am/fontawesome/linkedin-square.svg?size=31&color=1f1f1f" alt="icon Linkedin"></img></a>
          <a href="http://google.com" className="social-icon" aria-label="YouTube"><img src="https://icongr.am/fontawesome/youtube-square.svg?size=31&color=1f1f1f" alt="icon YouTube"></img></a>
          <a href="http://google.com" className="social-icon" aria-label="Pinterest"><img src="https://icongr.am/fontawesome/pinterest-square.svg?size=31&color=1f1f1f" alt="icon Pinterest"></img></a>
        </IconsContainer>
      </>
      }
      
    </HeadBar>
  );
}

export default SocialBar;