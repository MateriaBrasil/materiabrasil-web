import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'
import materials from './data'

export default () => (
  <Grid container style={{ marginTop: 50 }} justify="center">
    <Grid item xs={12} lg={6}>
      <Grid container spacing={24} justify="center">
        {materials.map((material, index) => (
          <Grid item key={index}>
            <Card image={material.image} heading={material.heading} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
)
