import React from 'react';

import { useRecipes } from '../../hooks/useRecipes.js';

import RecipeCard from '../../components/RecipeCard/RecipeCard.component';

import { RecipeBookContainer } from './RecipesBook.styles.jsx';

const RecipeBook = () => {
  const { recipes, loading, error } = useRecipes();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    
  return (
    <RecipeBookContainer>
        {recipes.map(({ id, title, images_cookbook }) => {
          {console.log(recipes)}
            return (
                <RecipeCard key={id} title={title} image={images_cookbook} id={id}/>
            );
        })}
    </RecipeBookContainer>
  )
}

export default RecipeBook;