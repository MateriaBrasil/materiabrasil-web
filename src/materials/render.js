import React from 'react';
import Grid from '@material-ui/core/Grid';
import Router from './Router';
import NavBarAndContent from '../NavBarAndContent';
import Header from './info/header/index';

export default props => routeProps => {
  return (
    <Grid style={{ backgroundColor: '#fff' }}>
      <Header>
        <NavBarAndContent style={{ zIndex: '10' }} transparent {...props} />
      </Header>
      <Router {...props} />
    </Grid>
  );
};
