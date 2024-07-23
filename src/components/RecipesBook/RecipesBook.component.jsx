import React from 'react';

import RecipeCard from '../../components/RecipeCard/RecipeCard.component';

import { recipeImages } from '../../assets/ricette/Recipes.js';

import { RecipeBookContainer } from './RecipesBook.styles.jsx';

const RecipeBook = () => {
    const recipes = recipeImages();
    
  return (
    <RecipeBookContainer>
        {recipes.map(({ title, imagesCookBook }, index) => {
            return (
                <RecipeCard key={index} title={title} image={imagesCookBook} />
            );
        })}
    </RecipeBookContainer>
  )
}

export default RecipeBook;