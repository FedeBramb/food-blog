import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    SignInContainer,
    SignInForm,
    Label,
    Input,
    Button,
    WelcomeAuthStyled
} from './SignIn.styles';

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
        console.log('Email:', email);
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
            
            if (user) {
                const userWithLoggedIn = { ...user, logged_in: true };

                // Settiamo lo state con i dati utente ricevuti dal BE
                loadUser(userWithLoggedIn);
                console.log(userWithLoggedIn);
                navigate('/'); // Naviga alla home
            }
        } catch (error) {
            console.error(error); // Stampa l'errore per il debugging
            setError('Si è verificato un errore di connessione. Riprova più tardi.');
        }
    };

    
  return (
        <SignInContainer>
            <WelcomeAuthStyled className='overlay-donut-sign-in' />
            <SignInForm onSubmit={handleSubmit}>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' name='email' onChange={onChangeHandler} required></Input>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password'name='password' onChange={onChangeHandler} required></Input>
                <Button type='submit'>Accedi</Button>
                <div className='error-container'>
                    {error && <p className={`error-message ${'error' ? 'visible' : ''}`}>{error}</p>}
                </div>
            </SignInForm>
        </SignInContainer>
  )
}

export default SignIn;
