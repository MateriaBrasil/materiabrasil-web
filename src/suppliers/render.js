import React from 'react';
import Router from './Router';
import NaveBarAndContent from '../NavBarAndContent';
import Grid from '@material-ui/core/Grid';

export default props => routeProps => (
  <Grid style={{ backgroundColor: '#fff' }}>
    {/* <NaveBarAndContent {...props}> */}
    <Router {...props} />
    {/* </NaveBarAndContent> */}
  </Grid>
);
