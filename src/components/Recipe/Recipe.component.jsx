import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeContext } from '../../context/recipe.context.jsx';
import Loader from '../Loader/Loader.component.jsx';
import RecipeComments from '../RecipeComments/RecipeComments.component';

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

const Recipe = () => {
  const { recipe_id } = useParams();
  const { recipe, loadingRecipe, errorRecipe, getRecipeById } = useContext(RecipeContext);
  const {  
    difficulty, 
    prep_time, 
    total_time, 
    cook_time, 
    servings, 
    title,
    video
  } = recipe || {};
  
  useEffect(() => {
    if (recipe_id) {
      getRecipeById(recipe_id);
    }
  }, [recipe_id, getRecipeById]);

  if (loadingRecipe) return <Loader />; // Mostra loading
  if (errorRecipe) return <div>Errore: {errorRecipe}</div>; // Mostra errore
  if (!recipe) return <div>Nessuna ricetta trovata</div>; // Messaggio di fallback
  
  return (
    <RecipeContainer>
      <SectionTitle className="gradient-text">
        {title}
        <hr className="hr-blue" />
      </SectionTitle>
      <VideoSectionContainer>
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
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
          <p>Difficoltà: {difficulty}</p>
          <p>Preparazione: {prep_time}</p>
          <p>Cottura: {cook_time}</p>
          <p>Tempo totale: {total_time}</p>
          <p>Dosi: {servings}</p>
        </DetailsContainer>
      </IngredientsAndDetails>
      <InstructionSection>
        <SectionTitle>Procedimento</SectionTitle>
          <img src={image_carousel} alt={title} />
        <div className="instructions">
          {recipe.instructions.map((p, index) => (
            <li key={`li-${index}`}>{p}</li>
          ))}
        </div>
      </InstructionSection>
      <RecipeComments
        recipe_id={recipe_id}
      />
    </RecipeContainer>
  );
}

export default Recipe;