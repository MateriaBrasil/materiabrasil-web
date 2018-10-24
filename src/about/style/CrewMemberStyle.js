import React from 'react'
import Grid from '@material-ui/core/Grid'

export default props => (
  <Grid
    xs={12}
    sm={6}
    md={4}
    lg={3}
    alignContent="center"
    item
    style={{ padding: 20 }}
  >
    <img
      src={props.image}
      alt="Crew Mmmber image"
      style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
    />
    <p style={{ textAlign: 'center', color: 'white', fontWeight: 500 }}>
      {props.name}
    </p>
    <p style={{ textAlign: 'center', color: 'white' }}>{props.job}</p>
    <p style={{ textAlign: 'center', color: 'white' }}>{props.description}</p>
  </Grid>
)
