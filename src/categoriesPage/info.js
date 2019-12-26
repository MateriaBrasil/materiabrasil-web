import React, { Fragment } from 'react';

import { Container } from './styles';
import Header from './header';
import MaterialsLoop from '../explorer/materialsLoop';
import Contact from '../contact/render';

export default props => routeProps => {
  const category = routeProps.match.params.id;
  const categories = `categories%5B%5D=${category}`;

  return (
    <Fragment>
      <Header {...props} category={category} />
      <Container>
        <MaterialsLoop {...props} categories={categories} />
      </Container>
      <Contact />
    </Fragment>
  );
};
