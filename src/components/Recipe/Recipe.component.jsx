import React, { useState, useEffect, useReducer } from "react";

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


/* Componente che renderizza la ricetta completa, prende come argomento l'user */
const Recipe = ({ user }) => {
  const { idRecipe } = useParams();
  const [ comments, setComments ] = useState([]);

  const recipe = recipeData(idRecipe);

  useEffect(() => {
    console.log("Fetching comments...");
    const fetchComments = async () => {
        try {
            const response = await fetch(`http://localhost:3000/cookbook/${idRecipe}/comments`);
            const recipeComments = await response.json();
            setComments(recipeComments);
        } catch (error) {
            console.log(error);
        }
    };
    fetchComments();
  }, [idRecipe]);

  
  // Funzione per aggiungere un commento e inviarlo al back end 
  const addComment = async (newComment) => {
    try {
      const response = await fetch(`http://localhost:3000/cookbook/${idRecipe}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
  
      if (response.ok) {
        const updatedComments = await response.json();
        setComments(updatedComments); // Aggiorna i commenti con quelli aggiornati dal backend
        console.log(updatedComments);
        console.log(comments);
        
      }
    } catch (err) {
      console.error("Errore durante l'invio del commento:", err);
    }
  };


  const handleDelete = async (recipeID, commentID) => {
    try {
      const response = await fetch(`http://localhost:3000/cookbook/${recipeID}/comments`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentID: commentID,  
          userID: user.id        
        }),
      });
  
      if (response.ok) {
        const updatedComments = await response.json();  // Ottieni i commenti aggiornati
        setComments(updatedComments);  // Aggiorna lo stato dei commenti
        console.log("Commento cancellato con successo");
      } else {
        console.error("Errore nella cancellazione del commento");
      }
    } catch (error) {
      console.error('Errore nella richiesta di cancellazione:', error);
    }
  };
  
  

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
      <CommentsSection
        comments={comments}
        addComment={addComment}
        handleDelete={handleDelete}
        user={user}
        recipeID={idRecipe}  // Passa recipeID qui
      />

    </RecipeContainer>
  );
}

export default Recipe;