import styled from "styled-components";



export const HeadBar = styled.div`
    background-color: #00a4aa;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11vw 0 11vw;

    @media screen and (max-width: 880px) {
        justify-content: center;
    }

    &.logo-image {
        max-width: 100%;
        height: auto;
    }

    &.social-bar-footer {
        height: 60px;
        margin-top: 20px;
    }
`



export const IconsContainer = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 880px) {
        display: none;
    }

    & img {
        width: 31px;
        height: 31px;
    }
`




