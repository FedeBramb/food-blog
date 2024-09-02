import React from 'react';

import blueDonuts from '../../assets/bluDonut.png';

import './WelcomeAuth.styles.css';

const WelcomeAuth = ({ className }) => {
  return (
    <>
        <img className={className} src={blueDonuts} alt='blu donut' />
        <div className='welcome-container'>
            <h1 className='h1-sign-in gradient-text'>Bentornato!</h1>
            <hr className='hr-sign-in hr-blue' />
            <p className='p-sign-in'>Se hai già effettuato la registrazione, inserisci la tua email e password!
            </p>
        </div>
    </>
  )
}

export default WelcomeAuth;