import React, { useContext } from 'react';

import { RecipeContext } from '../../context/recipe.context.jsx';

import Loader from '../Loader/Loader.component.jsx';
import RecipeCard from '../../components/RecipeCard/RecipeCard.component';

import { RecipeBookContainer } from './RecipesBook.styles.jsx';

const RecipeBook = () => {
  const { recipes, loading, error } = useContext(RecipeContext);

  if (loading) return <Loader/>;
  if (error) return <div>Error: {error}</div>;
    
  return (
    <RecipeBookContainer>
        {recipes.map(({ id, title, images_cookbook }) => {
            return (
                <RecipeCard key={id} title={title} image={images_cookbook} id={id}/>
            );
        })}
    </RecipeBookContainer>
  )
}

export default RecipeBook;