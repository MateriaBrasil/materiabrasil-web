import React from 'react'
import Grid from '@material-ui/core/Grid'

export default ({ name, imageUrl, coverImageUrl, properties, usage }) => (
  <Grid item xs={12} style={{ marginBottom: 16 }}>
    <img
      src={coverImageUrl || imageUrl}
      alt={name}
      style={{ width: '100%', objectFit: 'cover', height: 'auto' }}
    />
  </Grid>
)
