import React from 'react';

import RecipesPreviewsContainer from '../RecipesPreviewsContainer/RecipesPreviewsContainer.component.jsx';
import News from '../News/News.component.jsx';

import { Container, Background } from './PreviewsAndNewsContainer.styles.jsx';


const PreviewsAndNewsContainer = () => {
  return (
    <Background>
      <Container>
        <RecipesPreviewsContainer />
        <News />
      </Container>
    </Background>
  )
}

export default PreviewsAndNewsContainer;