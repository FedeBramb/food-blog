import React from 'react';

import LayoutBar from '../../components/LayoutBar/LayoutBar.component';
import Searchbox from '../../components/Searchbox/Searchbox.component';
import Navbar from '../../components/Navbar/Navbar.component';
import { Outlet } from 'react-router-dom';


const Navigation = ({user, resetUser}) => {
  return (
    <>
      <LayoutBar position='header' user={user} resetUser={resetUser}>
          <Searchbox />
      </LayoutBar>
      <Navbar />
      <Outlet />
      <LayoutBar position='footer'/>
    </>
  )
}

export default Navigation;