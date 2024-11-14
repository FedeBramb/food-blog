import React from 'react';

import RecipesPreviewsContainer from '../RecipesPreviewsContainer/RecipesPreviewsContainer.component.jsx';
import LastComments from '../LastComments/LastComments.component.jsx';

import { Container } from './PreviewsAndCommentsContainer.styles.jsx';

// Container che ospita anteprime delle ricette in home page e ultimi commenti.
const PreviewsAndCommentsContainer = () => {
  return (
    <Container>
      <RecipesPreviewsContainer />
      <LastComments />
    </Container>
  )
};

export default PreviewsAndCommentsContainer;