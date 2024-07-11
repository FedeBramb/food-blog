import React from "react";

/* Recupera il nome della ricetta dall'url */
import { useParams } from 'react-router-dom';

import { recipeData } from '../../assets/ricette/Recipes';

import './Recipe.styles.css';
import CommentsSection from "../CommentsSection/CommentsSection.component";



/* Componente che renderizza la ricetta completa, prende come argomento  */
const Recipe = () => {
  const { nameRecipe } = useParams();
  const recipe = recipeData(nameRecipe);

  // Gestione nel caso non esista la ricetta
  if (!recipe) {
    return <div>Ricetta non trovata!</div>;
  }

  return (
    <div className="recipe">
      <h1 className="title gradient-text">
        {recipe.title}
        <hr className="title-hr" />
      </h1>
      <div className="video-section">
        <iframe
          src={recipe.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ingredients_and_details">
        <div className="ingredients_section">
          <h1 className="recipe_h1">Ingredienti</h1>
          <div className="ingredients">
            {recipe.ingredients.map((p, index) => (
              <li key={index} className="ingredients-li">{p}</li>
            ))}
          </div>
        </div>
        <div className="details">
          <p>Difficoltà: {recipe.difficulty}</p>
          <p>Preparazione: {recipe.prepTime}</p>
          <p>Cottura: {recipe.cookTime}</p>
          <p>Tempo totale: {recipe.totalTime}</p>
          <p>Dosi: {recipe.servings}</p>
        </div>
      </div>
      <div className="instructions-section">
        <h1 className="recipe_h1">Procedimento</h1>
        <div className="miniature-rec">
          <img src={recipe.imagesMiniature} alt={recipe.title} />
        </div>
        <div className="instructions">
          {recipe.instructions.map((p, index) => (
            <li key={`li-${index}`} className="instructions-p">{p}</li>
          ))}
        </div>
      </div>
      <CommentsSection></CommentsSection>
    </div>
  );
}

export default Recipe;