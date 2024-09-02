import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 55%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.7fr 1.1fr 1.1fr 1.1fr;
    gap: 10px;
    height: calc(100vh - 157.73px);
    position: -webkit-sticky;
    position: sticky;
    top: 52.04px;

    @media screen and (max-width: 1100px) {
        width: 78vw;
        position: relative;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 0.8fr 1.1fr 1.1fr;
        margin-left: 0;
        height: 100%;
        top: 0;
    }

    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 0.8fr 1.2fr;
    }

    @media screen and (max-width: 738px) {
        width: 78vw;
        position: relative;
        grid-template-columns: 1fr; /* Single column layout */
        grid-template-rows: repeat(7, auto); /* 1 row for text + 6 rows for images */
        height: 100%;
        margin-top: 2vh;
        justify-content: center;
    }

    & a {
        width: 100%;
        text-decoration: none;
    }
`

export const NewsTitle = styled.div`
    grid-column: 1 / span 2;
    
    & h2 {
        margin: 40px 0 20px 0;
    }

    @media screen and (max-width: 1100px) {
        text-align: center;
        margin: auto;
        grid-column: 1 / span 3;
    }

    @media screen and (max-width: 850px) {
        grid-column: 1 / span 2;
    }

    @media screen and (max-width: 738px) {
        grid-column: 1 / span 1;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    & img {
        width: min(300px, 100%);
        height: auto;
    }    
`

export const OverlayContainer = styled.div`
    position: absolute;
    bottom: 0;
    background: var(--primary-color);
    color: #fff;
    width: min(300px, 100%);
    text-align: center;
    white-space: nowrap;

    & span {
        font-size: clamp(12px, 2vw, 16px);
    }
`