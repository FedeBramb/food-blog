import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import blueDonuts from '../../assets/bluDonut.png';

import './SignIn.styles.css';

// Componente per il log in
const SignIn = ({ loadUser }) => {
    // Stato per i dati della form
    const [ formSignIn, setformSignIn ] = useState({
        email: '',
        password: '',
    })
    // Stato per eventuali errori
    const [ error, setError ] = useState("");

    // Hook per la navigazione
    const navigate = useNavigate();

    // Aggiorna lo state della form
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setformSignIn((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(formSignIn);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const { email, password } = formSignIn;

        setError(""); // Pulisci eventuali errori
        // Invia tramite post method email e password
        try {
            const response = await fetch('http://localhost:3000/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                // Leggi il messaggio di errore dal server
                const errorData = await response.json();
                throw new Error(errorData);
            }

            const user = await response.json();
            
            if (user.id) {
                user.logged_in = true;
                // Settiamo lo state con i dati utente ricevuti dal BE
                loadUser(user);
                navigate('/'); // Naviga alla home
                console.log(user);
            }
        } catch (error) {
            setError('Credenziali errate');
        }
    };

    
  return (
        <div className='signin-container'>
            <img className='overlay-donut' src={blueDonuts} alt='blu donut' />
            <div className='welcome-container'>
                <h1 className='h1-sign-in gradient-text'>Bentornato!</h1>
                <hr className='hr-sign-in hr-blue' />
                <p className='p-sign-in'>Se hai già effettuato la registrazione, inserisci la tua email e password!
                </p>
            </div>
            <form className='signin-form' onSubmit={handleSubmit}>
                <label htmlFor='email' className='signin-label'>Email</label>
                <input id='email' className='signin-input' type='email' name='email' onChange={onChangeHandler} required></input>
                <label htmlFor='password' className='signin-label'>Password</label>
                <input id='password' className='signin-input' type='password'name='password' onChange={onChangeHandler} required></input>
                <button type='submit' className='signin-button'>Accedi</button>
                <div className='error-container'>
                    {error && <p className={`error-message ${'error' ? 'visible' : ''}`}>{error}</p>}
                </div>
            </form>
        </div>
  )
}

export default SignIn;