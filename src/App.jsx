import React, { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.route';
import Home from './routes/Home/Home.route';
import Cookbook from './routes/Cookbook/Cookbook.route';
import GoToTop from './components/GoToTop/GoToTop.component';
import Signin from './routes/Signin/Signin.route';
import Register from './routes/Register/Register.route';

import './App.css'

function App() {
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


  // * wildcard , : percorso dinamico
  return (
    <>
      <GoToTop />
        <Routes>
          <Route path='/' element={<Navigation user={user} resetUser={resetUser} />} >
            <Route index element={<Home />} />
            <Route path='recipes/*' element={<Cookbook user={user} />} />
            <Route path='register' element={<Register loadUser={loadUser} />} />
            <Route path='signin' element={<Signin loadUser={loadUser} />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;