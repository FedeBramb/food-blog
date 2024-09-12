import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.webp';

import { Link } from 'react-router-dom';

import {
  NavbarContainer,
  NavItem,
  LogoBigLink,
  LinkSmallLogo,
  LogoSmallView,
  DropcaseContainer,
  MenuButton,
  DropdownContent
} from './Navbar.styles.jsx';


function Navbar() {
  
  // Utilizziamo lo state che dopo andremo a modificare
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1196);
  const [isOpen, setIsOpen] = useState(false);
  
  // La gestione degli eventi è una caratteristica di useEffect
  // Cambia il boolean in base alla risoluzione della finestra
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Funzione per gestire il dropDown, tramite boolean memorizzato nello state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (  
    // Renderizza il nav in base alla risoluzione della view  
    <NavbarContainer className={`${isSmallScreen && 'smallScreen'}`}>
      {!isSmallScreen && (
        <>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/recipes" >RICETTE</NavItem>
          <LogoBigLink to="/"><img src={logo} alt='logo' /></LogoBigLink>
          <NavItem to="/glossario" >GLOSSARIO</NavItem>
          <NavItem to="/contatti" >CONTATTI</NavItem>
        </>
      )}
      {isSmallScreen && (
        <>
          <DropcaseContainer>
            <MenuButton  onClick={toggleMenu}>
              <img src={`https://icongr.am/fontawesome/bars.svg?size=28&color=009a93`} alt="icon Facebook" />
              Menu
            </MenuButton>
            {isOpen && (
                <DropdownContent>
                  <Link to="/" className="dropItem" onClick={toggleMenu}>HOME</Link>
                  <Link to="/recipes" className="dropItem" onClick={toggleMenu}>RICETTE</Link>
                  <Link to="/glossario" className="dropItem" onClick={toggleMenu}>GLOSSARIO</Link>
                  <Link to="/contatti" className="dropItem" onClick={toggleMenu}>CONTATTI</Link>
                </DropdownContent>
            )}
          </DropcaseContainer>
          <LinkSmallLogo to="/" className='link-small-logo'>
            <LogoSmallView src={logo} alt='logo' />
          </LinkSmallLogo>
        </>
      )}
    </NavbarContainer>
  );
} 

export default Navbar;

// Utilizziamo lo state per reattività (reagire ai cambiamenti e rendersi nuovo),
//  codice più chiaro e cosistenza nello stato, mantenendo la consistenza e la
//    sincronizzazione con l'interfaccia utente.