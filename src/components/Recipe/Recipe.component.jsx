import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeContext } from '../../context/recipe.context.jsx';

import Loader from '../Loader/Loader.component.jsx';
import CommentsSection from '../CommentsSection/CommentsSection.component';

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
  const { recipe, loading, error, setRecipeId } = useContext(RecipeContext); // Usa il contesto

  useEffect(() => {
    console.log(recipe);
    // Imposta l'ID della ricetta selezionata
    setRecipeId(recipe_id);
  }, [recipe_id, setRecipeId]);

  if (loading) return <Loader/>; // Mostra loading 
  if (error) return <div>Errore: {error}</div>; // Mostra errore 
  if (!recipe) return <div>Nessuna ricetta trovata</div>;
  
  return (
    <RecipeContainer>
      <SectionTitle className="gradient-text">
        {recipe.title}
        <hr className="hr-blue" />
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
          <img src={recipe.image_carousel} alt={recipe.title} />
        <div className="instructions">
          {recipe.instructions.map((p, index) => (
            <li key={`li-${index}`}>{p}</li>
          ))}
        </div>
      </InstructionSection>
      <CommentsSection
        recipe_id={recipe_id}
      />
    </RecipeContainer>
  );
}

export default Recipe;