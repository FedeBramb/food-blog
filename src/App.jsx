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
  // * wildcard , : percorso dinamico
  return (
    <>
      <GoToTop />
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='recipes/*' element={<Cookbook />} />
            <Route path='register' element={<Register />} />
            <Route path='signin' element={<Signin />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;