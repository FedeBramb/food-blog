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

/* Navigatore personalizzato in base alla risoluzione dello schermo
** nel caso di risoluzioni contenute ci sarà un burger con dropdown
*/
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  //Funzione per gestire il dropDown, tramite boolean memorizzato nello state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variabili per animazione dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };
  
  // Variabili per animazione dei dropdown's link
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  return (  
    <NavbarContainer>
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