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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Dati della form:', formSignIn); // Controlla i dati della form
        try {
            await signIn(formSignIn);
            navigate('/');
        } catch (err) {
            console.log('Errore durante il login:', err); // Log più dettagliato
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
            </SignInForm>
            <div className='error-container'>
                {error && <p className='error-message'>{error}</p>}
            </div>
        </SignInContainer>
  )
}

export default SignIn;
