import { useState, useEffect, createContext, useMemo, useCallback } from 'react';

export const UserContext = createContext({
    user: {
        id: '',
        username: '',
        email: '',
        comments: [],
        joined: '',
        logged_in: false,
    },
    loadUser: () => {},
    resetUser: () => {},
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
        comments: [],
        joined: '',
        logged_in: false,
    });

    const loadUser = useCallback((data) => {
        setUser({
            id: data.id,
            username: data.username,
            email: data.email,
            comments: data.comments,
            joined: data.joined,
            logged_in: true,
        });
        localStorage.setItem('user', JSON.stringify(data)); // Salva l'utente nel localStorage
    }, []);

    const resetUser = useCallback(() => {
        setUser({
            id: '',
            username: '',
            email: '',
            comments: [],
            joined: '',
            logged_in: false,
        });
        localStorage.removeItem('user');
    }, []);

    useEffect(() => {
        console.log("Dati utente aggiornati:", user);
    }, [user]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.logged_in) {
            loadUser(storedUser);
        }
    }, [loadUser]);

    const value = useMemo(() => ({ user, loadUser, resetUser }), [user, loadUser, resetUser]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
