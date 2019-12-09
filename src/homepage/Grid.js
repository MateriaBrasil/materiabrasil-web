import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import './grid.css';
import Colors from '../Colors';

const styles = theme => ({
  grid: {
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    padding: '400px 0',
    [theme.breakpoints.down('md')]: {
      padding: '200px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '100px 0',
    },
  },
});

export default withStyles(styles)(props => {
  return (
    <Grid
      id={props.id}
      container
      style={{
        background: props.backgroundImage || Colors.white,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        height: '45vh',
        ...props.style,
      }}
    >
      <Grid className="grid-home">{props.children}</Grid>
    </Grid>
  );
});
