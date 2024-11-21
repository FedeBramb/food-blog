import React, { useContext, useState } from 'react';
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

/* Componente per la sezione dei commenti di ogni ricetta 
** Recupera i dati dell'utente dal rispettivo contesto,
** Recupera i commenti relativi alla ricetta corrente tramite hook e id ricetta,
** Gestisce l'aggiunta di un nuovo commento con il rispettivo rating
*/
const RecipeComments = ({ recipe_id }) => {
  const { user } = useContext(UserContext);
  const { 
    comments, 
    commentsLoading, 
    commentsError, 
    addComment, 
    deleteComment, 
    setRecipeId 
  } = useContext(CommentsContext);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (recipe_id) {
      setRecipeId(recipe_id); // Update the recipe_id in the context
    }
  }, [recipe_id, setRecipeId]);

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
        <hr className='line' />
        {/* Mostra i commenti esistenti o un messaggio se non ci sono commenti */}
        {comments.length > 0 ? (
          <CommentBox>
            {comments.map((comment, index) => (
              <CommentContainer key={index}>
                <Comment comment={comment} user={user} deleteComment={deleteComment} recipe_id={recipe_id} />
              </CommentContainer>
            ))}
          </CommentBox>
        ) : (
          <p>Non ci sono commenti disponibili. Aggiungi il primo commento!</p>
        )}

        {/* Se l'utente è loggato, mostra il modulo di inserimento commento */}
        <div className='comment-input-container'>
          {user.logged_in ? (
            <>
              <label htmlFor="message">Message:</label>
              <CommentInput
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

