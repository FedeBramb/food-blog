// src/hooks/useRecipes.js
import { useState, useEffect } from 'react';
import { fetchRecipes, fetchRecipeById } from './api.js';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return { recipes, loading, error };
};

const useRecipe = (recipe_id) => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!recipe_id) {
    return; // Non fare nulla se l'ID non è valido
  }

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await fetchRecipeById(recipe_id);
        setRecipe(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipe(recipe_id);
  }, [recipe_id]);


  return { recipe, loading, error };
};

export { useRecipes, useRecipe };


