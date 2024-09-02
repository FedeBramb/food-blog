import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { recipeData } from '../../assets/ricette/Recipes';

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

const Recipe = ({ user }) => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);

  const recipe = recipeData(id);

  useEffect(() => {
    console.log("Fetching comments...");
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cookbook/${id}/comments`);
        const recipeComments = await response.json();
        setComments(recipeComments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [id]);

  const addComment = async (newComment) => {
    try {
      const response = await fetch(`http://localhost:3000/cookbook/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const updatedComments = await response.json();
        setComments(updatedComments);
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
        const updatedComments = await response.json();
        setComments(updatedComments);
        console.log("Commento cancellato con successo");
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
      const newComment = {
        id: new Date().getTime(),
        userId: user.id,
        userName: user.name,
        content: inputValue,
        rating: rating,
        timestamp: new Date(),
      };
      addComment(newComment);
      setInputValue("");
      setRating(0);
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
          <img src={recipe.imageCarousel} alt={recipe.title} />
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