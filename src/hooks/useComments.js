import { useState, useEffect } from 'react';
import { fetchCommentsByRecipeId } from './api.js';


const useComments = (id) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getComments = async () => {
        try {
          const data = await fetchCommentsByRecipeId(id);
          setComments(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      getComments(id);
    }, [id]);
  
    return { comments, setComments, loading, error };
};

export {useComments};