import React from 'react';

import { recipeImages } from '../../assets/ricette/Recipes.js';

import RecipePreview from '../RecipePreview/RecipePreview.component.jsx';

import './RecipesPreviews.styles.css';

const RecipesPreviews = () => {
    const data = recipeImages();
  return (
    <div className='recipes-previews-container'>
        <div className='header'>
            <h2 className='gradient-text margin'>Ricette</h2>
            <hr></hr>
        </div>
        {data.map((recipe, index) => {
            if (index <= 4) {
                return  (
                    <div key={index} className='div-hr'>
                        <RecipePreview recipe={recipe} />
                        {index < 4 && <hr></hr>}
                    </div>
                )
            }
            return null;
        })}
        
    </div>
  )
}

export default RecipesPreviews;