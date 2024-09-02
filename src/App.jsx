import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.route';
import Home from './routes/Home/Home.route';
import Cookbook from './routes/Cookbook/Cookbook.route';
import GoToTop from './components/GoToTop/GoToTop.component';

import './App.css'

function App() {
  // * wildcard , : percorso dinamico
  return (
    <>
      <GoToTop />
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='cookbook/*' element={<Cookbook />} />
            <Route path='register' element={<Cookbook />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
