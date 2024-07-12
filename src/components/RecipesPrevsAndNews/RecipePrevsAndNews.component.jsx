import React from 'react';

import RecipesPreviews from '../RecipesPreviews/RecipesPreviews.component';
import News from '../News/News.component';

import { PrevAndNewsContainer } from './RecipePrevsAndNews.styles.jsx';


const RecipePrevsAndNews = () => {
  return (
    <PrevAndNewsContainer>
      <RecipesPreviews></RecipesPreviews>
      <News></News>
    </PrevAndNewsContainer>
  )
}

export default RecipePrevsAndNews;