import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating.component';
import {
    CommentsSectionContainer,
    AllCommentsTitle,
    CommentContainer,
    CommentInput
} from './CommentsSections.styles.jsx';


// Componente per la sezione dei commenti
const CommentsSection = ({ comments, handleDelete, user, recipeID, inputValue, handleInputChange, handleSubmit, handleRatingChange }) => {
    
    // Log per il rendering e il numero di commenti
    console.log("Rendering CommentsSection component");
    console.log("Numero di commenti:", comments.length);

    return (
        <CommentsSectionContainer>
            <AllCommentsTitle>Commenti:</AllCommentsTitle>
            <hr className='line'></hr>
            
            {/* Mostra i commenti esistenti o un messaggio se non ci sono commenti */}
            {comments.length > 0 ? (
                <div className='comments-box'>
                    {comments.map((comment, index) => (
                        <CommentContainer key={index}>
                            <p className='username'>{comment.userName}:</p>
                            <p className='comment'>{comment.content}</p>
                            <div className="rating">
                                {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
                            </div>
                            {/* Mostra il pulsante di eliminazione solo se l'utente è loggato */}
                            {user.logged_in && user.id === comment.userId &&   
                                <button onClick={() => handleDelete(recipeID, comment.id)}>X</button>
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
                        <StarRating handleRatingChange={handleRatingChange} />
                        <button className="button-input" onClick={handleSubmit}>Invia</button>
                    </>
                ) : (
                    <p>Effettua il login per accedere a questa sezione.</p>
                )}
            </div>
        </CommentsSectionContainer>
    );
};

export default CommentsSection;

