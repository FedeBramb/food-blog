import { useState, useContext } from 'react';
import { UserContext } from '../context/user.context.jsx';
import { fetchSignIn } from "./api.js";

const useSignIn = () => {
    const { loadUser } = useContext(UserContext);
    const [error, setError] = useState('');

    const signIn = async (formSignIn) => {
        console.log('signIn function called with:', formSignIn); // Aggiungi questo
        const { email, password } = formSignIn;
        setError('');

        try {
            const user = await fetchSignIn(email, password);
            console.log('User received:', user); // Aggiungi questo
            const userWithLoggedIn = { ...user, logged_in: true };
            localStorage.setItem('user', JSON.stringify(userWithLoggedIn));
            loadUser(userWithLoggedIn);
            return userWithLoggedIn;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return { signIn, error };
}


export default useSignIn;