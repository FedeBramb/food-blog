import { json } from "react-router-dom";

export const fetchRecipes = async () => {
  try {
    const response = await fetch('https://food-blog-api-jlca.onrender.com/recipes');
    if (!response.ok) throw new Error('Errore nel recupero delle ricette');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
  
// export const fetchRecipeById = async (recipe_id) => {
//   try {
//     const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${recipe_id}`);
//     if (!response.ok) throw new Error('Errore nel recupero della ricetta');
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };


export const fetchAllComments = async () => {
  try {
    const response = await fetch(`https://food-blog-api-jlca.onrender.com/comments`);
    if (!response.ok) throw new Error('Errore nel recupero dei commenti');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCommentsByRecipeId = async (recipe_id) => {
  try {
    const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${recipe_id}/comments`);
    if (!response.ok) throw new Error('Errore nel recupero dei commenti');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addCommentApi = async (newComment, recipe_id) => {
  try {
    const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${recipe_id}/comments`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
    })
    if (!response.ok) throw new Error('Errore durante l\'aggiunta del commento');
    const updatedComments = await response.json();
    return updatedComments;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const deleteCommentApi = async (commentId, recipe_id, userId) => {
  try  {
    const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${recipe_id}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId
      }),
    })
    if (!response.ok) throw new Error('Errore durante la cancellazione del commento');
    const updatedComments = await response.json();
    return updatedComments;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const fetchSignIn = async (email, password) => {
  try {
    const response = await fetch('https://food-blog-api-jlca.onrender.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (!response.ok) {
      const errorData = await response.json(); // Ottenere il messaggio d'errore dall'API
      throw new Error(errorData.error || 'Errore durante il log in');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const fetchSignUp = async (username, email, password, checkPassword) => {
  try {
    const response = await fetch('https://food-blog-api-jlca.onrender.com/register', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({username, email, password, checkPassword})
    })
    if (!response.ok) {
      const errorData = await response.json(); // Ottenere il messaggio d'errore dall'API
      throw new Error(errorData.error || 'Errore durante la registrazione');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}





  