import React from 'react';

import Home from './Home';
import NavbarAndContent from '../NavBarAndContent';

export default props => routeProps => (
  <NavbarAndContent institutional {...props}>
    <Home {...props} />
  </NavbarAndContent>
);
