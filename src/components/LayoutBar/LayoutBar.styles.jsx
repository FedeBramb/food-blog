import styled from "styled-components";


export const Bar = styled.div`
    background-color: var(--primary-color);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & img {
        margin-left: 11%;
    }

    &.logo-image {
        max-width: 100%;
        height: auto;
    }

    &.social-bar-header {
        position: -webkit-sticky; /* Per supporto nei browser Webkit */
        position: sticky;
        top: 0; /* Attacca al top della viewport */
        z-index: 1000; /* Assicurati che stia sopra altri elementi */
    }

    &.social-bar-footer {
        height: 54px;
    }
`

export const AuthButtonsContainer = styled.div`
    display: flex;
    gap: 50px;
    margin-right: 11%;
    
    @media screen and (max-width: 880px) {
        justify-content: center;
        gap: 10px;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 11%;
`

export const Span = styled.span`
    font-size: 14px;
`




