import React from 'react';
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
    Rating,
    Content,
} from './Comment.styles';

const Comment = ({ comment }) => {
  return (
    <Container className="commento">
        <HeaderComment className="commento-header">
            <Avatar src={comment.avatar_url} alt={`Avatar di ${comment.user_name}`} className="avatar" />
            <Info className="commento-info">
            <Autore className="autore">{comment.user_name}</Autore>
            <Recipe className="ricetta">su  
                <Link to={`/recipes/${comment.recipe_id}`}>
                <RecipeTitle className='title-ricetta'> {comment.title}</RecipeTitle>
                </Link>
            </Recipe>
            </Info>
            <DateAndRating>
            <Date className="data">
                {formatDateString(comment.create_at)}
            </Date>
            <Rating>
                {"★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)}
            </Rating>
            </DateAndRating>
        </HeaderComment>
        <Content className="contenuto">{comment.comment_text}</Content>
    </Container>
  )
}

export default Comment;