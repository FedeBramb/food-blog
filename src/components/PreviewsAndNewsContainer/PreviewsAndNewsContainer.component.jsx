import React from 'react';

import RecipesPreviewsContainer from '../RecipesPreviewsContainer/RecipesPreviewsContainer.component.jsx';
import News from '../News/News.component.jsx';

import { Container } from './PreviewsAndNewsContainer.styles.jsx';


const PreviewsAndNewsContainer = () => {
  return (
    <Container>
      <RecipesPreviewsContainer />
      <News />
    </Container>
  )
}

export default PreviewsAndNewsContainer;