import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

// Componente per la registrazione
// Ragruppo tutte le proprietà in un oggetto di stato. 
const SignUp = ({ loadUser }) => {
    const [ formSignUp, setFormSignUp ] = useState({
        name: '',
        surname: '',
        password: '',
        checkPassword: '',
        email: '',
        marketing: false
    });

    const [ error, setError ] = useState("");

    const navigate = useNavigate();

    /* useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000');
            const data = await response.json()
            console.log(data);
        }
        fetchData();
    }, []) */

    // Handler  destruttura le proprietà dall'event.target
    // Settiamo lo state mantenendo i dati precedenti altrimenti
    //  otterremmo un oggetto con singola value-pair
    const handleInputChange = (event) => {
        const { name, value, type, checked} = event.target;
        setFormSignUp((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
        return;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { name, password, checkPassword, email } = formSignUp;

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
                    name: name,
                    email: email,
                    password: password,
                })
            });
            const data = await await response.json();
            if (data) {
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
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Nome</label>
            <input 
                id='name' 
                name='name' 
                type='text' 
                value={formSignUp.name} 
                onChange={handleInputChange} 
                required 
            />
            <label htmlFor='surname'>Cognome</label>
            <input 
                id='surname' 
                name='surname' 
                type='text' 
                value={formSignUp.surname} 
                onChange={handleInputChange} 
                required 
            />
            <label htmlFor='password'>Password</label>
            <input 
                id='password' 
                name='password'
                type='password' 
                value={formSignUp.password} 
                onChange={handleInputChange} 
                required 
            />
            <label htmlFor='checkPassword'>Conferma Password</label>
            <input 
                id='checkPassword' 
                name='checkPassword' 
                type='password' 
                value={formSignUp.checkPassword} 
                onChange={handleInputChange} 
                required 
            />
            <label htmlFor='email'>Email</label>
            <input 
                id='email' 
                name='email' 
                type='email' 
                value={formSignUp.email} 
                onChange={handleInputChange}
                required 
            />
            <label htmlFor='marketing'>Accetto di ricevere comunicazioni di marketing</label>
            <input 
                id='marketing' 
                name='marketing' 
                type='checkbox'
                value={formSignUp.marketing} 
                onChange={handleInputChange}
                required
            />
            <button type='submit'>Registrati</button>
        </form>
    </div>
  )
}

export default SignUp;


/* Punti per creare una Form:

1. Scegliere input da includere: 

° Nome
° Cognome
° eMail
° Password
° Conferma Password
° CheckBox fini marketing

action non si usa con React perché c'è onSubmit
<form action="/submit-form" method="post">
        <label htmlFor='name'>Nome:</label>
        <input id='name' name='name' type='text' required />

2. Creazione dello State in React:

° Crea uno stato per gestire ciascun campo di input del form
° Crea stato separato per gestire errori di validazione

3. Impostazione degli handler per gli input

° Implementa funzione di gestione degli eventi (onChange) per aggiornare lo stato ad ogni 	modifica dei campi
° Crea  funzione onSubmit per gestire l'invio del form

4. Validazione de dati:

° Aggiungi validazione di base, email sia valida, password e conferma psw corrispondano
° Considera l'integrazione di librerie per validazioni più complesse (es. Yup con Formik).

5. Gestione degli errori:
° Visualizza messaggi di errore specifici per ogni campo in caso di validazione fallita.
° Prepara uno stato per il successo o il fallimento della registrazione e mostra messaggi 	adeguati all'utente.

6. Integrazione con Backend:

° Prepara una funzione per inviare i dati del form al server tramite una chiamata API 	(fetch  	o axios).
° Gestisci la risposta del server, considerando sia i casi di successo che di errore.
Miglioramento della UX:

° Aggiungi elementi di interazione visiva, come spinner di caricamento durante l'invio del 	form.
° Prevedi funzionalità per il salvataggio automatico dei dati in caso di errore o per evitare di perdere informazioni inserite dall'utente.

7. Sicurezza:

° Implementa misure di sicurezza, come l'hashing delle password (sul backend).
° Considera la protezione da attacchi XSS/Cross-Site Scripting.


8. Test e Debug:

° Esegui test del form per verificare che tutte le funzionalità e la validazione funzionino correttamente.
Verifica la compatibilità con diversi browser e dispositivi.
Ottimizzazione per l'Accessibilità:

° Assicurati che il form sia accessibile, aggiungendo etichette (label), attributi aria, e testando la navigazione tramite tastiera.
*/