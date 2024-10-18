import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.webp';
import Burgermenu from '../BurgerMenu/BurgerMenu.component.jsx';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  NavbarContainer,
  NavLink,
  Underline,
  LogoBigLink,
  LinkSmallLogo,
  LogoSmallView,
  DropcaseContainer,
  DropdownContent
} from './Navbar.styles.jsx';


const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1196);
  const [isOpen, setIsOpen] = useState(false)
  
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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };
  
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  return (  
    // Renderizza il nav in base alla risoluzione della view  
    <NavbarContainer className={`${isSmallScreen && 'smallScreen'}`}>
      <LogoBigLink to="/"><img src={logo} alt='logo' /></LogoBigLink>
      <NavLink to="/">HOME<Underline/></NavLink>
      <NavLink to="/recipes">RICETTE<Underline/></NavLink>
      <NavLink to="/glossario">GLOSSARIO<Underline/></NavLink>
      <NavLink to="/contatti">CONTATTI<Underline/></NavLink>
      <DropcaseContainer>
        <LinkSmallLogo to="/" className='link-small-logo'>
          <LogoSmallView src={logo} alt='logo' />
        </LinkSmallLogo>
        <Burgermenu 
          strokeWidth="3"
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          isOpen={isOpen} 
          onClick={toggleMenu} 
        />
        {isOpen && (
          <DropdownContent
            initial="hidden"
            animate="visible"
            variants={dropdownVariants}
          >
            <motion.div variants={linkVariants}>
              <Link to="/" className="dropItem" onClick={toggleMenu}>HOME</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link to="/recipes" className="dropItem" onClick={toggleMenu}>RICETTE</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link to="/glossario" className="dropItem" onClick={toggleMenu}>GLOSSARIO</Link>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link to="/contatti" className="dropItem" onClick={toggleMenu}>CONTATTI</Link>
            </motion.div>
          </DropdownContent>
        )}
      </DropcaseContainer>
    </NavbarContainer>
  );
} 

export default Navbar;