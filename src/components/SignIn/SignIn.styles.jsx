import styled from "styled-components";

import WelcomeAuth from "../WelcomeAuth/WelcomeAuth.component";

export const SignInContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 225.69px);
  width: 78%;
  margin: auto;
  z-index: 100;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
  }

  &.error-container {
    height: 40px;
  }

  &.error-message {
    color: #ff4d4d;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
`

export const WelcomeAuthStyled = styled(WelcomeAuth)`
  &.overlay-donut-sign-in {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    height: 80%;
    opacity: 0.5;
  }
`

export const SignInForm = styled.form`
  background-color: rgba(255, 255, 255, 0.4);
  padding: 40px 20px;
  width: 30%;
  min-width: 220px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 780px) {
    min-width: 300px;
    padding: 20px 20px;
    max-height: 250px;
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
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #f8f9fa;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 14px 20px;
  background-color: var(--secondary-color);
  border-color: var(--primary-color);
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--text-secondary-color);
  }
`
/*



.signin-button {
  
}

.signin-button

.error-container {
  height: 40px;
}

.error-message {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}


  */