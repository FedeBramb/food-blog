import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    SignUpContainer,
    WelcomeAuthStyled,
    FormContainer,
    Form,
    Label,
    Input,
    Button,
} from './SignUp.styles';

// Componente per la registrazione
// Ragruppo tutte le proprietà in un oggetto di stato. 
const SignUp = ({ loadUser }) => {
    const [ formSignUp, setFormSignUp ] = useState({
        username: '',
        password: '',
        checkPassword: '',
        email: '',
        marketing: false
    });

    const [ error, setError ] = useState("");

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
            setError("Le password non coincidono");
            return;
        }

        // Validazione di base: email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError("L'email non è valida");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                })
            });
            const data = await await response.json();
            if (data) {
                data.logged_in = true;
                console.log(data);
                loadUser(data);
                navigate('/'); // Naviga alla home
            }
        } catch (error) {
            console.error('Errore nella richiesta registrazione:', error);
            setError('Errore nella richiesta registrazione');
        }

        // Se non ci sono errori, invia i dati al server
        setError(""); // Resetta errori
        console.log('Dati del form inviati:', formSignUp);

        // Logica per inviare i dati al server tramite API
        // Es. chiamata fetch o axios
    }

  return (
    <SignUpContainer>
        <WelcomeAuthStyled className='overlay-donut-sign-up' />
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
                <div className='marketing-container'>
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
                </div>
                <Button type='submit' className='form-button'>Registrati</Button>
            </Form>
        </FormContainer>
    </SignUpContainer>
  )
}

export default SignUp;