import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import gridStyle from './gridStyle'

export default withStyles(gridStyle)(props => (
  <Grid
    item
    xs={12}
    style={{
      padding: '0 0',
      position: 'relative',
      margin: '0 auto',
      overflow: 'hidden',
      textAlign: 'center',
    }}
  >
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
  </Grid>
))
