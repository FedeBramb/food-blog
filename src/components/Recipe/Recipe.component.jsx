import React from "react";

/* Recupera il nome della ricetta dall'url */
import { useParams } from 'react-router-dom';

import { recipeData } from '../../assets/ricette/Recipes';

import CommentsSection from "../CommentsSection/CommentsSection.component";

import { 
  RecipeContainer,
  VideoSectionContainer,
  IngredientsAndDetails,
  IngredientsSection,
  SectionTitle,
  IngredientsContainer,
  DetailsContainer,
  InstructionSection,
} from './Recipe.styles.jsx';




/* Componente che renderizza la ricetta completa, prende come argomento  */
const Recipe = () => {
  const { nameRecipe } = useParams();
  const recipe = recipeData(nameRecipe);

  // Gestione nel caso non esista la ricetta
  if (!recipe) {
    return <div>Ricetta non trovata!</div>;
  }

  return (
    <RecipeContainer>
      <SectionTitle className="title gradient-text">
        {recipe.title}
        <hr className="title-hr" />
      </SectionTitle>
      <VideoSectionContainer>
        <iframe
          src={recipe.video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoSectionContainer>
      <IngredientsAndDetails>
        <IngredientsSection>
          <SectionTitle>Ingredienti</SectionTitle>
          <IngredientsContainer>
            {recipe.ingredients.map((p, index) => (
              <li key={index} className="ingredients-li">{p}</li>
            ))}
          </IngredientsContainer>
        </IngredientsSection>
        <DetailsContainer>
          <p>Difficoltà: {recipe.difficulty}</p>
          <p>Preparazione: {recipe.prepTime}</p>
          <p>Cottura: {recipe.cookTime}</p>
          <p>Tempo totale: {recipe.totalTime}</p>
          <p>Dosi: {recipe.servings}</p>
        </DetailsContainer>
      </IngredientsAndDetails>
      <InstructionSection>
        <SectionTitle>Procedimento</SectionTitle>
        <div className="miniature-rec">
          <img src={recipe.imagesMiniature} alt={recipe.title} />
        </div>
        <div className="instructions">
          {recipe.instructions.map((p, index) => (
            <li key={`li-${index}`}>{p}</li>
          ))}
        </div>
      </InstructionSection>
      <CommentsSection />
    </RecipeContainer>
  );
}

export default Recipe;