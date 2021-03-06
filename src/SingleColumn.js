import React from 'react'
import Grid from '@material-ui/core/Grid'

export default ({ children, noSpacing }) => (
  <Grid container spacing={noSpacing ? 0 : 32}>
    <Grid item xs={12} sm={8} md={6} style={{ margin: '0 auto' }}>
      {children}
    </Grid>
  </Grid>
)
