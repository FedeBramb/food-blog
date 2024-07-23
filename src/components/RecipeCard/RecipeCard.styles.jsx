import styled from "styled-components";

import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const primaryColor = "aliceblue";
const secondaryColor = "rgba(0, 0, 0, 0.7)";
const borderRadius = "5px";
const transitionDuration = "0.3s";

export const CustomLink = styled(Link)`
    text-decoration: none;
` 

export const TitleContainer = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: ${borderRadius}; 
    position: absolute;
    bottom: 0;
    left: 0; 
    box-shadow: 0 5px 20px 3px ${secondaryColor};
    opacity: 0;
    transition: opacity ${transitionDuration}; 

    @media screen and (max-width: 738px) {
        opacity: 1;
    }
`

export const CardContainer = styled.div`
    height: auto; 
    position: relative;
    margin-top: 35px;

    &:hover ${TitleContainer} {
        opacity: 1;
    }

    @media screen and (max-width: 738px) {
        opacity: 1;
    }

`

/* Posizione relativa per consentire il posizionamento assoluto dei figli */
export const PosterContainer = styled.div`
    width: 100%; 
    position: relative; 
`

/* Per mantenere l'aspect ratio senza distorsione */
export const PosterLazyImg = styled(LazyLoadImage)`
    width: 100%; 
    object-fit: cover;
    border-radius: ${borderRadius};
    display: block;
`

/* box-sizing: border-box include padding nella larghezza dichiarata */
export const TitleContent = styled.div`
    width: 100%;
    padding: 20px; 
    box-sizing: border-box; 
    text-align: center;

    & .title-card {
        font-size: clamp(16px, 3vw, 36px);
        margin-bottom: 2%;
        color: ${primaryColor}; 
        text-shadow: 2px 2px 4px ${secondaryColor};
        text-decoration: none;
    }
`

export const ReadButton = styled.button`
    background-color: transparent;
    color: ${primaryColor}; 
    border: 2px solid #fff;
    padding: 5px 5px;
    border-radius: ${borderRadius}; 
    font-size: clamp(12px, 3vw, 20px);
    cursor: pointer;
    margin-top: 1%;
`
