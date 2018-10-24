import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

export default props => (
  <Grid xs={12} sm={6} md={4} lg={3} item style={{ padding: 20 }}>
    <Avatar
      alt={props.name + ' - foto'}
      src={props.image}
      style={{
        maxWidth: '100%',
        display: 'block',
        margin: '0 auto',
        width: 200,
        height: 200,
      }}
    />
    <p style={{ textAlign: 'center', color: 'white', fontWeight: 500 }}>
      {props.name}
    </p>
    <p style={{ textAlign: 'center', color: 'white' }}>{props.job}</p>
    <p style={{ textAlign: 'center', color: 'white' }}>{props.description}</p>
  </Grid>
)
