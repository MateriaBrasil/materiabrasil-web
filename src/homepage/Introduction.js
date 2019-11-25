import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Colors from '../Colors';

import { StyledTypography } from './styles';
import InfoIntro from './InfoIntro';
import Grid from './Grid';

import bg from './texturas.jpg';

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
  <Grid id="introduction" backgroundImage={`url(${bg})`}>
    <StyledTypography variant="h1">Materioteca</StyledTypography>
    <InfoIntro />
  </Grid>
));
