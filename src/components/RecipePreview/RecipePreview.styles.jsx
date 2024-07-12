import styled from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';


export const PreviewContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 10px 0;
    font-family: "Libre Baskerville", serif;
    font-weight: 200;
    font-style: normal;
`

export const LazyImg = styled(LazyLoadImage)`
    max-width: 250px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

    @media screen and (max-width: 1100px) {
        max-width: 165px;
    }
`

export const DetailsContainer = styled.div`
    margin-left: 20px;
    text-align: left;

    & h2 {
        color: #355b5d;
    }

    /* Aggiungi uno spazio di 1rem tra gli elementi */
    & > * {
        margin-bottom: 2rem; 
        
        @media screen and (max-width: 1100px) {
            margin-bottom: 1rem;
        } 
    }

    /* Rimuovi lo spazio dopo l'ultimo elemento */
    &> *:last-child {
        margin-bottom: 0; 
    }

    /* clamp: dimensione minima, preferita, max */
    & p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        letter-spacing: -1px;
        opacity: 70%;
    }

    & .span-link {
        color: #00a4aa;
        font-weight: 650;

        & :hover {
            color: black;
        }
    }

`

