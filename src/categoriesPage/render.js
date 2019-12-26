import React from 'react';
import Router from './Router';
import NaveBarAndContent from '../NavBarAndContent';

export default props => routeProps => (
  <NaveBarAndContent {...props}>
    <Router {...props} />
  </NaveBarAndContent>
);
