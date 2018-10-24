import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Style from './Style'

export default withStyles(Style)(props => (
  <Grid item xs={12} sm={8} md={6} className={props.classes.grid}>
    <Typography
      variant="h5"
      color="inherit"
      style={{
        color: '#fff',
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 300,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
