import styled from "styled-components";

export const SignInContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 13.73rem); // Intera altezza view meno altezze bars/navbar
  width: 78%;
  margin: auto;
  z-index: 100;
  
  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
  }

`

export const SignInForm = styled.form`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 40px 20px;
  width: 30%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 780px) {
    min-width: 300px;
    padding: 20px 20px;
    max-height: 250px;
  }

  .error-container {
    height: 40px;
    position: absolute;
    bottom: 0;
    text-align: center;
  }

  .error-message {
    color: #ff4d4d;
    font-size: 14px;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid var(--hover-input);
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #f8f9fa;

  &:focus {
    outline: none; /* Rimuove il bordo predefinito */
    border: 2px solid var(--comment-color);
  }
`

export const Button = styled.button`
    width: 100%;
    padding: 14px 20px;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    color: var(--secondary-color);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    grid-column: span 2;

    &:hover {
        background-color: var(--secondary-color);
        color: var(--primary);
    }
`