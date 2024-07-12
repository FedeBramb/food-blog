import React, { useState } from 'react';
import { StarRatingContainer, StarSpan } from './StarRating.styles.jsx';


// Gestisce il rating nei commenti
// Memorizziamo il rating nello state, quale stella viene evidenziata al passaggio del mouse
// Funzioni per gestire quando il mouse è in entrata e uscita
const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); 

  const handleStarClick = (num) => {
    setRating(num);
    onRatingChange(num);
  };

  const handleMouseEnter = (num) => {
    setHoverRating(num);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <StarRatingContainer>
      {[1, 2, 3, 4, 5].map((num) => (
        <StarSpan
          key={num}
          className={`star ${num <= (hoverRating || rating) ? 'active' : ''}`}
          onClick={() => handleStarClick(num)}
          onMouseEnter={() => handleMouseEnter(num)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733;
        </StarSpan>
      ))}
    </StarRatingContainer>
  );
};

export default StarRating;