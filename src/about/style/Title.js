import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Style from './Style'

export default withStyles(Style)(props => (
  <Grid
    className={props.classes.grid}
    xs={12}
    item
    style={{
      paddingTop: '5%',
      position: 'relative',
    }}
  >
    <Typography
      variant="h3"
      color="inherit"
      style={{
        color: '#fff',
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 500,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
