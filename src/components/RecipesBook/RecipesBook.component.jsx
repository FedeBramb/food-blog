import React from 'react';

import RecipeCard from '../../components/RecipeCard/RecipeCard.component';

import { recipeImages } from '../../assets/ricette/Recipes.js';

import { RecipeBookContainer } from './RecipesBook.styles.jsx';

const RecipeBook = () => {
    const recipes = recipeImages();
  return (
    <RecipeBookContainer>
        {recipes.map(({ id, title, imagesCookBook }) => {
            return (
                <RecipeCard key={id} title={title} image={imagesCookBook} id={id}/>
            );
        })}
    </RecipeBookContainer>
  )
}

export default RecipeBook;