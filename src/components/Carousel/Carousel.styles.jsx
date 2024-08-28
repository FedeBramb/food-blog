import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CarouselContainer = styled.div`
    position: relative;
    width: 78vw;
    margin: 0 auto;
    min-height: 30vh;
    column-gap: 3rem;
    padding-block: min(20vh, 3rem);
    border-bottom: 1px solid rgb(164, 164, 164);

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
    font: 200 normal 1rem "Libre Baskerville", serif;
    opacity: 90%;
`;

export const MySwiper = styled(Swiper)`
    width: 100%;
`;

export const ExploreContainer = styled.div`
    opacity: 0;
    padding-bottom: 10px;
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
            width: 50%;
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
        background: #fff;
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
    font-weight: 400;
    font-size: 1.4rem;
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
    font-size: 14px;

    &:hover {
        background-color: var(--primary-color);
        color: white;
    }
`;

const rotateHand = keyframes`
    0% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(25deg);
    }
`;

export const OverlayContainer = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 1000;
    text-align: center;

    img {
        max-width: 150px;
        opacity: 100%;
        transform-origin: bottom center;
        animation: ${rotateHand} 1s infinite alternate ease-in-out;
    }
`;
