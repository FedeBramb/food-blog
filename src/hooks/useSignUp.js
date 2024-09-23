import { useState, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { fetchSignUp } from './api.js';


const useSignUp = () => {
    const { loadUser } = useContext(UserContext);
    const [ error, setError ] = useState('');

    const signUp = async (formSignUp) => {
        const { username, email, password } = formSignUp;

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
            const user = await fetchSignUp(username, email, password);
            const userWithLoggedIn = {...user, logged_in: true};
            localStorage.setItem('user', JSON.stringify(userWithLoggedIn));
            loadUser(userWithLoggedIn);
            return userWithLoggedIn;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }
    return { signUp, error};
}

export default useSignUp;

