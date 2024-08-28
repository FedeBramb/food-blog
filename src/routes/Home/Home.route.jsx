import React from 'react';

import Carousel from '../../components/Carousel/Carousel.component';
import RecipePrevsAndNews from '../../components/RecipesPrevsAndNews/RecipePrevsAndNews.component';

const Home = () => {
  return (
    <div style={{marginBottom: "20px", height: "100%"}}>
      <Carousel></Carousel>
      <RecipePrevsAndNews></RecipePrevsAndNews>
    </div>
  )
}

export default Home