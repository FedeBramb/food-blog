import styled from 'styled-components';

import { motion } from "framer-motion";

import { Link } from 'react-router-dom';

export const Splash = styled.div`
    clip-path: xywh(0 5px 100% 100% round 15% 0);
`

export const PreviewContainer = motion.create(styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    font-size: 1.1rem;
    

    @media (max-width: 738px) {
        margin: 0;
        flex-direction: column;
    }
`);

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

    
`;

export const ReadButton = styled.div`
    display: inline-block;
    color: var(--secondary-color);
    background-color: var(--primary-color);
    padding: 0.625rem 1.875rem;
    text-transform: uppercase;
    border: 2px solid var(--primary-color);
    cursor: pointer;
    margin-bottom: 15px;

    &:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
`;



