import { createContext, useState, } from 'react';
import { useRecipes } from '../hooks/useRecipes';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const { recipes, loading, error } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [loadingRecipe, setLoadingRecipe] = useState(false);
  const [errorRecipe, setErrorRecipe] = useState(null);

  // Otteniamo la ricette per ID.
  const getRecipeById = (recipeId) => {
    setLoadingRecipe(true);
    const foundRecipe = recipes.find((r) => r.id === parseInt(recipeId));
    console.log('Ricette:', recipes);
    console.log('Ricetta trovata:', foundRecipe);
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
