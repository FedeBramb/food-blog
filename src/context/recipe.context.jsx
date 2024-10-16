import { createContext, useState, } from 'react';
import { useRecipes } from '../hooks/useRecipes';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const { recipes, loading, error } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [loadingRecipe, setLoadingRecipe] = useState(false);
  const [errorRecipe, setErrorRecipe] = useState(null);

  const getRecipeById = (recipeId) => {
    setLoadingRecipe(true);
    const foundRecipe = recipes.find((r) => r.recipe_id === recipeId);
    if (foundRecipe) {
      setRecipe(foundRecipe);
      setErrorRecipe(null);
    } else {
      setRecipe(null);
      setErrorRecipe('Ricetta non trovata');
    }
    setLoadingRecipe(false);
  };

  const value = {
    recipes,
    loading,
    error,
    recipe,
    loadingRecipe,
    errorRecipe,
    getRecipeById,
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
