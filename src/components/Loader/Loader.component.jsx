import React from 'react';
import { ClipLoader } from 'react-spinners';

import { Container } from './Loader.styles';

const Loader = () => {
  return (
    <Container><ClipLoader color="#0f324c" size={300} loading={true}/></Container>
  )
}

export default Loader