import React from 'react'
import Grid from '@material-ui/core/Grid'

export default ({ name, imageUrl, properties, usage }) => (
  <Grid item xs={12} style={{ marginBottom: 16 }}>
    <img
      src={imageUrl}
      alt={name}
      style={{ width: '100%', objectFit: 'cover', height: 360 }}
    />
  </Grid>
)
