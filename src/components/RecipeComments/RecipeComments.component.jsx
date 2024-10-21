import React, { useContext, useState } from 'react';

import { UserContext } from '../../context/user.context.jsx';
import { useComments } from '../../hooks/useComments.js';

import Loader from '../Loader/Loader.component.jsx';
import StarRating from '../StarRating/StarRating.component.jsx';

import {
    RecipeCommentsContainer,
    AllCommentsTitle,
    CommentContainer,
    Content,
    CommentInput
} from './RecipeComments.styles.jsx';



// Componente per la sezione dei commenti
const RecipeComments = ({ recipe_id }) => {
  const { user } = useContext(UserContext);
  const { comments, commentsLoading, commentsError, addComment, deleteComment } = useComments(recipe_id);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);

  if (commentsLoading) return <Loader/>; // Mostra loading
  if (commentsError) return <div>Errore: {commentsError}</div>; 

  // Handler aggiorna dinamicamente lo stato dell'input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler aggiorna dinamicamente lo stato rating
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handeler invio nuovo commento, resetta input e rating
  const handleSubmit = () => {
    if (inputValue.trim() !== "" && user.logged_in) {
      const newComment = {
        // id commento SERIAL auto incremento nel DB
        user_id: user.id,
        user_name: user.username,
        recipe_id: recipe_id,
        comment_text: inputValue,
        rating: rating,
        create_at: new Date(),
      };
      addComment(newComment, recipe_id);
      setInputValue("");
      setRating(0);
    }
  };
    return (
      <RecipeCommentsContainer>
        <AllCommentsTitle>Commenti:</AllCommentsTitle>
        <hr className='line'></hr>
        {/* Mostra i commenti esistenti o un messaggio se non ci sono commenti */}
        {comments.length > 0 ? (
          <div className='comments-box'>
            {comments.map((comment, index) => (
              <CommentContainer key={index}>
                <Content>
                  <p className='username'>{comment.user_name}:</p>
                  <p className='comment'>{comment.comment_text}</p>
                  <div className="rating">
                      {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
                  </div>
                </Content>
                {/* Mostra il pulsante di eliminazione solo se l'utente è loggato */}
                {user.logged_in && user.id === comment.user_id &&   
                  <button onClick={() => deleteComment(comment.id_comment, recipe_id, user.id)}>
                    <img src='https://icongr.am/fontawesome/trash.svg?size=16&color=223b4e' />
                  </button>
                }
              </CommentContainer>
              ))}
          </div>
        ) : (
          <p>Non ci sono commenti disponibili. Aggiungi il primo commento!</p>
        )}

        {/* Se l'utente è loggato, mostra il modulo di inserimento commento */}
        <div className='comment-input-container'>
          {user.logged_in ? (
            <>
              <label htmlFor="message">Message:</label>
              <CommentInput 
                type="text"
                placeholder="commento..." 
                value={inputValue} 
                onChange={handleInputChange} 
              />
              <StarRating handleRatingChange={handleRatingChange} rating={rating}/>
              <button className="button-input" onClick={handleSubmit}>Invia</button>
            </>
          ) : (
              <p>Effettua il login per accedere a questa sezione.</p>
          )}
        </div>
      </RecipeCommentsContainer>
    );
};

export default RecipeComments;

