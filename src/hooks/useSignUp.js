import { useState, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { fetchSignUp } from './api.js';

const useSignUp = () => {
    const { loadUser } = useContext(UserContext);
    const [error, setError] = useState('');

    const signUp = async (formSignUp) => {
        const { username, email, password, checkPassword, avatar_url } = formSignUp;
        setError('');

        try {
            const user = await fetchSignUp(username, email, password, checkPassword, avatar_url);
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

