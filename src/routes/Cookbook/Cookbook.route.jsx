import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Caricamento lazy dei componenti
const RecipesBook = lazy(() => import('../../components/RecipesBook/RecipesBook.component'));
const Recipe = lazy(() => import('../../components/Recipe/Recipe.component'));

const Cookbook = () => {
  return (
    <Suspense fallback={<div>Caricamento...</div>}>
      <Routes>
        <Route index element={<RecipesBook />} />
        <Route path=':id' element={<Recipe />} />
      </Routes>
    </Suspense>
  );
}

export default Cookbook;
