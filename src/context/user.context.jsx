import { useState, useEffect, createContext } from 'react';

export const UserContext = createContext({
    user: {
        id: '',
        username: '',
        email: '',
        comments: [],
        joined: '',
        logged_in: false,
    },
    loadUser: () => {},  // Funzione vuota di default
    resetUser: () => {}, // Funzione vuota di default
});

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({
        id: '',
        username: '',
        email: '',
        comments: [],
        joined: '',
        logged_in: false
    })
    
    const loadUser = (data) => {
    setUser({
        id: data.id,
        username: data.username,
        email: data.email,
        comments: data.comments,
        joined: data.joined,
        logged_in: true
    })
    }

    const resetUser = () => {
    setUser({
        id: '',
        username: '',
        email: '',
        comments: [],
        joined: '',
        logged_in: false
    });
    }

    // useEffect verrà eseguito quando 'user' viene aggiornato
    useEffect(() => {
        console.log("Dati utente aggiornati:", user);
    }, [user]);

    const value = { user, loadUser, resetUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

