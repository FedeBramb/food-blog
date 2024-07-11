import React from 'react';

import RecipeCard from '../../components/RecipeCard/RecipeCard.component';

import { recipeImages } from '../../assets/ricette/Recipes.js';

import './RecipesBook.styles.css';

const Cookbook = () => {
    const recipes = recipeImages();
  return (
    <div className='cookbook-container'>
        {recipes.map(({ title, imagesCookBook }, index) => {
            return (
                <RecipeCard key={index} title={title} image={imagesCookBook} />
            );
        })}
    </div>
  )
}

export default Cookbook;