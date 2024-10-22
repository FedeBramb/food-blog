import React from 'react';

import Carousel from '../../components/Carousel/Carousel.component';
import PreviewsAndCommentsContainer from '../../components/PreviewsAndCommentsContainer/PreviewsAndCommentsContainer.component';

const Home = () => {
  return (
    <div style={{marginBottom: "20px", height: "100%"}}>
      <Carousel></Carousel>
      <PreviewsAndCommentsContainer />
    </div>
  )
}

export default Home