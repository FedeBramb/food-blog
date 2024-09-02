// Recipes.js
import cheesecake from './cheesecake.js';
import donuts from './donuts.js';
import falafel from './falafel.js';
import hummus from './hummus.js';
import insalataGreca from './insalata_greca.js';
import macarons from './macarons.js';
import orata from './orata.js';
import tomohawk from './tomahawk.js';
import pancake from './pancake.js';

const recipes = [
  macarons,
  hummus,
  tomohawk,
  cheesecake,
  donuts,
  falafel,
  insalataGreca,
  orata,
  pancake,
];

export const recipeImages = (id) => {
  if (id) {
    const recipeData = recipes.find(recipe => recipe.id === id);
    if (recipeData) {
      return {
        id: recipeData.id,
        title: recipeData.title,
        imageCarousel: recipeData.imageCarousel,
        imagesMiniature: recipeData.imagesMiniature,
        imagesCookBook: recipeData.imagesCookBook,
        imagesSquare: recipeData.imagesSquare,
        description: recipeData.description,
      };
    }
  } else {
        return recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        imageCarousel: recipe.imageCarousel,
        imagesMiniature: recipe.imagesMiniature,
        imagesCookBook: recipe.imagesCookBook,
        imagesSquare: recipe.imagesSquare,
        description: recipe.description,
        }));
  }

  return null;
};


export const recipeData = (id) => {
  if (id) {
    const recipeData = recipes.find(recipe => recipe.id === id);
    if (recipeData) {
      return {
        id: recipeData.id,
        title: recipeData.title,
        video: recipeData.video,
        ingredients: recipeData.ingredients,
        details: recipeData.details,
        instructions: recipeData.instructions,
        prepTime: recipeData.prepTime,
        cookTime: recipeData.cookTime,
        totalTime: recipeData.totalTime,
        servings: recipeData.servings,
        difficulty: recipeData.difficulty,
        imageCarousel: recipeData.imageCarousel,
      };
    }
  } else {
    return recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      video: recipe.video,
      ingredients: recipe.ingredients,
      details: recipe.details,
      imagesMiniature: recipe.imagesMiniature,
      instructions: recipe.instructions
      }));
  }
};






/* ricette.map((ricetta) => {
            const { imageCarousel, imagesMiniature, imagesCookBook } = ricetta;
            
        }) */