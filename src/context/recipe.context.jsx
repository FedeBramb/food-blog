import { createContext, useState } from 'react';
import { useRecipes, useRecipe } from '../hooks/useRecipes';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const { recipes, loading, error } = useRecipes(); // Usa l'hook per tutte le ricette

    const value = {
        recipes,
        loading,
        error,
    };

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};
