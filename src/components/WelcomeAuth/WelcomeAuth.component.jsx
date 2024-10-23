import React from 'react';

import blueDonuts from '../../assets/bluDonut.png';

import {
  Donut,
  Container,
  Title,
  Hr,
  P,
} from './WelcomeAuth.styles.jsx';

const WelcomeAuth = ({ className }) => {
  // Determina il testo in base al valore di className
  const isSignIn = className === 'sign-in';
  const headerText = isSignIn ? 'Bentornato!' : 'Benvenuto!';
  const paragraphText = isSignIn 
    ? 'Se hai già effettuato la registrazione, inserisci la tua email e password!' 
    : 'Crea un nuovo account inserendo la tua email e una password.';
  
  return (
    <>
      <Donut src={blueDonuts} alt='blu donut' className='donut'/>
      <Container className='welcome-container'>
        <Title className='h1-sign-in gradient-text'>
          {headerText}
          <Hr className='hr-sign-in hr-blue' />
        </Title>
        <P className='p-sign-in'>{paragraphText}</P>
      </Container>
    </>
  )
}

export default WelcomeAuth;