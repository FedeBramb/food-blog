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

const Comment = ({ isFullWidth, comment }) => {
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
        <Content>{comment.comment_text}</Content>
    </Container>
  )
}

export default Comment;