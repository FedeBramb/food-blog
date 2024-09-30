import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.webp';

import { Link } from 'react-router-dom';

import {
  NavbarContainer,
  NavLink,
  Underline,
  LogoBigLink,
  LinkSmallLogo,
  LogoSmallView,
  DropcaseContainer,
  MenuButton,
  DropdownContent
} from './Navbar.styles.jsx';


const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1196);
  const [isOpen, setIsOpen] = useState(false);
  
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
          <LogoBigLink to="/"><img src={logo} alt='logo' /></LogoBigLink>
          <NavLink to="/">HOME<Underline/></NavLink>
          <NavLink to="/recipes">RICETTE<Underline/></NavLink>
          <NavLink to="/glossario">GLOSSARIO<Underline/></NavLink>
          <NavLink to="/contatti">CONTATTI<Underline/></NavLink>
        </>
      )}
      {isSmallScreen && (
        <>
          <LinkSmallLogo to="/" className='link-small-logo'>
            <LogoSmallView src={logo} alt='logo' />
          </LinkSmallLogo>
          <DropcaseContainer>
            <MenuButton  onClick={toggleMenu}>
              <img src={`https://icongr.am/fontawesome/bars.svg?size=28&color=223b4e`} alt="icon Facebook" />
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
        </>
      )}
    </NavbarContainer>
  );
} 

export default Navbar;