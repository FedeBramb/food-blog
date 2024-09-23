// src/api.js

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
  
export const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${id}`);
    if (!response.ok) throw new Error('Errore nel recupero della ricetta');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCommentsByRecipeId = async (id) => {
  try {
    const response = await fetch(`https://food-blog-api-jlca.onrender.com/recipes/${id}/comments`);
    if (!response.ok) throw new Error('Errore nel recupero dei commenti');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSignIn = async (email, password) => {
  try {
    const response = await fetch('https://food-blog-api-jlca.onrender.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (!response.ok) throw new Error('Errore durante il Log in');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const fetchSignUp = async (username, email, password) => {
  try {
    const response = await fetch('https://food-blog-api-jlca.onrender.com/register', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({username, email, password})
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



  