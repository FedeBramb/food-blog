import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';

import './RecipeCard.styles.css';

const RecipeCard = ({ title, image, index }) => {
    
  return (
    <>
      <Link to={`${title.trim().toLowerCase()}`} className='link-custom' key={index}>
          <div className='card'>
            <div className='poster-container'>
              <LazyLoadImage 
                src={image}
                alt={`pic-${index}`}
                className='poster'
              />
            </div>
            <div className='title-container'>
              <div className='title-content'>
                <p className='title-card' key={`${index}-p`}>{title}</p>
                <button className="read-button">Scopri</button>  
              </div>
            </div>
          </div>
        </Link>
    </>
  )
}

export default RecipeCard;