import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 78%;
    height: 122.69px; 
    margin: auto;
    border-bottom: 1px solid rgba(176, 175, 175, 0.4);
    font: 700 1.0em "Montserrat", sans-serif;
    font-optical-sizing: auto;

    @media screen and (max-width: 800px) {
        height: 80%;
    }

    @media screen and (max-width: 480px) {
        width: 98%;
    }
`

export const NavLink = styled(Link)`
    position: relative;
    text-decoration: none;
    background-color: var(--primary);
    background-image: var(--gradient-color);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 20px;

    /* Allinea a destra il testo negli ultimi due figli */
    &:nth-last-child(-n+2) {
        text-align: right;
    }

    &:hover {
        & > div {
            transform: scaleX(1);
        }
    }
    
    @media screen and (max-width: 800px){
        display: none;
    }
`

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-image: var(--gradient-color);
  width: 100%;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s;
`;

export const LogoBigLink = styled(Link)`
    width: 20%;
    min-width: 185px;

    & img {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 800px){
        display: none;
    }
`

export const LinkSmallLogo = styled(Link)`
    text-align: center;
    display: none;
    width: 30%;

    @media screen and (max-width: 800px){
        display: block;

    }
`

export const LogoSmallView = styled.img`
    width: 100%;
    min-width: 125px;
    
`

export const DropcaseContainer = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    display: none;


    @media screen and (max-width: 800px){
        display: flex;
        justify-content: space-between;
    }
`

// export const MenuButton = styled.button`
//     width: 100%; 
//     background-color: rgb(255, 255, 255);
//     outline: none;
//     border: none;
//     font-size: 1.4rem;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     &:focus {
//         outline: none;
//     }

//     &:hover {
//         cursor: pointer;
//     }
// `

export const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f1f1f1;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;

  a {
    color: var(--primary);
    padding: 12px 16px;
    display: block;
    &:hover {
      background-color: var(--hover-input);
      color: var(--secondary-color);
    }
  }
`