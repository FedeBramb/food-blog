import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export const PreviewContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    font-family: "Libre Baskerville", serif;
    font-weight: 200;
    font-style: normal;
    width: 100%;

    @media (max-width: 738px) {
        margin: 0;
        flex-direction: column;
    }
`;

export const NewsLink = styled(Link)`
    width: 40%;
    max-width: 400px;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 738px) {
        min-width: 400px;
    }
`;

export const LazyImg = styled.img`    
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    transition: transform 0.3s ease-in-out;
    width: 100%;
    
    &:hover {
        transform: scale(1.05);
    }

`;

export const DetailsContainer = styled.div`
    text-align: left;
    width: 50%;

    @media screen and (max-width: 738px) {
        margin: 0;
        text-align: center;
    }

    & h2 {
        color: #355b5d;
    }

    & > * {
        margin-bottom: 2rem; 
        
        @media screen and (max-width: 1100px) {
            margin-bottom: 1rem;
        } 
    }

    & > *:last-child {
        margin-bottom: 0; 
    }

    & p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        letter-spacing: -1px;
        opacity: 72%;
    }

    & .span-link {
        color: #007074;
        font-weight: 650;

        &:hover {
            color: black;
        }
    }
`;


