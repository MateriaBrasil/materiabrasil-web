import React, { Fragment } from 'react';

import Content from './Content';
import NavBar from './navBar/NavBar';

export default props => (
  <Fragment>
    <NavBar {...props} />
    <Content {...props}>{props.children}</Content>
  </Fragment>
);
