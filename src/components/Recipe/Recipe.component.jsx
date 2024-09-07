import React, { useEffect, useState}  from 'react';

import { useParams } from 'react-router-dom';

import { useRecipe } from '../../hooks/useRecipes.js';

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
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const { recipe, loading, error } = useRecipe(id);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error("Errore durante il recupero dei commenti:", err);
      }
    };

    fetchComments();
  }, [id]);

  const addComment = async (newComment) => {
    try {
      const response = await fetch(`http://localhost:3000/recipes/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        setComments(prevComments => [...prevComments, newComment]);
      } else {
        console.error("Errore durante l'aggiunta del commento");
      }
    } catch (err) {
      console.error("Errore durante l'invio del commento:", err);
    }
  };

  const handleDelete = async (recipeID, commentID) => {
    try {
      const response = await fetch(`http://localhost:3000/recipes/${recipeID}/comments`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: commentID,
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
        id: Date.now(),
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Errore: {error}</div>;
  if (!recipe) return <div>Nessuna ricetta trovata</div>;
  
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