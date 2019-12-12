import React from 'react';

import FetchMaterials from './fetchMaterials';

import { Container } from './styles';

export default function(props) {
  return (
    <Container>
      <FetchMaterials {...props} />
    </Container>
  );
}
