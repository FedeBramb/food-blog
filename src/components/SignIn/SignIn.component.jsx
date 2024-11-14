import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useSignIn from '../../hooks/useSignIn.js';

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
    const { signIn, error } = useSignIn();
    const [ formSignIn, setformSignIn ] = useState({
        email: '',
        password: ''
    })

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

    // Handler per il submit, naviga in homepage se loggati.
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Dati della form:', formSignIn); // Controlla i dati della form
        try {
            const user = await signIn(formSignIn);
            if (user) {
                navigate('/');
            }
        } catch (err) {
            console.error('Errore durante il log in:', err.message);
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
                    {error && <p className='error-message'>Error: {error}</p>}
                </div>
            </SignInForm>
        </SignInContainer>
  )
}

export default SignIn;
