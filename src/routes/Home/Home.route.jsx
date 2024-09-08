import React from 'react';

import Carousel from '../../components/Carousel/Carousel.component';
import PreviewsAndNewsContainer from '../../components/PreviewsAndNewsContainer/PreviewsAndNewsContainer.component';

const Home = () => {
  return (
    <div style={{marginBottom: "20px", height: "100%"}}>
      <Carousel></Carousel>
      <PreviewsAndNewsContainer />
    </div>
  )
}

export default Home