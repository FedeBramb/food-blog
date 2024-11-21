import React, { useContext } from 'react';
import { CommentsContext } from '../../context/comments.context.jsx';

import Comment from '../Comment/Comment.component.jsx';
import Loader from '../Loader/Loader.component';

import {
  Container,
  Title,
  List,
} from './LastComments.styles.jsx';

// Container con gli ultimi commenti delle ricette viene mostrato in homepage
const LastComments = () => {
  const { allComments, allCommentsLoading, allCommentsError} = useContext(CommentsContext);

  // Creiamo una copia dei commenti e invertiamo l'ordine per avere prima l'ultimo commento
  const reverseComments = [...allComments].reverse();

  if (allCommentsLoading) return <Loader/>; // Mostra loading
  if (allCommentsError) return <div>Errore: {allCommentsError}</div>;

  return (
    <Container>
      <Title className='gradient-text'>Commenti</Title>
      <hr className='hr-blue' />
      <List>
        {reverseComments.map((comment) => (
          <Comment key={comment.id_comment} comment={comment} isFullWidth={true} />
        ))}
      </List>
    </Container>
  );
}

export default LastComments;