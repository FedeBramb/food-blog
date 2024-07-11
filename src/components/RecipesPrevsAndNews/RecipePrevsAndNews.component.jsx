import React from 'react';

import RecipesPreviews from '../RecipesPreviews/RecipesPreviews.component';
import News from '../News/News.component';

import './RecipePrevsAndNews.styles.css';


const RecipePrevsAndNews = () => {
  return (
    <div className='previews-news-container'>
        <RecipesPreviews></RecipesPreviews>
        <News></News>
    </div>
  )
}

export default RecipePrevsAndNews;