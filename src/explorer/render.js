import React from 'react';

import FetchMaterials from './fetchMaterials';

import { Container } from './styles';

export default function(props) {
  console.log(props);

  return (
    <Container>
      <FetchMaterials {...props} />
    </Container>
  );
}
