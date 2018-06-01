import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default ({ current }) => {
  const { name, imageUrl, description, averagePrice, code } = current

  return (
    <Grid container spacing={24} justify="center">
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant="display2">{name}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={8} style={{ textAlign: 'center' }}>
        <img src={imageUrl} alt={name} style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Typography variant="caption" style={{ marginBottom: 15 }}>
          {code}
        </Typography>
        <Typography variant="subheading" style={{ marginBottom: 15 }}>
          {description}
        </Typography>
        <Typography variant="subheading">{averagePrice}</Typography>
      </Grid>
    </Grid>
  )
}
