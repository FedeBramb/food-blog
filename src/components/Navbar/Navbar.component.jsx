import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import Burgermenu from '../BurgerMenu/BurgerMenu.component.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Container,
  NavLink,
  Underline,
  LogoBigLink,
  LinkSmallLogo,
  LogoSmallView,
  DropcaseContainer,
  DropdownContent,
} from './Navbar.styles.jsx';

// Array di configurazione per i link di navigazione
const NAV_LINKS = [
  { path: '/', label: 'HOME' },
  { path: '/recipes', label: 'RICETTE' },
  { path: '/glossario', label: 'GLOSSARIO' },
  { path: '/contatti', label: 'CONTATTI' },
];

/* Navigatore personalizzato in base alla risoluzione dello schermo
** nel caso di risoluzioni contenute ci sarà un burger con dropdown
*/
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Funzione per gestire il dropDown, tramite boolean memorizzato nello state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Variabili per animazione dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  // Variabili per animazione dei dropdown's link
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <Container>
      {/* Logo principale visibile su schermi ampi */}
      <LogoBigLink to="/">
        <img src={logo} alt="logo" />
      </LogoBigLink>

      {/* Link di navigazione principali */}
      {NAV_LINKS.map(({ path, label }) => (
        <NavLink key={path} to={path}>
          {label}
          <Underline />
        </NavLink>
      ))}

      <DropcaseContainer>
        {/* Logo ridimensionato visibile su schermi piccoli */}
        <LinkSmallLogo to="/">
          <LogoSmallView src={logo} alt="logo" />
        </LinkSmallLogo>

        {/* Burger menu per risoluzioni più piccole */}
        <Burgermenu
          strokeWidth="3"
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          isOpen={isOpen}
          onClick={toggleMenu}
        />

        {/* Dropdown menu visibile quando il burger menu è attivo */}
        {isOpen && (
          <DropdownContent
            initial="hidden"
            animate="visible"
            variants={dropdownVariants}
          >
            {NAV_LINKS.map(({ path, label }) => (
              <motion.div key={path} variants={linkVariants}>
                <Link to={path} className="dropItem" onClick={toggleMenu}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </DropdownContent>
        )}
      </DropcaseContainer>
    </Container>
  );
};

export default Navbar;
