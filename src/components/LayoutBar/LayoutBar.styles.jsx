import styled from "styled-components";


export const Bar = styled.div`
    background-color: var(--primary-color);
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11vw;

    @media screen and (max-width: 880px) {
        justify-content: center;
    }

    &.logo-image {
        max-width: 100%;
        height: auto;
    }

    &.social-bar-footer {
        height: 60px;
    }
`

export const AuthButtonsContainer = styled.div`
    display: flex;
    gap: 50px;

    @media screen and (max-width: 880px) {
        justify-content: center;
        gap: 10px;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const Span = styled.span`
    font-size: 14px;
`




