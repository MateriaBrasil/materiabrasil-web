import React, { Fragment } from 'react';
import Router from './Router';
import NavBarAndContent from '../NavBarAndContent';
import Header from './info/header/index';

export default props => routeProps => {
  return (
    <Fragment>
      <Header>
        <NavBarAndContent style={{ zIndex: '10' }} transparent {...props} />
      </Header>
      <Router {...props} />
    </Fragment>
  );
};
