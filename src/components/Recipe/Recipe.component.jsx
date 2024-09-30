import React, { useEffect, useState, useContext}  from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../context/user.context';
import { useRecipe } from '../../hooks/useRecipes.js';
import { useComments } from '../../hooks/useComments.js';

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
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { recipe, loading, error } = useRecipe(id);
  const { comments, loading: commentsLoading, error: commentsError, setComments } = useComments(id);
  
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);
  
  

  const addComment = async (newComment) => {
    try {
      const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const updatedComments = await response.json(); // Ottieni tutti i commenti
        setComments(updatedComments); // Aggiorna lo stato dei commenti
      } else {
        console.error("Errore durante l'aggiunta del commento");
      }
    } catch (err) {
      console.error("Errore durante l'invio del commento:", err);
    }
  };


  const handleDelete = async (recipeID, commentID) => {
    try {
        const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${recipeID}/comments/${commentID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user.id
            }),
        });

        if (response.ok) {
            const updatedComments = await response.json();
            console.log(updatedComments);
            setComments(updatedComments);
        } else {
            console.error("Errore nella cancellazione del commento");
        }
    } catch (error) {
        console.error('Errore nella richiesta di cancellazione:', error);
    }
};


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "" && user.logged_in) {
      console.log(user);
      const newComment = {
        // id commento SERIAL auto incremento nel DB
        user_id: user.id,
        user_name: user.username,
        recipe_id: id,
        comment_text: inputValue,
        rating: rating,
        create_at: new Date(),
      };
      addComment(newComment);
      setInputValue("");
      setRating(0);
    }
  };

  if (loading || commentsLoading) return <div>Loading...</div>; // Mostra loading per entrambi i caricamenti
  if (error || commentsError) return <div>Errore: {error || commentsError}</div>; // Mostra errore per entrambi
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
        comments={comments}
        addComment={addComment}
        handleDelete={handleDelete}
        recipeID={id}
        inputValue={inputValue}
        rating={rating}
        handleInputChange={handleInputChange}
        handleRatingChange={handleRatingChange}
        handleSubmit={handleSubmit}
      />
    </RecipeContainer>
  );
}

export default Recipe;