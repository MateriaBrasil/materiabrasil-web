import React, { Fragment } from 'react';
import Router from './Router';

export default props => routeProps => (
  <Fragment>
    <Router {...props} />
  </Fragment>
);
