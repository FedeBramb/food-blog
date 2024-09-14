import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max(78%, 342px);
    margin: auto;
    font: 700 1.0em "Montserrat", sans-serif;
    font-optical-sizing: auto;
    border-bottom: 1px solid rgba(176, 175, 175, 0.4);
    height: 122.69px;    
`

export const NavItem = styled(Link)`
    text-decoration: none;
    background-color: var(--primary-color);
    background-image: var(--gradient-color);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 20%;

    /* Allinea a destra il testo negli ultimi due figli */
    &:nth-last-child(-n+2) {
        text-align: right;
    }

    /* Rimuove la sottolineatura al passaggio del mouse */
    &:hover {
        text-decoration: none;
        color: rgb(39, 39, 39);
    }
`

export const LogoBigLink = styled(Link)`
    text-align: center;

    & img {
        width: 80%;
        height: auto;
    }
`

export const LinkSmallLogo = styled(Link)`
    text-align: center;
`

export const LogoSmallView = styled.img`
    width: 50%;
    min-width: 222px;
`

export const DropcaseContainer = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
`

export const MenuButton = styled.button`
    width: 100%; 
    background-color: rgb(255, 255, 255);
    outline: none;
    border: none;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    
    & img {
        margin-left: 0.5em;
        width: 20px;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
`

export const DropdownContent = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f1f1f1;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    & a {
        color: var(--primary-color);
        padding: 12px 16px;
        display: block;

        &:hover {
            background-color: var(--hover-input);
            color: var(--secondary-color);
        }
    }   
`
