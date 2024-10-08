import { useState, useEffect, useState } from 'react';
import { fetchCommentsByRecipeId, addCommentApi, deleteCommentApi } from './api.js';


const useComments = (id) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [commentsError, setCommentsError] = useState(null);
  
    useEffect(() => {
      const getComments = async () => {
        try {
          const data = await fetchCommentsByRecipeId(id);
          setComments(data);
        } catch (error) {
          setCommentsError(error.message);
        } finally {
          setCommentsLoading(false);
        }
      };
  
      getComments(id);
    }, [id]);

    const addComment = async (newComment, recipeId) => {
      try {
        const updatedComments = await addCommentApi(newComment, recipeId);
        setComments(updatedComments);
      } catch (err) {
        console.error("Errore durante l'invio del commento:", err);
      }
    }

    const deleteComment = async (commentId, recipeId, userId) => {
      try {
        const updatedComments = await deleteCommentApi(commentId, recipeId, userId);
        setComments(updatedComments);
      } catch (err) {
        console.error("Errore durante la cencellazione del commento:", err);
      }
    }
  
    return { comments, commentsLoading, commentsError, addComment, deleteComment };
};



export {useComments};