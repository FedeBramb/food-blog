import React from 'react';

import { Routes, Route } from 'react-router-dom';

import RecipesBook from '../../components/RecipesBook/RecipesBook.component.jsx';
import Recipe from '../../components/Recipe/Recipe.component.jsx';

const Cookbook = () => {
  return (
    <Routes>
      <Route index element={<RecipesBook />} ></Route>
      <Route path=':id' element={<Recipe />} />
    </Routes>
  )
}

export default Cookbook;