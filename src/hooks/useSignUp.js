import { useState, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { fetchSignUp } from './api.js';


const useSignUp = () => {
    const { loadUser } = useContext(UserContext);
    const [ error, setError ] = useState('');

    const signUp = async (formSignUp) => {
        const { username, email, password, checkPassword } = formSignUp;

        if (password !== checkPassword) {
            setError("Le password non coincidono");
            throw error;
        }
    
        // Validazione di base: email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            console.log("Invalid email"); // Log per il debug
            setError("L'email non è valida");
            throw error;
        }

        try {
            const user = await fetchSignUp(username, email, password, checkPassword);
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

