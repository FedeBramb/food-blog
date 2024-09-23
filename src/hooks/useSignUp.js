import { useState, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { fetchSignUp } from './api.js';


const useSignUp = () => {
    const { loadUser } = useContext(UserContext);
    const [ err, setError ] = useState('');

    const signUp = async (username, email, password) => {
        try {
            await fetchSignUp(username, email, password);
            const userWithLoggedIn = {...user, logged_in: true};
            localStorage.setItem('user', JSON.stringify(userWithLoggedIn));
            loadUser(userWithLoggedIn);
            return userWithLoggedIn;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }
    return { signUp, err};
}

export default useSignUp;

