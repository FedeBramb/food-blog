import { useState, useEffect } from 'react';
import { fetchCommentsByRecipeId, addCommentApi, deleteCommentApi } from './api.js';


const useComments = (recipe_id) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [commentsError, setCommentsError] = useState(null);
  
    useEffect(() => {
      const getComments = async () => {
        try {
          const data = await fetchCommentsByRecipeId(recipe_id);
          setComments(data);
        } catch (error) {
          setCommentsError(error.message);
        } finally {
          setCommentsLoading(false);
        }
      };
  
      getComments(recipe_id);
    }, [recipe_id]);

    const addComment = async (newComment, recipe_id) => {
      try {
        const updatedComments = await addCommentApi(newComment, recipe_id);
        setComments(updatedComments);
      } catch (err) {
        console.error("Errore durante l'invio del commento:", err);
      }
    }

    const deleteComment = async (commentId, recipe_id, userId) => {
      try {
        const updatedComments = await deleteCommentApi(commentId, recipe_id, userId);
        setComments(updatedComments);
      } catch (err) {
        console.error("Errore durante la cencellazione del commento:", err);
      }
    }
  
    return { comments, commentsLoading, commentsError, addComment, deleteComment };
};



export {useComments};