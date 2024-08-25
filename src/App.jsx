import React, { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.route';
import Home from './routes/Home/Home.route';
import Cookbook from './routes/Cookbook/Cookbook.route';
import GoToTop from './components/GoToTop/GoToTop.component';
import SignUp from './components/SignUp/SignUp.component';
import SignIn from './components/SignIn/SignIn.component';

import './App.css'

function App() {
  const [ user, setUser ] = useState({
    id: '',
    name: '',
    email: '',
    comments: [],
    joined: '',
    logged_in: false
  })

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      comments: data.comments,
      joined: data.joined,
      logged_in: true
    })
  }

  const resetUser = () => {
    setUser({
      id: '',
      name: '',
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


  // * wildcard , : percorso dinamico
  return (
    <>
      <GoToTop />
        <Routes>
          <Route path='/' element={<Navigation user={user} resetUser={resetUser} />} >
            <Route index element={<Home />} />
            <Route path='cookbook/*' element={<Cookbook user={user} />} />
            <Route path='register' element={<SignUp loadUser={loadUser} />} />
            <Route path='signin' element={<SignIn loadUser={loadUser} />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;
