import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 55%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.7fr 1.1fr 1.1fr 1.1fr;
    gap: 10px; /* Add spacing between columns */
    height: calc(100vh - 157.73px);
    position: -webkit-sticky;
    position: sticky;
    top: 52.04px;
    margin-left: 1vw;
    font-family: "Open Sans", sans-serif;

    @media screen and (max-width: 1100px) {
        width: 78vw;
        position: relative;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 0.8fr 1.1fr 1.1fr;
        margin-left: 0;
        height: 100%;
        top: 0;
        margin-top: 2vh;
    }

    @media screen and (max-width: 738px) {
        width: 78vw;
        position: relative;
        grid-template-columns: 1fr; /* Single column layout */
        grid-template-rows: repeat(7, auto); /* 1 row for text + 6 rows for images */
        height: 100%;
        top: 0;
        margin-top: 2vh;
    }

    & a {
        width: 100%;
        text-decoration: none;
    }
`

export const NewsTitle = styled.div`
    grid-column: 1 / span 2;
    margin: auto;

    &.margin {
        margin-bottom: 2vh;
    }

    & hr {
        display: block;
        background: #00a4aa;
        height:  0.25rem;
        width: 5.25rem;
        border: none;
        margin-bottom: 3vh;
        margin-left: 1%;
    }

    @media screen and (max-width: 1100px) {
        grid-column: 1 / span 3;
    }

    @media screen and (max-width: 738px) {
        grid-column: 1 / span 1;
    }
`

export const ImgContainer = styled.div`
    position: relative;

    & img {
        width: 100%;
        height: auto;
    }
    
`

export const OverlayContainer = styled.div`
    position: absolute;
    bottom: 2%;
    background: rgba(0, 170, 170, 0.8);
    color: #fff;
    width: 100%;
    text-align: center;
    white-space: nowrap;

    & span {
        font-size: clamp(12px, 2vw, 16px);
    }
`