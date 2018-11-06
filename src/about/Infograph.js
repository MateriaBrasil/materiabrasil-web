import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default props => (
  <Grid item xs={12} style={{ textAlign: 'center', marginBottom: 30 }}>
    <Typography variant="h4">{props.title}</Typography>
    <img
      src={props.url}
      alt=""
      style={{ maxWidth: '800px', width: '100%', padding: '3%' }}
    />
  </Grid>
)
