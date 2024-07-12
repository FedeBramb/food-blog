import React from 'react';
import { Link } from 'react-router-dom';

import {
    PreviewContainer,
    LazyImg,
    DetailsContainer,
} from './RecipePreview.styles.jsx';

const RecipePreview = ({ recipe }) => {
    const { title, imagesSquare, description, index } = recipe; 

    return (
        <PreviewContainer key={`section-${index}`}>
            <Link to={`/cookbook/${title.toLowerCase()}`} aria-label={`Link to ${title}`}>
                <LazyImg key={`${title}-${index}`} src={imagesSquare} alt={`pic-${title}`} />
            </Link>
            <DetailsContainer>
                <span className='date'>8 Luglio, 2024</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={`/cookbook/${title.toLowerCase()}`}>
                    <span className="span-link">LEGGI LA RICETTA</span>
                </Link>
            </DetailsContainer>
        </PreviewContainer>
    );
}

export default RecipePreview;
