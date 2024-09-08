import React, { useContext } from 'react';

import LayoutBar from '../../components/LayoutBar/LayoutBar.component';
import Searchbox from '../../components/Searchbox/Searchbox.component';
import Navbar from '../../components/Navbar/Navbar.component';

import { UserContext } from '../../context/user.context';

import { Outlet } from 'react-router-dom';


const Navigation = () => {
  const { user, resetUser } = useContext(UserContext);

  return (
    <>
      <LayoutBar position='header' user={user} resetUser={resetUser}  >
          <Searchbox />
      </LayoutBar>
      <Navbar />
      <Outlet />
      <LayoutBar position='footer'/>
    </>
  )
}

export default Navigation;