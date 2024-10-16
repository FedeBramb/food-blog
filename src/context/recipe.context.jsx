import { createContext, useState } from 'react';
import { useRecipes, fetchRecipeById } from '../hooks/useRecipes';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const { recipes, loading, error } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [loadingRecipe, setLoadingRecipe] = useState(true);
  const [errorRecipe, setErrorRecipe] = useState(null);

  const getRecipeById = async (recipeId) => {
    setLoadingRecipe(true);
    try {
      const data = await fetchRecipeById(recipeId);
      setRecipe(data);
      setErrorRecipe(null);
    } catch (error) {
      setErrorRecipe(error.message);
    } finally {
      setLoadingRecipe(false);
    }
  };

  const value = {
    recipes,
    loading,
    error,
    recipe,
    loadingRecipe,
    errorRecipe,
    getRecipeById, // Funzione per ottenere una ricetta tramite ID
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
