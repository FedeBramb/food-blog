import React, { useContext } from 'react';

import LayoutBar from '../../components/LayoutBar/LayoutBar.component';
import Searchbox from '../../components/Searchbox/Searchbox.component';
import Navbar from '../../components/Navbar/Navbar.component';

import { UserContext } from '../../context/user.context';

import { Outlet } from 'react-router-dom';

/**
 * Componente di navigazione principale che struttura la disposizione degli elementi chiave
 * della pagina come l'header, il footer e il contenuto principale.
 * Utilizza contesto User e funzione per il log out.
 */
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