import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    HeaderComment,
    Avatar,
    Info,
    Autore,
    Recipe,
    RecipeTitle,
    DateAndRating,
    Date,
    Rating,
    BodyComment,
    Content,
} from './Comment.styles';

const formatDateString = (dateString) => {

    const cleanDateString = dateString.replace('T', ' ').replace('Z', '');
    
    const year = cleanDateString.slice(0, 4);
    const month = cleanDateString.slice(5, 7);
    const day = cleanDateString.slice(8, 10);
    const hour = cleanDateString.slice(11, 13);
    const minute = cleanDateString.slice(14, 16);
    
    // Ritorna la stringa formattata
    return `${day}-${month}-${year} ${hour}:${minute}`;
}

const Comment = ({ isFullWidth, comment, user, deleteComment, recipe_id }) => {
    useEffect(() => {
    console.log('Rendering comment:', comment);
    }, [comment]);

  return (
    <Container className={isFullWidth ? 'full-width' : ''}>
        <HeaderComment >
            <Avatar src={comment.avatar_url} alt={`Avatar di ${comment.user_name}`} />
            <Info>
            <Autore>{comment.user_name}</Autore>
            <Recipe>su  
                <Link to={`/recipes/${comment.recipe_id}`}>
                    <RecipeTitle > {comment.title}</RecipeTitle>
                </Link>
            </Recipe>
            </Info>
            <DateAndRating>
                <Date>
                    {formatDateString(comment.create_at)}
                </Date>
                <Rating>
                    {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
                </Rating>
            </DateAndRating>
        </HeaderComment>
        <BodyComment>
            <Content>{comment.comment_text}</Content>
            {/* Mostra il pulsante di eliminazione solo se l'utente viene passato come props
            * e se l'utente è loggato  */}
            {user && user.logged_in && user.id === comment.user_id && (
                <button 
                    onClick={() => deleteComment(comment.id_comment, recipe_id, user.id)}
                >
                <img 
                    src='https://icongr.am/fontawesome/trash.svg?size=16&color=223b4e' 
                    alt='Delete comment' 
                />
                </button>
            )}
        </BodyComment>
    </Container>
  )
}

export default Comment;