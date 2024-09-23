import React, { useState, useContext, useEffect } from 'react';

import { UserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

import WelcomeAuth from "../WelcomeAuth/WelcomeAuth.component";

import {
    SignUpContainer,
    FormContainer,
    Form,
    Label,
    Input,
    Button,
} from './SignUp.styles';

// Componente per la registrazione
// Ragruppo tutte le proprietà in un oggetto di stato. 
const SignUp = () => {
    const { signUp, err} = useSignUp();
    const [ formSignUp, setFormSignUp ] = useState({
        username: '',
        password: '',
        checkPassword: '',
        email: '',
        marketing: false
    });

    const [ error, setError ] = useState("");

    useEffect(() => {
        console.log("Error detected:", error); // Log per il debug
        if (error) {
            alert(error);
            setError(""); // Resetta l'errore dopo aver mostrato l'alert
        }
    }, [error]);

    const navigate = useNavigate();

    // Handler  destruttura le proprietà dall'event.target
    // Settiamo lo state mantenendo i dati precedenti altrimenti
    //  otterremmo un oggetto con singola value-pair
    const onChangeHandler = (event) => {
        const { name, value, type, checked} = event.target;
        setFormSignUp((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
        return;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { username, password, checkPassword, email } = formSignUp;
    
        // Validazione di base: controllo password
        if (password !== checkPassword) {
            console.log("Password mismatch"); // Log per il debug
            setError("Le password non coincidono");
            return;
        }
    
        // Validazione di base: email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            console.log("Invalid email"); // Log per il debug
            setError("L'email non è valida");
            return;
        }
    
        try {
            await signUp(username, email, password);
            navigate('/');
        } catch (error) {
            console.error('Errore durante la registrazione:', error.message);
        }
    }
    
  return (
    <SignUpContainer>
        <WelcomeAuth className='sign-up' />
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor='name'>
                    Nome
                    <Input
                        id='username' 
                        name='username' 
                        type='text' 
                        value={formSignUp.name} 
                        onChange={onChangeHandler} 
                        required 
                    />
                </Label>
                <Label htmlFor='email'>
                    Email
                    <Input 
                        id='email' 
                        name='email' 
                        type='email' 
                        value={formSignUp.email} 
                        onChange={onChangeHandler}
                        required 
                    />
                </Label>
                <Label htmlFor='password'>
                    Password
                    <Input
                        id='password' 
                        name='password'
                        type='password' 
                        value={formSignUp.password} 
                        onChange={onChangeHandler} 
                        required 
                    />
                </Label>
                <Label htmlFor='checkPassword'>
                    Conferma Password
                    <Input
                        id='checkPassword' 
                        name='checkPassword' 
                        type='password' 
                        value={formSignUp.checkPassword} 
                        onChange={onChangeHandler} 
                        required 
                    />
                </Label>
                <Input
                    id='marketing' 
                    name='marketing' 
                    type='checkbox'
                    value={formSignUp.marketing} 
                    onChange={onChangeHandler}
                    required
                />
                <Label htmlFor='marketing'>
                    Accetto di ricevere comunicazioni di marketing
                </Label>
                
                <Button type='submit' className='form-button'>Registrati</Button>
            </Form>
        </FormContainer>
    </SignUpContainer>
  )
}

export default SignUp;