import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import gridStyle from './gridStyle'
import Colors from '../Colors'

export default withStyles(gridStyle)(({ color = Colors.white, ...props }) => (
  <Grid
    item
    xs={12}
    className={props.classes.grid}
    style={{
      position: 'relative',
    }}
  >
    <Typography
      variant="h4"
      color="inherit"
      style={{
        color: props.color ? Colors.black : color,
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 500,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
