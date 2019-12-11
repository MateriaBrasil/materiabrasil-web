import React from 'react';

import Home from './Home';
import NavbarAndContent from '../NavBarAndContent';

export default props => routeProps => (
  <NavbarAndContent white={true} institutional {...props}>
    <Home {...props} />
  </NavbarAndContent>
);
