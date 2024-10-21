import React from 'react';
import { useComments } from '../../hooks/useComments';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader.component';
import {
  Container,
  Title,
  List,
  Comment,
  HeaderComment,
  Avatar,
  Info,
  Autore,
  Recipe,
  RecipeTitle,
  Date,
  Content,
} from './LastComments.styles.jsx';

const LastComments = () => {
  const { allComments, allCommentsLoading, allCommentsErroraddComment} = useComments();

  if (allCommentsLoading) return <Loader/>; // Mostra loading
  if (allCommentsErroraddComment) return <div>Errore: {allCommentsErroraddComment}</div>;

  // Formattiamo la data
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Gennaio è 0!
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }
  

  return (
    <Container className="ultimi-commenti">
      <Title className='gradient-text'>Ultimi Commenti</Title>
      <hr className='hr-blue' />
      <List className="commenti-lista">
        {allComments.map((comment) => (
          <Comment key={comment.id_comment} className="commento">
            <HeaderComment className="commento-header">
              <Avatar src={'https://i.pravatar.cc/40?img=3'} alt={`Avatar di ${comment.user_name}`} className="avatar" />
              <Info className="commento-info">
                <Autore className="autore">{comment.user_name}</Autore>
                <Recipe className="ricetta">su  
                  <Link to={`/recipes/${comment.recipe_id}`}>
                    <RecipeTitle className='title-ricetta'>{comment.title}</RecipeTitle>
                  </Link>
                </Recipe>
              </Info>
              <Date className="data">
                {formatDateString(comment.create_at)}
              </Date>
            </HeaderComment>
            <Content className="contenuto">{comment.comment_text}</Content>
          </Comment>
        ))}
      </List>
    </Container>
  );
}

export default LastComments;