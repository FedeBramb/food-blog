import styled from "styled-components";

export const SignUpContainer = styled.div`
    height: calc(100vh - 13.73rem);
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 78%;
    z-index: 100;
    margin: auto;

    @media screen and (max-width: 780px) {
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-top: 3%;
    }

    .error-container {
        height: 40px;
    }

    .error-message {
        color: #ff4d4d;
        font-size: 14px;
        text-align: center;
        position: absolute;
        top: 0; 
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
    border: 1px solid var(--hover-input);
    border-radius: 0.5rem;
    margin-bottom: 0;
    background-color: #f8f9fa;    

    &:focus {
        outline: none; /* Rimuove il bordo predefinito */
        border: 2px solid var(--comment-color);
    }

    &.last-input {
        height: 2.5rem;            
    }
`

export const Button = styled.button`
   width: 100%;
  padding: 14px 20px;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  grid-column: span 2;

  &:hover {
    background-color: var(--hover-input);
    border: 2px solid var(--hover-input);
  }
`