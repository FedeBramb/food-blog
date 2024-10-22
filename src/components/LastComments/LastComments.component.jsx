import React from 'react';
import { useComments } from '../../hooks/useComments';

import Comment from '../Comment/Comment.component.jsx';
import Loader from '../Loader/Loader.component';

import {
  Container,
  Title,
  List,
} from './LastComments.styles.jsx';

const LastComments = () => {
  const { allComments, allCommentsLoading, allCommentsErroraddComment} = useComments();

  // Creiamo una copia dei commenti e invertiamo l'ordine per avere prima l'ultimo commento
  const reverseComments = [...allComments].reverse();

  if (allCommentsLoading) return <Loader/>; // Mostra loading
  if (allCommentsErroraddComment) return <div>Errore: {allCommentsErroraddComment}</div>;

  // Formattiamo la data
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


  return (
    <Container className="ultimi-commenti">
      <Title className='gradient-text'>Commenti</Title>
      <hr className='hr-blue' />
      <List className="commenti-lista">
        {reverseComments.map((comment) => (
          <Comment key={comment.id_comment} comment={comment} className="commento" />
        ))}
      </List>
    </Container>
  );
}

export default LastComments;