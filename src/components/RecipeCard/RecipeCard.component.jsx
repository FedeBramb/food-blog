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

const RecipeCard = ({ title, image, id }) => {
  console.log(id);
  return (
    <>
      <CustomLink to={`${id}`} className='CustomLink-custom' key={id}>
        <CardContainer>
          <PosterContainer>
            <PosterLazyImg 
              src={image}
              alt={`pic-${id}`}
              className='poster'
            />
          </PosterContainer>
          <TitleContainer>
            <TitleContent>
              <p className='title-card' key={`${id}-p`}>{title}</p>
              <ReadButton>Scopri</ReadButton>  
            </TitleContent>
          </TitleContainer>
        </CardContainer>
      </CustomLink>
    </>
  )
}

export default RecipeCard;