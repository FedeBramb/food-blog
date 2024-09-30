import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from '../../components/Loader/Loader.component';

// Caricamento lazy dei componenti
const RecipesBook = lazy(() => import('../../components/RecipesBook/RecipesBook.component'));
const Recipe = lazy(() => import('../../components/Recipe/Recipe.component'));

const Cookbook = () => {
  return (
      <Routes>
        <Route index element={
          <Suspense fallback={<Loader color="#0f324c" size={54} loading={true}/>}>
            <RecipesBook />
          </Suspense>
        } />
        <Route path=':id' element={<Recipe />} />
      </Routes>
  );
}

export default Cookbook;
