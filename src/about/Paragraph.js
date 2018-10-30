import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import gridStyle from './gridStyle'
import Colors from '../Colors'

export default withStyles(gridStyle)(props => (
  <Grid item xs={12} className={props.classes.grid}>
    <Typography
      variant="h5"
      color="inherit"
      style={{
        color: props.colored ? Colors.black : Colors.white,
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 300,
        marginLeft: '1%',
        marginRight: '1%',
        padding: '0 6%',
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
