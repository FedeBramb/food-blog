import React from 'react';
import { useComments } from '../../hooks/useComments';

import Comment from '../Comment/Comment.component.jsx';
import Loader from '../Loader/Loader.component';

import {
  Container,
  Title,
  List,
} from './LastComments.styles.jsx';

// Container con gli ultimi commenti delle ricette viene mostrato in homepage
const LastComments = () => {
  const { allComments, allCommentsLoading, allCommentsErroraddComment} = useComments();

  // Creiamo una copia dei commenti e invertiamo l'ordine per avere prima l'ultimo commento
  const reverseComments = [...allComments].reverse();

  if (allCommentsLoading) return <Loader/>; // Mostra loading
  if (allCommentsErroraddComment) return <div>Errore: {allCommentsErroraddComment}</div>;

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