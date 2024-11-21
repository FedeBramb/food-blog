import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import { UserProvider } from './context/user.context.jsx';
import { RecipeProvider } from './context/recipe.context.jsx';
import { CommentsProvider } from './context/comments.context.jsx';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RecipeProvider>
          <CommentsProvider>
            <App />
          </CommentsProvider>
        </RecipeProvider>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode>
)
