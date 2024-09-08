import styled from "styled-components";

import WelcomeAuth from "../WelcomeAuth/WelcomeAuth.component";

export const SignUpContainer = styled.div`
    height: calc(100vh - 14.106rem);
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 78%;
    z-index: 100;
    margin: auto;
`

export const WelcomeAuthStyled = styled(WelcomeAuth)`
  &.overlay-donut-sign-up {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    height: 80%;
    opacity: 0.5;
  }
`

export const FormContainer = styled.div`
    width: 50%;    
    background-color: rgba(255, 255, 255, 0.4);
    padding: 3.125rem;
    min-width: 270px;
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 0.625rem;

    @media screen and (max-width: 1050px) {
        display: block;
    }

    &.marketing-container {
    display: flex;
    align-items: center;
    width: 100%;
}
`

export const Label = styled.label`
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border: 0.0625rem solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 0;
    background-color: #f8f9fa;
    transition: border-color 0.3s ease;

    &:focus {
    border-color: var(--input-focus-color);
    outline: none;
}

    &.last-input {
        height: 2.5rem;            
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 0.875rem 1.25rem;
    background-color: var(--secondary-color);
    border-color: var(--primary-color);
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    grid-column: span 2;

    &:hover {
        background-color: var(--primary-color);
        color: var(--text-secondary-color);
    }
`