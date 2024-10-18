import React from 'react';
import { useComments } from '../../hooks/useComments';

import Loader from '../Loader/Loader.component';
import './LastComments.styles.css';

const LastComments = () => {
  const { allComments, allCommentsLoading, allCommentsErroraddComment} = useComments();

  if (allCommentsLoading) return <Loader/>; // Mostra loading
  if (allCommentsErroraddComment) return <div>Errore: {allCommentsErroraddComment}</div>;

  return (
    <div className="ultimi-commenti">
      <h2 className='gradient-text'>Ultimi Commenti</h2>
      <hr className='hr-blue' />
      <div className="commenti-lista">
        {allComments.map((comment) => (
          <div key={comment.id_comment} className="commento">
            <div className="commento-header">
              <img src={'https://i.pravatar.cc/40?img=3'} alt={`Avatar di ${comment.user_name}`} className="avatar" />
              <div className="commento-info">
                <p className="autore">{comment.user_name}</p>
                <p className="ricetta">su <span className='title-ricetta'>{comment.recipe_id}</span></p>
              </div>
              <p className="data">{comment.create_at}</p>
            </div>
            <p className="contenuto">{comment.comment_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastComments;