import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader.component';

import GoToTop from './components/GoToTop/GoToTop.component';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.component';
import Navigation from './routes/Navigation/Navigation.route';
import Home from './routes/Home/Home.route';

// Caricamento dei componenti Lazy
const Cookbook = lazy(() => import('./routes/Cookbook/Cookbook.route'));
const Signin = lazy(() => import('./routes/Signin/Signin.route'));
const Register = lazy(() => import('./routes/Register/Register.route'));

import './App.css'

function App() {
  // * wildcard , : percorso dinamico
  return (
    <>
      <GoToTop />
      <ScrollToTopButton />
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='recipes/*' element={
              <Suspense fallback={<Loader color="#0f324c" size={500} loading={true}/>}>
                <Cookbook />
              </Suspense>
            } />
            <Route path='register' element={
              <Suspense fallback={<Loader color="#0f324c" size={500} loading={true}/>}>
                <Register />
              </Suspense>} 
            />
            <Route path='signin' element={
              <Suspense fallback={<Loader color="#0f324c" size={500} loading={true}/>}>
                <Signin />
              </Suspense>} 
            />
          </Route>
        </Routes>
    </>
  )
}

export default App;