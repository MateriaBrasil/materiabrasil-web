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
      src="https://via.placeholder.com/150x200"
      alt="Crew Mmmber image"
      style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
    />
    <p style={{ textAlign: 'center', color: 'white', fontWeight: 500 }}>
      Jhon Doe
    </p>
    <p style={{ textAlign: 'center', color: 'white' }}>Job do integrante</p>
    <p style={{ textAlign: 'center', color: 'white' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
      congue dui. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; In hac habitasse platea dictumst.
    </p>
  </Grid>
)
