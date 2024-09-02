import React from 'react';

import { recipeImages } from '../../assets/ricette/Recipes.js';

import RecipePreview from '../RecipePreview/RecipePreview.component.jsx';

import { PreviewsContainer, Header } from './RecipesPreviews.styles.jsx';

const RecipesPreviews = () => {
    const data = recipeImages();
  return (
    <PreviewsContainer>
        <Header>
            <h2 className='gradient-text margin'>Ricette</h2>
            <hr></hr>
        </Header>
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
    </PreviewsContainer>
  )
}

export default RecipesPreviews;