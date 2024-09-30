import React from 'react';
import { ClipLoader } from 'react-spinners';

import { Container } from './Loader.styles';

// Svg che mostra un'icona di caricamento
const Loader = () => {
  return (
    <Container><ClipLoader color="#0f324c" size={300} loading={true}/></Container>
  )
}

export default Loader