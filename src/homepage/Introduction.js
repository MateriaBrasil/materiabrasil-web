import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Colors from '../Colors';

import { StyledTypography } from './styles';
import InfoIntro from './InfoIntro';
import Grid from './Grid';

const styles = theme => ({
  text: {
    color: Colors.white,
    padding: '0 20px',
    fontSize: 20,
    paddingTop: 50,
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
    },
  },
});

export default withStyles(styles)(({ classes }) => (
  <Grid id="introduction" backgroundImage={Colors.bondiBlue}>
    <StyledTypography variant="h1">Materioteca</StyledTypography>
    <InfoIntro />
  </Grid>
));
