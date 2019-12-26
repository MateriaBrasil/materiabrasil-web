import React, { Fragment } from 'react';

import { Container } from './styles';
import MaterialsLoop from '../explorer/materialsLoop';
import Contact from '../contact/render';

export default props => routeProps => {
  console.log(props);
  const categories = null;
  return (
    <Fragment>
      <Container>
        <MaterialsLoop {...props} categories={categories} />
      </Container>
      <Contact />
    </Fragment>
  );
};
