import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

export default props => (
  <Grid xs={12} sm={6} md={4} lg={3} item style={{ padding: 20 }}>
    <Avatar
      alt={props.name + ' - foto'}
      src={props.image}
      style={{
        maxWidth: '100%',
        display: 'block',
        margin: '10px auto',
        width: 200,
        height: 200,
      }}
    />
    <Typography
      style={{ textAlign: 'center', color: 'white', fontWeight: 500 }}
    >
      {props.name}
    </Typography>
    <Typography
      style={{ textAlign: 'center', color: 'white', margin: '10px 0' }}
    >
      {props.job}
    </Typography>
    <Typography style={{ textAlign: 'center', color: 'white' }}>
      {props.description}
    </Typography>
  </Grid>
)
