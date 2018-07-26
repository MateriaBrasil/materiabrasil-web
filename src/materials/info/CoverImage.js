import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default ({ name, imageUrl, properties, usage }) => (
  <Grid item xs={12}>
    <Paper elevation={0}>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: '100%', objectFit: 'cover', height: 360 }}
      />
    </Paper>
  </Grid>
)
