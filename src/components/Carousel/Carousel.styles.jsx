import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LazyLoadImage } from "react-lazy-load-image-component";

export const CarouselContainer = styled.div`
    position: relative;
    width: 78vw;
    margin: 0 auto;
    min-height: 30vh;
    column-gap: 3rem;
    padding-block: min(20vh, 3rem);
    border-bottom: 1px solid rgb(164, 164, 164);

    @media screen and (min-width: 48rem) {
        display: flex;
        align-items: center;
}
`

export const LazyImageCaffe = styled(LazyLoadImage)`
    position: absolute;
    top: -2rem;
    left: -7rem;
    z-index: -1;
    opacity: 0.3;
    width: 600px; 
    height: 400px;  
    max-width: 100%;  
    object-fit: cover;
`

export const LazyImageCiambella = styled(LazyLoadImage)`
    position: absolute;
    bottom: -4rem;
    right: -9rem;
    z-index: -1;
    opacity: 0.6;
    width: 600px;
    height: 400px; 
    max-width: 100%; 
    object-fit: cover;
`

export const Span = styled.span`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1rem;
    color: #717171;
`

export const MainTitle = styled.h1`
text-transform: capitalize;
    letter-spacing: 0.8px;
    font-size: 4rem;
    line-height: 1.1;    
`

export const Hr = styled.hr`
    display: block;
    background: #00a4aa;
    height: 0.25rem;
    width: 6.25rem;
    border: none;
    margin: 1.125rem 0 1.875rem 0;
`

export const P = styled.p`
    line-height: 1.6;
    font-family: "Libre Baskerville", serif;
    font-weight: 200;
    font-style: normal;
    opacity: 90%;
`

export const MySwiper = styled(Swiper)`
    width: 100%;
`

export const ExploreContainer = styled.div`
    display: none;
    opacity: 0;
    padding-bottom: 4rem;
    position: relative;
`

export const MySwiperSlide = styled(SwiperSlide)`
    width: 18.75rem;
    height: 28.125rem;
    position: relative;

    &.swiper-slide-active {
        ${ExploreContainer} {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            opacity: 1;
            background-color: transparent;
            height: 100%;

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
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

export const Title = styled.h2`
    color: #ffffff;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.4;
    margin-bottom: 0.625rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
`

export const SlideButton = styled.button`
    display: inline-block;
    color: #717171;
    background: #fff;
    padding: 0.625rem 1.875rem;
    margin-top: 2.125rem;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid #c2c2c2;
    border-radius: 3.125rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        border: 0.12rem solid #00a4aa;
        color: #00a4aa;
    }
`

const moveIcon = keyframes`
    0% {
        transform: translate(-50%, -50%) translateX(0);
    }
    25% {
        transform: translate(-50%, -50%) translateX(20px);
    }
    50% {
        transform: translate(-50%, -50%) translateX(0);
    }
    75% {
        transform: translate(-50%, -50%) translateX(-20px);
    }
    100% {
        transform: translate(-50%, -50%) translateX(0);
    }
`

export const OverlayContainer = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: moveIcon 2s infinite ease-in-out;
    z-index: 1000;
    text-align: center;

    span {
        color: #ffffff;
        font-size: 2em;
        display: block;
    }

    img {
        max-width: 150px;
        opacity: 95%;
    }
`
