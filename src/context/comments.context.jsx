import React, { useState, createContext } from 'react';
import { useComments } from '../hooks/useComments';

export const CommentsContext = createContext();

const CommentsContext = ({ children }) => {
    const [recipeId, setRecipeId] = useState(null);

    const { 
        comments,
        commentsLoading,
        commentsError,
        allComments,
        allCommentsLoading,
        allCommentsError,
        addComment,
        deleteComment,
    } = useComments(recipeId);

    const value = { 
        comments,
        commentsLoading,
        commentsError,
        allComments,
        allCommentsLoading,
        allCommentsError,
        addComment,
        deleteComment,
        setRecipeId
    };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  )
}

export default comments