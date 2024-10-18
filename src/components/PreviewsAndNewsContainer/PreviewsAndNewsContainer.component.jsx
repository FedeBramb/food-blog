import React from 'react';

import RecipesPreviewsContainer from '../RecipesPreviewsContainer/RecipesPreviewsContainer.component.jsx';
import LastComments from '../LastComments/LastComments.component.jsx';

import { Container } from './PreviewsAndNewsContainer.styles.jsx';

// Contiene le anteprime delle ricette e il container delle News
const PreviewsAndNewsContainer = () => {
  return (
    <Container>
      <RecipesPreviewsContainer />
      <LastComments />
    </Container>
  )
}

export default PreviewsAndNewsContainer;