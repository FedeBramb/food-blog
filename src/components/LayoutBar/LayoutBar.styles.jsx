import styled from "styled-components";


export const Bar = styled.div`
    background-color: var(--primary-color);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10.3rem;
    align-items: center;

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

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`

export const AuthButtonsContainer = styled.div`
    display: flex;
    gap: 3.125rem;
    
    
    @media screen and (max-width: 880px) {
        justify-content: center;
        gap: 0.625rem;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 0.625rem;
`

export const Span = styled.span`
    font-size: 0.875rem;
`




