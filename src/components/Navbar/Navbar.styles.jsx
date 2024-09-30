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
    
    @media screen and (max-width: 768px) {
        height: 80%;
        width: 95%;
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

    & img {
        width: 100%;
        height: auto;
    }
`

export const LinkSmallLogo = styled(Link)`
    text-align: center;
`

export const LogoSmallView = styled.img`
    width: 50%;
    min-width: 185px;
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
    justify-content: flex-end;

    & img {
        width: 50px;
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
    z-index: 999;

    & a {
        color: var(--primary);
        padding: 12px 16px;
        display: block;

        &:hover {
            background-color: var(--hover-input);
            color: var(--secondary-color);
        }
    }   
`
