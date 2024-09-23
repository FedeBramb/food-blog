import { useState, useContext } from 'react';
import { UserContext } from '../context/user.context.jsx';
import {  fetchSignIn } from "./api.js";

const useSignIn = async () => {
    const { loadUser } = useContext(UserContext);
    const [error, setError] = useState('');

    const signIn = async (formSignIn) => {
        const { email, password } = formSignIn;
        setError('');
    
        try {
            const user = await fetchSignIn(email, password);
            const userWithLoggedIn = { ...user, logged_in: true };
            // Salva l'utente nel localStorage
            localStorage.setItem('user', JSON.stringify(userWithLoggedIn));
            loadUser(userWithLoggedIn);
            return userWithLoggedIn; // Restituisci l'utente
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };
    return { signIn, error };   
}

export default useSignIn;