import React from 'react';

import { useRecipes } from '../../hooks/useRecipes.js';

import RecipePreview from './RecipePreview/RecipePreview.component.jsx';

import { PreviewsContainer, Header } from './RecipesPreviewsContainer.styles.jsx';

const RecipesPreviewsContainer = () => {
    const { recipes } = useRecipes();
  return (
    <PreviewsContainer>
        <Header>
            <h2 className='gradient-text margin'>Ricette</h2>
            <hr className='hr-blue' />
        </Header>
        {recipes.map((recipe, index) => {  
            return  (
                <div key={index} className='div-hr'>
                    <RecipePreview recipe={recipe} />
                    {index < 8 && <hr></hr>}
                </div>
            )      
        })}
    </PreviewsContainer>
  )
}

export default RecipesPreviewsContainer;