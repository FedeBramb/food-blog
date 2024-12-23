import React, { useState, useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../context/user.context.jsx';
import { CommentsContext } from '../../context/comments.context.jsx';

import Loader from '../Loader/Loader.component.jsx';
import StarRating from '../StarRating/StarRating.component.jsx';
import Comment from '../Comment/Comment.component.jsx';

import {
    RecipeCommentsContainer,
    AllCommentsTitle,
    CommentBox,
    CommentContainer,
    CommentInput
} from './RecipeComments.styles.jsx';

/* Container per commenti singola ricetta
** Utilizza contesto user e comments
** Render con due ternary operator in base se utente è loggato e
** se ci sono già commenti nella ricetta.
*/

const RecipeComments = React.memo(({ recipe_id }) => {
  const { user } = useContext(UserContext);
  const { 
    comments, 
    commentsLoading, 
    commentsError, 
    addComment, 
    deleteComment, 
    setRecipeId 
  } = useContext(CommentsContext);

  // Utilizziamo ref invece di state per evitare render a ogni carattere
  const inputRef = useRef(null); // Ref per l'input
  const [rating, setRating] = useState(0);

  // Setta id della ricetta 
  useEffect(() => {
    if (recipe_id) {
      setRecipeId(recipe_id); 
    }
  }, [recipe_id, setRecipeId]);

  if (commentsLoading) return <Loader />;
  if (commentsError) return <div>Errore: {commentsError}</div>;

  // Handler aggiorna dinamicamente lo stato rating
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handler invio nuovo commento, resetta input e rating
  // se l'utente è loggato.
  const handleSubmit = () => {
    const inputValue = inputRef.current.value;

    if (inputValue.trim() !== "" && user.logged_in) {
      const newComment = {
        user_id: user.id,
        user_name: user.username,
        recipe_id: recipe_id,
        comment_text: inputValue,
        rating: rating,
        create_at: new Date(),
      };
      addComment(newComment, recipe_id);
      inputRef.current.value = ""; // Resetta il valore dell'input
      setRating(0); // Resetta il rating
    }
  };
  
  return (
    <RecipeCommentsContainer>
      <AllCommentsTitle>Commenti:</AllCommentsTitle>
      <hr className='line' />
      {comments.length > 0 ? (
        <CommentBox>
          {comments.map((comment, index) => (
            <CommentContainer key={index}>
              <Comment 
                comment={comment} 
                user={user} 
                deleteComment={deleteComment} 
                recipe_id={recipe_id} 
              />
            </CommentContainer>
          ))}
        </CommentBox>
      ) : (
        <p>Non ci sono commenti disponibili. Aggiungi il primo commento!</p>
      )}

      <div className='comment-input-container'>
        {user.logged_in ? (
          <>
            <label htmlFor="message">Message:</label>
            <CommentInput
              placeholder="commento..." 
              ref={inputRef} // Usa ref per ottenere il valore
            />
            <StarRating handleRatingChange={handleRatingChange} rating={rating}/>
            <button className="button-input" onClick={handleSubmit}>
              Invia
            </button>
          </>
        ) : (
          <p>Effettua il login per accedere a questa sezione.</p>
        )}
      </div>
    </RecipeCommentsContainer>
  );
});

export default RecipeComments;
