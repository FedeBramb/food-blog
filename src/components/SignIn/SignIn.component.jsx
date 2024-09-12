import React, { useState, useContext } from 'react';

import { UserContext } from '../../context/user.context';

import { useNavigate } from 'react-router-dom';

import WelcomeAuth from "../WelcomeAuth/WelcomeAuth.component";

import {
    SignInContainer,
    SignInForm,
    Label,
    Input,
    Button,
} from './SignIn.styles';

// Componente per il log in
const SignIn = () => {
    const { loadUser } = useContext(UserContext);
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
        setError(""); // Pulisce eventuali errori

        try {
            const response = await fetch('http://localhost:3000/signin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                // Leggi il messaggio di errore dal server
                const errorData = await response.json();
                setError(errorData.error || "Errore durante il login"); // Imposta il messaggio di errore
                return; // Ferma l'esecuzione qui
            }

            const user = await response.json();
            
            if (user) {
                const userWithLoggedIn = { ...user, logged_in: true };
                // Salviamo l'utente nel localstorage per mantenerlo loggato al refresh
                localStorage.setItem('user', JSON.stringify(userWithLoggedIn));
                // Settiamo lo state con i dati utente ricevuti dal BE
                console.log('User saved to localStorage:', localStorage.getItem('user'));
                loadUser(userWithLoggedIn);
                console.log(userWithLoggedIn);
                navigate('/'); // Naviga alla home
            }
        } catch (error) {
            console.error(error); // Stampa l'errore per il debugging
            setError("Errore del server. Riprova più tardi."); // Imposta un messaggio di errore generico in caso di eccezione
        }
    };

    
  return (
        <SignInContainer>
            <WelcomeAuth className='sign-in' />
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
