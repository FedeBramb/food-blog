import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './RecipePreview.styles.css';

const RecipePreview = ({ recipe }) => {
    const { title, imagesSquare, description, index } = recipe; 

    return (
        <div className="section" key={`section-${index}`}>
            <Link to={`/`} aria-label={`Link to ${title}`}>
                <LazyLoadImage key={`${title}-${index}`} src={imagesSquare} alt={`pic-${title}`} />
            </Link>
            <div className="text-container">
                <span className='date'>8 Luglio, 2024</span>
                <h2>{title}</h2>
                <p>{description}</p> {/* Display description */}
                <Link to={`/cookbook/${title.toLowerCase()}`}>
                    <span className="span-link">LEGGI LA RICETTA</span>
                </Link>
            </div>
        </div>
    );
}

export default RecipePreview;
