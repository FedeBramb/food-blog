import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating.component';
import {
    CommentsSectionContainer,
    AllCommentsTitle,
    CommentContainer,
    CommentInput
} from './CommentsSections.styles.jsx';

const CommentsSection = ({ comments, addComment, handleDelete, user, recipeID }) => {
    const [inputValue, setInputValue] = useState("");
    const [rating, setRating] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== "" && user.logged_in) {
            const newComment = {
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

    
    console.log("Rendering CommentsSection component");
    console.log("Numero di commenti:", comments.length);

    return (
        <CommentsSectionContainer>
            <AllCommentsTitle>Commenti:</AllCommentsTitle>
            <hr className='line'></hr>
            
            {comments.length > 0 ? (
                <div className='comments-box'>
                    {comments.map((comment, index) => (
                        <CommentContainer key={index}>
                            <p className='username'>{comment.userName}:</p>
                            <p className='comment'>{comment.content}</p>
                            <div className="rating">
                                {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
                            </div>
                            {user.logged_in &&    
                                <button onClick={() => handleDelete(recipeID, comment.id)}>X</button>
                            }
                        </CommentContainer>
                    ))}
                </div>
            ) : (
                <p>Non ci sono commenti disponibili. Aggiungi il primo commento!</p>
            )}

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
                        <StarRating onRatingChange={handleRatingChange} />
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

