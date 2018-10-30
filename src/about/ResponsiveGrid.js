import React from 'react'
import Grid from '@material-ui/core/Grid'

export default ({ style, className, children }) => (
  <Grid item xs={12} sm={8} md={8} className={className} style={style}>
    {children}
  </Grid>
)
