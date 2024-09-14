import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CarouselContainer = styled.div`
    position: relative;
    width: 78vw;
    margin: 0 auto;
    min-height: 30vh;
    column-gap: 3rem;
    padding-block: min(20vh, 3rem);
    border-bottom: 1px solid rgba(176, 175, 175, 0.4);

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

export const Blueberry = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.3;
    width: min(450px, 100%);
    height: 400px;   
    object-fit: cover;
    overflow-x: visible;
`;

export const Donut = styled.img`
    position: absolute;
    bottom: -4rem;
    right: -9rem;
    z-index: -1;
    opacity: 0.6;
    width: min(600px, 100%);
    height: 400px; 
    object-fit: cover;

    @media screen and (max-width: 738px) {
        left: 2rem;
        top: 50rem;
    }
`;

export const Span = styled.span`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1rem;
    color: #717171;
`;

export const MainTitle = styled.h1`
    color: var(--primary-color);
    text-transform: capitalize;
    letter-spacing: 0.8px;
    font-size: 4rem;
    line-height: 1.1;    
`;

export const Hr = styled.hr`
    display: block;
    background: var(--gradient-color);
    height: 0.25rem;
    width: 6.25rem;
    border: none;
    margin: 1.125rem 0 1.875rem 0;
`;

export const P = styled.p`
    line-height: 1.6;
    font-size: 1.1rem;
    opacity: 90%;
`;

export const MySwiper = styled(Swiper)`
    width: 100%;

`;

export const ExploreContainer = styled.div`
    opacity: 0;
    position: relative;
`;

export const MySwiperSlide = styled(SwiperSlide)`
    width: 18.75rem;
    height: 28.125rem;
    position: relative;
    display: grid;
    justify-items: center;  
    align-content: end;

    &.swiper-slide-active {
        ${ExploreContainer} {
            display: grid;
            justify-items: center;
            align-content: end;
            opacity: 1;
            background-color: rgba(255, 255, 255, .6);
            padding: 0 2rem;
            margin-bottom: 60px;


            .slider-btn {
                align-self: flex-start;
                opacity: 0.6;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    .swiper-pagination-bullet,
    .swiper-pagination-bullet-active {
        background: var(--text-seconday-color);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export const Title = styled.h2`
    color: var(--primary-color);
    margin: 1rem 0;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
`;

export const ExploreButton = styled.div`
    display: inline-block;
    color: var(--primary-color);
    padding: 0.625rem 1.875rem;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid var(--primary-color);
    cursor: pointer;
    margin-bottom: 15px;

    &:hover {
        background-color: var(--primary-color);
        color: white;
    }
`;

const move = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-50px);
    }
    100% {
        transform: translateX(50px); /* Tornare al centro */
    }
`;

export const UnderlayContainer = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 100;
    text-align: center;

    img {
        max-width: 150px;
        opacity: 100%;
        transform-origin:  center;
        animation: ${move} 2s infinite ease-in-out;
    }
`;
