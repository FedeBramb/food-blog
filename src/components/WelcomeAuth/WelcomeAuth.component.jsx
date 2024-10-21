import React from 'react';

import blueDonuts from '../../assets/bluDonut.png';

import './WelcomeAuth.styles.jsx';

const WelcomeAuth = ({ className }) => {
  // Determina il testo in base al valore di className
  const isSignIn = className === 'sign-in';
  const headerText = isSignIn ? 'Bentornato!' : 'Benvenuto!';
  const paragraphText = isSignIn 
    ? 'Se hai già effettuato la registrazione, inserisci la tua email e password!' 
    : 'Crea un nuovo account inserendo la tua email e una password.';
  
  return (
    <>
      <img src={blueDonuts} alt='blu donut' className='donut'/>
      <div className='welcome-container'>
        <h1 className='h1-sign-in gradient-text'>{headerText}</h1>
        <hr className='hr-sign-in hr-blue' />
        <p className='p-sign-in'>{paragraphText}</p>
      </div>
    </>
  )
}

export default WelcomeAuth;