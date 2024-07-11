import React from 'react';

import SocialBar from '../../components/Socialbar/Socialbar.component';
import Searchbox from '../../components/Searchbox/Searchbox.component';
import Navbar from '../../components/Navbar/Navbar.component';
import { Outlet } from 'react-router-dom';


const Navigation = () => {
  return (
    <>
        <div className='navigation-container'>
            <SocialBar position='header'>
                <Searchbox />
            </SocialBar>
            <Navbar />
            <Outlet />
            <SocialBar position='footer' />
        </div>
    </>
  )
}

export default Navigation;