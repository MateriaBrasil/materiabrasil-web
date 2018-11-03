import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import gridStyle from './gridStyle'
import Colors from '../Colors'

export default withStyles(gridStyle)(({ color = Colors.white, ...props }) => (
  <Grid item xs={12} className={props.classes.grid}>
    <Typography
      color="inherit"
      style={{
        color: props.color ? Colors.black : color,
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 300,
        marginLeft: '1%',
        marginRight: '1%',
        marginBottom: '2%',
        padding: '0 6%',
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
