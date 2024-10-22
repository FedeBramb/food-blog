import { useState, useEffect } from 'react';
import { fetchAllComments, fetchCommentsByRecipeId, addCommentApi, deleteCommentApi } from './api.js';


const useComments = (recipe_id) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [commentsError, setCommentsError] = useState(null);

    const [allComments, setAllComments] = useState([]);
    const [allCommentsLoading, setAllCommentsLoading] = useState(true);
    const [allCommentsError, setAllCommentsError] = useState(null);
  
    useEffect(() => {
      const getCommentsByRecipe = async () => {
        try {
          const data = await fetchCommentsByRecipeId(recipe_id);
          setComments(data);
        } catch (error) {
          setCommentsError(error.message);
        } finally {
          setCommentsLoading(false);
        }
      };
  
      if (recipe_id) { // Esegui la chiamata solo se recipe_id è presente
        getCommentsByRecipe(recipe_id);
      } else {
        setCommentsLoading(false); // Non carica nulla se non c'è recipe_id
      }
    }, [recipe_id]);

    useEffect(() => {
      const getAllComments = async () => {
        try {
          const data = await fetchAllComments();
          setAllComments(data);
        } catch (error) {
          setAllCommentsError(error.message);
        } finally {
          setAllCommentsLoading(false);
        }
      };

      getAllComments();
    }, [])

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
  
    return { 
      comments,
      commentsLoading, 
      commentsError, 
      allComments, 
      allCommentsLoading,
      allCommentsError,
      addComment,
      deleteComment 
    };
};



export {useComments};