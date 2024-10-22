import React from 'react';

import RecipesPreviewsContainer from '../RecipesPreviewsContainer/RecipesPreviewsContainer.component.jsx';
import LastComments from '../LastComments/LastComments.component.jsx';

import { Container } from './PreviewsAndCommentsContainer.styles.jsx';

// Contiene le anteprime delle ricette e il container delle News
const PreviewsAndCommentsContainer = () => {
  return (
    <Container>
      <RecipesPreviewsContainer />
      <LastComments />
    </Container>
  )
};

export default PreviewsAndCommentsContainer;