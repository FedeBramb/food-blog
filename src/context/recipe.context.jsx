import { createContext, useState } from 'react';
import { useRecipes, useRecipe } from '../hooks/useRecipes';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const { recipes, loading, error } = useRecipes(); // Usa l'hook per tutte le ricette
    const [recipeId, setRecipeId] = useState(null); // ID della ricetta selezionata

    // Usa l'hook per la ricetta singola, passando l'ID della ricetta selezionata
    const { recipe, loading: loadingRecipe, error: errorRecipe } = useRecipe(recipeId);

    const value = {
        recipes,
        loading,
        error,
        recipe,
        loadingRecipe,
        errorRecipe,
        setRecipeId, // Funzione per impostare l'ID della ricetta selezionata
    };

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};
