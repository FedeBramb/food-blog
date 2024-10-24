import styled from "styled-components";


export const Bar = styled.div`
    background-color: var(--primary);
    width: 100%;
    height: 2.8rem;
    display: flex;
    justify-content: center;

    &.social-bar-header {
        position: -webkit-sticky; /* Per supporto nei browser Webkit */
        position: sticky;
        top: 0; /* Attacca al top della viewport */
        z-index: 900; /* Assicurati che stia sopra altri elementi */
    }

    &.social-bar-footer {
        height: 3.7rem;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 78%;

    @media screen and (max-width: 480px) {
        width: 98%;
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




