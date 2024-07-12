import React from 'react';

import {
  CustomLink,
  TitleContainer,
  CardContainer,
  PosterContainer,
  PosterLazyImg,
  TitleContent,
  ReadButton
} from './RecipeCard.styles.jsx';

const RecipeCard = ({ title, image, index }) => {
    
  return (
    <>
      <CustomLink to={`${title.trim().toLowerCase()}`} className='CustomLink-custom' key={index}>
        <CardContainer>
          <PosterContainer>
            <PosterLazyImg 
              src={image}
              alt={`pic-${index}`}
              className='poster'
            />
          </PosterContainer>
          <TitleContainer>
            <TitleContent>
              <p className='title-card' key={`${index}-p`}>{title}</p>
              <ReadButton>Scopri</ReadButton>  
            </TitleContent>
          </TitleContainer>
        </CardContainer>
      </CustomLink>
    </>
  )
}

export default RecipeCard;